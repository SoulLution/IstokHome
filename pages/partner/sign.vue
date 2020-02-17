 <template>
	<div class="sign">

		<div class="sign-header">
			<div class="col-4">
				<div class="sign-header-form">
					<div class="sign-header-form-title">Зарегестрируйтесь бесплатно</div>
					<select class="sign-header-form-input" placeholder="Выберите категорию">
						<option></option>
					</select>
					<input class="sign-header-form-input" placeholder="Наименование компании/ФИО">
					<input class="sign-header-form-input" placeholder="Введите свой email">
					<input class="sign-header-form-input" placeholder="Введите номер телефона">

					<div class="sign-header-form-post">
						<div class="check"></div>
						<div>Я ознакомлен и принимаю</div> 
						<a href="">Пользовательское соглашение</a>
						<div>и</div>
						<a href="">Политика конфиденциальности</a>
					</div>

					<div class="sign-header-form-button button">Зарегестрироваться</div>
					 
				</div>
			</div>
			<div class="col-8">
				<div class="sign-header-title">
	 				Покажите свое портфолио более чем 1 млн реальных потенцияальных клиентов
				</div>
			</div>
			<img src="">
		</div>

		<div class="sign-working">
			<div class="sign-working-title"></div>
			<div class="sign-working-about"></div>
			<div class="sign-working-content">
				<div class="sign-working-content-item" v-for="(work, i) in works">
					<img class="sign-working-content-item-img" :src="work.img">
					<div class="sign-working-content-item-name" :style="`:before{content: '${i+1}.'}`">{{work.about}}</div>
				</div>
			</div>
			
		</div>


		<div class="sign-slider">
			<div class="sign-slider-title">Истории успеха</div>
			<div class="sign-slider-body">
				<div class="sign-slider-body-slide" v-for="slide in sliders">
					<img class="sign-slider-body-slide-img col-3" :src="slide.img">
					<div class="col-9">
						<div class="sign-slider-body-slide-content">
							<div class="sign-slider-body-slide-content-name">{{slide.name}}</div>
							<div class="sign-slider-body-slide-content-from">{{slide.from}}</div>
							<div class="sign-slider-body-slide-content-about">{{slide.about}}</div>
						</div>
					</div>
				</div>
				<div class="sign-slider-body-pagination">
					<div :class="{'active': i===1}" v-for="i in sliders.length"></div>
				</div>
			</div>
		</div>

		<div class="sign-register">
			<img class="sign-register-img col-4" src="">
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
				sliders: [
					{
						img: '',
						name: 'Алина Бабаева',
						from: 'Алматы',
						about: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
					},
					{
						img: '',
						name: 'Алина Бабаева',
						from: 'Алматы',
						about: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
					},
					{
						img: '',
						name: 'Алина Бабаева',
						from: 'Алматы',
						about: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
					}
				],
				works: [
					{
						img: '',
						about: 'Создайте свою виртуальную компанию на ISTOK HOME'
					},
					{
						img: '',
						about: 'Создайте свое портфолио и следите за просмотрами'
					},
					{
						img: '',
						about: 'Принимайте заявки и зарабатывайте вместе с ISTOK HOME'
					}
				]
			}
		},
		created(){
			this.timer();
		},
		methods:{
			changeSlide(index){
				if(index){
					this.curent_slide = index
					clearRimeout(this.timeoot)
					this.timer()
				}
				else if(this.curent_slide + 1 >= this.sliders.length)
					this.curent_slide = 0
				else
					this.curent_slide++
			},
			timer(){
				this.timeoot = setTimeout(()=>this.changeSlide(), 90000) 
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all.scss';
	.sign{
		&-header{
			flex-direction: row;
			min-height: calc(100vh - 70px);
			&-form{
				background-color: $white;
				padding: 30px 20px;
				height: auto;
				&-title{    
					text-align: left;
					align-items: flex-start;
				}
				&-input{
					background-color: $white;
					border: 1px solid $blue;
					border-radius: 5px;
					padding: 12px 8 px 12px 15px;
					font-size: 14px;
					line-height: 20px;
					&>option{

					}
				}
				&-post{
					flex-direction: row;
					flex-wrap: wrap;
					font-size: 14px;
					line-height: 20px;
					&>div{
						width: auto;
						margin: 0 5px 0 30px;
					}
					&>div.check{
						height: 20px;
						width: 20px;
						border: 1px solid $blue;
						border-radius: 3px;
						position: absolute;
						left: 0;
						top: 0; 
					}
					&>a{
						font-size: 14px;
						line-height: 20px;
						margin: 0 5px 0 30px;
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
				padding: 10% 90px 0 20px;
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
			&-title{
				width: auto;
				font-size: 34px;
				line-height: 50px;
			}
			&-about{
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
						width: 100%;
					}
					&-name{
						font-size: 16px;
						line-height: 25px;
						text-align: left;
						flex-direction: row;
						justify-content: flex-start;
						&:before{
							font-size: 25px;
							line-height: 30px;
							color: $grey
						}
					}
				}
			}
		}
		&-slider{
			align-items: flex-start;
			&-title{
				width: auto;
				font-size: 34px;
				line-height: 50px;
			}
			&-body{
				background-color: $blue;
				&-slide{
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
					flex-direction: row;
					&>div{
						width: 8px;
						height: 8px;
						cursor: pointer;
						background-color: $blue;
						&.active{
							background-color: $blue;
						}
					}
				}
			}
		}
		&-register{
			flex-direction: row;
			background-color: $blue;
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