 <template>
	<div class="profile">

		<div class="profile-header">
			<div class="profile-header-side">
				<img class="profile-header-side-ava">
				<div class="profile-header-side-content">
					<div class="profile-header-side-content-name">{{profile.name}}</div>
					<div class="profile-header-side-content-who">{{profile.who}}</div>
					<div class="profile-header-side-content-city">{{profile.city}}</div>
				</div>
			</div>
			<div class="profile-header-side"><div class="button">Редактировать профиль</div></div>
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
				projects: [],
				reviews: [],
				services: [],
				profile: {
					ava: '',
					name: 'Алия Болманова ',
					who: 'Дизайнер интерьера',
					city: 'Алматы'
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
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.profile{
		&-header{
			background-color: $white;
			border-radius: 10px;
			flex-direction: row;
			&-side{
				width: auto;
				&-ava{
					height: 125px;
					width: 125px;
					border-radius: 50%;
					margin-right: 50px;
				}
				&-content{
					flex-direction: row;
					flex-wrap: wrap;
					&-name{
						font-size: 40px;
						margin-bottom: 32px;
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
					width: 33%;
				}
			}
		}
		&-body{
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
					&.active{
						color: $black;
						&:after{
							content: "";
							background-color: $cian;
							width: 100%;
							height: 6px;
							position: absolute;
							top: 0;

						}
					}
				}
			}
		}
		&-footer{

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