 <template>
	<div class="sign">

		<div class="sign-header">
			<div class="col-4">
				<form class="sign-header-form" @submit.prevent="sendInfo">
					<div class="sign-header-form-title">Зарегестрируйтесь бесплатно</div>
					<select class="sign-header-form-input"v-model="category">
						<option value="" disabled selected>Выберите категорию</option>
						<option v-for="select in selects" :value="select.id">{{select.name}}</option>
					</select>
					<input required class="sign-header-form-input" placeholder="Наименование компании/ФИО" v-model="company">
					<input required type="email" class="sign-header-form-input" placeholder="Введите свой email" v-model="email">
					<input required type="tel" pattern="7[0-9]{3}[0-9]{3}[0-9]{4}" class="sign-header-form-input" placeholder="Введите номер телефона" v-model="phone">

					<div class="sign-header-form-post">
						<div class="check" :class="{'active': check}" @click="check = !check"></div>
						<div>Я ознакомлен и принимаю</div> 
						<a href="">Пользовательское соглашение</a>
						<div>и</div>
						<a href="">Политика конфиденциальности</a>
					</div>

					<input type="submit" class="sign-header-form-button button" value="Зарегестрироваться">
					 
				</form>
			</div>
			<div class="col-8">
				<div class="sign-header-title">
	 				Покажите свое портфолио более чем 1 млн реальных потенцияальных клиентов
				</div>
			</div>
			<img src="@/static/img/partner_sign_bg.png">
		</div>

		<div class="sign-working">
			<div class="sign-working-title">Как это работает</div>
			<div class="sign-working-about">Начните в 3 простых шага</div>
			<div class="sign-working-content">
				<div class="sign-working-content-item" v-for="(work, i) in works">
					<img class="sign-working-content-item-img" :src="require('@/static/img/' + work.img)">
					<div class="sign-working-content-item-name"><div>{{i+1}}.</div>{{work.about}}</div>
				</div>
			</div>
			
		</div>


		<div class="sign-slider">
			<div class="sign-slider-title">Истории успеха</div>
			<div class="sign-slider-body" :style="{left: -(curent_slide * 100) + '%' }">
				<div class="sign-slider-body-slide" v-for="slide in sliders">
					<img class="sign-slider-body-slide-img col-3" :src="require('@/static/img/' + slide.img)">
					<div class="col-9">
						<div class="sign-slider-body-slide-content">
							<div class="sign-slider-body-slide-content-name">{{slide.name}}</div>
							<div class="sign-slider-body-slide-content-from">{{slide.from}}</div>
							<div class="sign-slider-body-slide-content-about">{{slide.about}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="sign-slider-body-pagination">
				<div :class="{'active': i-1===curent_slide}" v-for="i in sliders.length" @click="curent_slide = i-1"></div>
			</div>
		</div>

		<div class="sign-register">
			<img class="sign-register-img col-4" src="@/static/img/partner_sign_now.png">
			<div class="col-8">
				<div class="sign-register-content">
					<div class="sign-register-content-title">Зарегистрируйтесь и привлечите новых клиентов</div>
					<div class="sign-register-content-button button">Зарегистрироваться сейчас</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				curent_slide: 0,
				timeoot: null,
				check: false,
				category:'',
				selects: [],
				company: '',
				email: '',
				phone: '',
				sliders: [
					{
						img: 'alina.png',
						name: 'Алина Бабаева',
						from: 'Алматы',
						about: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
					},
					{
						img: 'alina.png',
						name: 'Алина Бабаева',
						from: 'Алматы',
						about: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
					},
					{
						img: 'alina.png',
						name: 'Алина Бабаева',
						from: 'Алматы',
						about: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
					}
				],
				works: [
					{
						img: 'partner_sign_1.png',
						about: 'Создайте свою виртуальную компанию на ISTOK HOME'
					},
					{
						img: 'partner_sign_2.png',
						about: 'Создайте свое портфолио и следите за просмотрами'
					},
					{
						img: 'partner_sign_3.png',
						about: 'Принимайте заявки и зарабатывайте вместе с ISTOK HOME'
					}
				]
			}
		},
		created(){
			this.$axios.get('api/category/sub-performer/')
			.then(res => this.selects = res.data.results)
			setInterval(()=>this.changePage(), 30000)
		},
		methods:{
			sendInfo(){
				if(this.check){
					let name = this.company.split(' ')
					let data = {
						email: this.email,
						phone: this.phone,
						first_name: name[0],
						last_name: name[1] ? name[1] : '',
						patronymic: name[2] ? name[2] : '',
					}
					this.$axios.post('api/users/register/', data)
					.then(res => {
						console.log(res)
						if(res.status === 200)
							this.$router.push('/partner/profile')
					})
					.catch(err=>console.log(err.response.data))
				}
			},
			changePage(){
				if(this.curent_slide + 1 >= this.sliders.length)
					this.curent_slide = 0
				else
					this.curent_slide++
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.sign{
    margin-top: -30px;
		&-header{
			flex-direction: row;
			min-height: calc(100vh - 70px);
			align-items: flex-end;
			padding: 90px 5px;
			&-form{
				background-color: $white;
				padding: 30px 20px;
				height: auto;
				border-radius: 10px;
				&-title{    
					font-size: 20px;
					line-height: 25px;
					text-align: left;
					align-items: flex-start;
				}
				&-input{
					font-size: 14px;
					line-height: 20px;
				}
				&-post{
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: flex-start;
					font-size: 14px;
					line-height: 20px;
					padding-left: 30px;
					&>div{
						align-items: flex-start;
						text-align: left;
						// width: auto;
						margin: 0 5px 0 0;
						&:first-child{
							align-items: center;
						}
					}
					&>a{
						align-items: flex-start;
						text-align: left;
						font-size: 14px;
						line-height: 20px;
						margin: 0 5px 0 0;
						cursor: pointer;
				    text-decoration: underline;
					}
				}
				&-button{

				}
			}
			&-title{
				height: 100%;
				justify-content: flex-end;
				color: $white;
				font-size: 50px;
				line-height: 50px;
				padding: 10% 10px 0 20px;
			}
			&>img{
				position: absolute;
				z-index: -1;
				height: 100%;
				width: 100%;
				top: 0;
				left: 0;
			}
		}
		&-working{
			align-items: flex-start;
			padding: 15px 5px;
			&-title{
				width: auto;
				font-size: 34px;
				line-height: 50px;
			}
			&-about{
				width: auto;
				color: $grey;
				font-size: 25px;
				line-height: 30px;
				margin: 15px 0 20px;
			}
			&-content{
				flex-direction: row;
				&-item{
					margin: 15px;
					&-img{
						max-width: 100%;
						margin-bottom: 12px;
					}
					&-name{
						font-size: 16px;
						line-height: 25px;
						text-align: left;
						flex-direction: row;
						justify-content: flex-start;
						align-items: flex-start;
						&>div{
							width: auto;
							font-size: 25px;
							line-height: 30px;
							color: $grey
						}
					}
				}
			}
		}
		&-slider{
			padding: 15px 0;
			margin: 0 30px;
			align-items: flex-start;
			width: calc(100% - 60px);
			overflow-x: hidden;
			&-title{
				width: auto;
				font-size: 34px;
				line-height: 50px;
			}
			&-body{
				flex-direction: row;
				left: 0;
				justify-content: flex-start;
				padding: 15px 0;
				transition: 0.3s;
				// overflow-x: hidden;
				&-slide{
					left: 0;
					min-width: 100%;
					background-color: #D8E4EC;
					border-radius: 10px;
					flex-direction: row;
					padding: 30px 50px;
					transition: 0.3s;
					&-img{
						border-radius: 20px;
					}
					&-content{
						align-items: flex-start;
						&-name{
							width: auto;
							font-size: 20px;
							line-height: 25px;
						}
						&-from{
							width: auto;
							font-size: 14px;
							line-height: 20px;
							color: #959696;
						}
						&-about{
							width: auto;
							font-size: 18px;
							line-height: 28px;
						}
					}
				}
				&-pagination{
					position: absolute;
					bottom: 15px;
					flex-direction: row;
					&>div{
						width: 8px;
						height: 8px;
						border-radius: 50%;
						margin-right: 15px;
						cursor: pointer;
						transition: 0.3s;
						background-color: #A8C4E2;
						&.active{
							background-color: $cian;
						}
					}
				}
			}
		}
		&-register{
			margin: 15px;
			width: calc(100% - 30px);
			flex-direction: row;
			background-color: #BDC9D5;
			border-radius: 10px;
			&-img{
				height: 100%;
			}
			&-content{
				align-items: flex-end;
				height: auto;
				&-title{
					font-size: 34px;
					line-height: 50px;
					margin-bottom: 60px;
				}
				&-button{
					width: 50%;
				}
			}
		}
	}
</style> 