 <template>
	<div class="sign">

		<div class="sign-header">
			<div class="col-6">
				<form class="sign-header-form col-9" @submit.prevent="registrate">
					<div class="sign-header-form-title">Зарегестрируйтесь бесплатно</div>
					<!-- <select class="sign-header-form-input"v-model="category">
						<option value="" disabled selected>Выберите категорию</option>
						<option v-for="select in selects" :value="select.id">{{select.name}}</option>
					</select> -->
					<input required 
					class="sign-header-form-input" @focus="inputs[0].err_company = false" 
					:class="{'err': inputs[0].err_company}" 
					placeholder="Наименование компании/ФИО" 
					v-model="inputs[0].company">
					<input required type="email" 
					class="sign-header-form-input" @focus="inputs[0].err_email = false" 
					:class="{'err': inputs[0].err_email}" 
					placeholder="Введите свой email" 
					v-model="inputs[0].email">
					<input required type="tel" 
					class="sign-header-form-input" @focus="inputs[0].err_phone = false" 
					:class="{'err': inputs[0].err_phone}" 
					placeholder="Введите номер телефона" 
					v-model="inputs[0].phone">
					<input required type="password" min="6" 
					class="sign-header-form-input" @focus="inputs[0].err_password = false" 
					:class="{'err': inputs[0].err_password}" 
					placeholder="Введите пароль" 
					v-model="inputs[0].password">
					<!-- <input required type="password" class="sign-header-form-input" placeholder="Повторите пароль" v-model="inputs[0].repeat_password"> -->

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
			<div class="col-6">

				<form class="sign-header-form col-9" @submit.prevent="login">
					<div class="sign-header-form-title">Войти</div>
					<input required type="tel" 
					class="sign-header-form-input" @focus="inputs[1].err_username = false" 
					:class="{'err': inputs[1].err_username}" 
					placeholder="Введите номер телефона" 
					v-model="inputs[1].username">
					<input required type="password" min="6" 
					class="sign-header-form-input" @focus="inputs[1].err_password = false" 
					:class="{'err': inputs[1].err_password}" 
					placeholder="Введите пароль" 
					v-model="inputs[1].password">

					

					<input type="submit" class="sign-header-form-button button" value="Войти">
					 
				</form>

			</div>
			<div class="col-12">
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
				inputs: [
					{
						company: '',
						err_company: false,
						email: '',
						err_email: false,
						phone: '',
						err_phone: false,
						password: '',
						err_password: false,
						repeat_password: '',
						err_repeat_password: false
					},
					{
						username: '',
						err_username: false,
						password: '',
						err_password: false
					}
				],
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
			// this.$axios.get('api/category/sub-performer/')
			// .then(res => this.selects = res.data.results)
			setInterval(()=>this.changePage(), 30000)
		},
		methods:{
			registrate(){
				if(this.check){
					let name = this.inputs[0].company.split(' ')
					let data = {
						email: this.inputs[0].email,
						phone: this.inputs[0].phone,
						password: this.inputs[0].password,
						first_name: name[0],
						last_name: name[1] ? name[1] : '',
						patronymic: name[2] ? name[2] : '',
					}
					this.$axios.post('api/users/register/', data)
					.then(res => {
						console.log(res)
						this.$router.push('/partner/profile')
						if(res.status === 200){
						}
					})
					.catch(err=> {
						Object.keys(err.response.data).forEach( item =>{
							this.inputs[0]['err_'+item] = true
						})
					})
				}
			},
			login(){
				let data = {
					username: this.inputs[1].username,
					password: this.inputs[1].password,
				}
				this.$axios.post('api/users/auth/', data)
				.then( res => {
					if(res.status === 200){
						localStorage.setItem('token',res.data.token)
						this.getProfile()
					}
				})
				.catch(err=>{
					Object.keys(err.response.data).forEach( item =>{
						this.inputs[1]['err_'+item] = true
					})
				})

			},
			getProfile(){
				this.$store.dispatch('GET_PROFILE', this.$router)
        this.$router.push('/partner/profile')
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
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			padding: 90px 15px;
			&-form{
				background-color: $white;
				padding: 30px 20px;
				height: 100%;
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
				  &.err{
				    border-color: red;
				  }
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
				width: 100vw;
				top: 0;
			}
		}
		&-working{
			align-items: flex-start;
			padding: 15px;
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
			padding: 0 15px;
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