 <template>
	<div class="profile" :style="{opacity: profile.performer_id ? 1 : 0}">

		<div class="profile-header">
			<div class="profile-header-side">
				<img class="profile-header-side-ava" :src="profile.avatar">
				<div class="profile-header-side-content">
					<div class="profile-header-side-content-name">{{profile.first_name}} {{profile.last_name}} {{profile.patronymic}}</div>
					<div class="profile-header-side-content-who">{{profile.who}}</div>
					<div class="profile-header-side-content-city">{{profile.city}}</div>
				</div>
			</div>
			<div class="profile-header-side"><router-link to="/partner/edit" class="button">Редактировать профиль</router-link></div>
		</div>

		<div class="profile-body">
			<div class="profile-body-links">
				<div class="profile-body-links-link" :class="{'active': current === i}" v-for="(link, i) in links" @click="current = i">
					{{link}}
				</div>
			</div>
			
			<v-about v-if="current === 0" />
			<v-projects :projects="projects" v-else-if="current === 1" />
			<v-reviews :reviews="reviews" v-else-if="current === 2" />
			<v-services :services="services" v-else />


		</div>

		<div class="profile-footer">
			<div class="profile-footer-title">Похожин специалисты рядом</div>
			<div class="profile-footer-content">
				<div class="profile-footer-content-mimic" v-for="mimic in mimics">
					<div class="profile-footer-content-mimic-header">
						<div class="profile-footer-content-mimic-header-name">{{mimic.name}}</div>
						<div class="profile-footer-content-mimic-header-raiting"><div></div>{{mimic.raiting}}</div>
						<div class="profile-footer-content-mimic-header-who">{{mimic.who}}</div>

					</div>
					<div class="profile-footer-content-mimic-body">
						<img :src="img" v-for="img in mimic.img">
					</div>

					<div class="profile-footer-content-mimic-link">
						Посмотреть портфолио
					</div>

				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import vAbout from './../../components/partner/profile/about.vue'
	import vProjects from './../../components/partner/profile/projects.vue'
	import vReviews from './../../components/partner/profile/reviews.vue'
	import vServices from './../../components/partner/profile/services.vue'

	export default{
		components: { vAbout, vProjects, vReviews, vServices },
		data(){
			return{
				current: 0,
				profile: {},
				projects: [],
				reviews: [],
				services: [],
				profile: {
					id: 0,
					avatar: '',
					name: '',
					who: '',
					city: ''
				},
				links: ['Обзор','Проекты','Отзывы','Услуги'],
				mimics: [
					{
						id: 1,
						name: 'Алина Бабаева',
						who: 'Интерьер дизайнер',
						rating: 4.0,
						img: ['','']
					},
					{
						id: 1,
						name: 'Алина Бабаева',
						who: 'Интерьер дизайнер',
						rating: 4.0,
						img: ['','']
					},
					{
						id: 1,
						name: 'Алина Бабаева',
						who: 'Интерьер дизайнер',
						rating: 4.0,
						img: ['','']
					},
					{
						id: 1,
						name: 'Алина Бабаева',
						who: 'Интерьер дизайнер',
						rating: 4.0,
						img: ['','']
					},
				]
			}
		},
		computed:{
			getProfile(){
				return this.$store.getters['PROFILE'].profile
			}
		},
		watch:{
			getProfile(newData){
				this.changeProfile(newData)
			}
		},
		created(){
			if(!this.$store.getters['PROFILE'].profile.id)
				this.$store.dispatch('GET_PROFILE', {router: this.$router})
			else
				this.changeProfile(this.$store.getters['PROFILE'].profile)
		},
		methods:{
			changeProfile(data){
				this.profile = JSON.parse(JSON.stringify(data))
				if(!this.profile.performer_id)
					this.$router.push('/partner/edit')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.profile{
		&-header{
			width: calc(100% - 100px);
			background-color: $white;
			border-radius: 10px;
			flex-direction: row;
			margin-bottom: 15px;
			padding: 15px;
			&-side{
				flex-direction: row;
				width: auto;
				&-ava{
					min-height: 125px;
					min-width: 125px;
					border-radius: 50%;
					margin-right: 50px;
					background-color: #C0C1C1;
				}
				&-content{
					flex-direction: row;
					flex-wrap: wrap;
					width: auto;
					justify-content: flex-start;
					&-name{
						align-items: flex-start;
						font-size: 40px;
						margin-bottom: 8px;
					}
					&-who{
						width: auto;
						margin-right: 50px;
					}
					&-city{
						width: auto;
						color: $grey;
					}
				}
				&>.button{
					// width: 33%;
				}
			}
		}
		&-body{
			width: calc(100% - 100px);
			margin-bottom: 15px;
			background-color: $white;
			border-radius: 10px;
			justify-content: flex-start;
			&>div{
				max-width: 768px;
			}
			&-links{
				width: 100% !important;
				flex-direction: row;
				border-bottom: 1px solid $grey;
				&-link{
					width: auto;
					padding: 22px 5px;
					margin: 0 45px;
					color: $grey;
					cursor: pointer;
					&:after{
						content: "";
						width: 100%;
						height: 0;
						position: absolute;
						top: 0;
						transition: 0.3s;
					}
					&:hover{
						&:after{
							background-color: #D8E4EC;
							height: 3px;
							transition: 0.1s;
						}
					}
					&.active{
						color: $black;
						&:after{
							background-color: $cian;
							height: 6px;
						}
						
					}
				}
			}
		}
		&-footer{
			width: calc(100% - 100px);
			&-title{
				font-size: 34px;
				line-height: 50px;
			}
			&-content{
				flex-direction: row;
				justify-content: flex-start;
				&-mimic{
					margin: 20px 28px 20px 0;
					padding: 5px;
					background-color: $white;
					border-radius: 10px;
					justify-content: flex-start;
					&-header{
						flex-direction: row;
						flex-wrap: wrap;
						&-name{
							width: 80%;
							font-size: 14px;
						}
						&-raiting{
							width: 20%;
							align-items: flex-end;
							&>div{

							}
						}
						&-who{
							color: $grey;
						}
					}
					&-body{
						&>img{
							height: 125px;
							width: 100%;
							margin: 4px 0;
						}
					}
					&-link{
						margin-top: 11px;
						color: $cian;
						cursor: pointer;
						&:hover{
							color: $blue;
						}
					}
				}
			}
		}
	}

</style>