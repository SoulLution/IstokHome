<template>
	<div class="index">
		<div class="index-header">
			<img src="@/static/img/index_head.png">
			<div class="index-header-title">Лучшие дизайнеры, архитекторы и мастера ремонта</div>
			<input type="search" class="index-header-search" placeholder="Дизайн спальной комнаты...">
		</div>
		

		<div class="index-section working">
			<div class="working-title">Как это работает</div>
			<div class="working-about">Начните в 3 простых шага</div>
			<div class="working-content">
				<div class="working-content-item" v-for="(work, i) in works">
					<img class="working-content-item-img" :src="require('@/static/img/' + work.img)">
					<div class="working-content-item-name"><div>{{i+1}}.</div>{{work.about}}</div>
				</div>
			</div>
		</div>


		<div class="index-section special">
			<div class="section-title">Лучшие подборки для вас</div>
			<div class="section-header">
				<div class="section-header-name">Посмотрите тысячи красивых работ</div>
				<router-link to="/" class="section-header-link">Смотреть все</router-link>
			</div>
			<div class="special-content">
				<div class="special-content-item" v-for="special in specials">
					<img :src="require('@/static/img/' + special.img)">
					<span>{{special.name}}</span>
				</div>
			</div>
		</div>



		<div class="index-section saver">
			<div class="saver-col col-6">
				<div class="saver-col-title">Безопасная оплата</div>
				<div class="saver-col-content">Мы заранее позаботились о наших пользователях и ввели безопасную оплату
						ISTOK HOME гарантирует возврат всей суммы при неисполнение обязательств</div>
			</div>
			<div class="saver-col col-6">
				<img class="saver-col-img" src="@/static/img/save_pay.png">
			</div>

		</div>


		<div class="index-section servises">
			<div class="section-title">Услуги</div>
			<div class="section-header">
				<div class="section-header-name">Посмотрите тысячи красивых работ</div>
				<router-link to="/" class="section-header-link">Смотреть все</router-link>
			</div>
			<div class="servises-content">
				<div class="servises-content-col col-4">
					<div class="servises-content-item" v-for="i in 2">
						<img :src="require('@/static/img/' + servises[i-1].img)">
						<span>{{servises[i-1].name}}</span>
					</div>
				</div>
				<div class="servises-content-col col-4">
					<div class="servises-content-item" v-for="i in 1">
						<img :src="require('@/static/img/' + servises[i+1].img)">
						<span>{{servises[i+1].name}}</span>
					</div>
				</div>
				<div class="servises-content-col col-4">
					<div class="servises-content-item" v-for="i in 2">
						<img :src="require('@/static/img/' + servises[i+2].img)">
						<span>{{servises[i+2].name}}</span>
					</div>
				</div>
			</div>
		</div>


		<div class="index-section mimic">
			<div class="section-title">Лучшие профессионалы для вас</div>
			<div class="section-header">
				<div class="section-header-name">Лучшие мастера для вашего проекта</div>
			</div>
			<div class="mimic-content">
				<div class="mimic-content-mimic" v-for="mimic in mimics">
					<div class="mimic-content-mimic-header">
						<div class="mimic-content-mimic-header-name">{{mimic.name}}</div>
						<div class="mimic-content-mimic-header-raiting"><div></div>{{mimic.raiting}}</div>
						<div class="mimic-content-mimic-header-who">{{mimic.who}}</div>

					</div>
					<div class="mimic-content-mimic-body">
						<img :src="img" v-for="img in mimic.img">
					</div>

					<div class="mimic-content-mimic-link">
						Посмотреть портфолио
					</div>

				</div>
			</div>
			
		</div>


		<div class="index-section comments">
			<div class="section-title">Отзывы</div>
			<div class="section-header">
				<div class="section-header-name">Отзывы могут помочь вам с выбором</div>
			</div>
			<div class="comments-content">
				<div class="comments-content-comment" v-for="comment in 2">
					<div class="comments-content-comment-header">
						<div class="comments-content-comment-header-name">Алина Бабаева</div>
						<div class="comments-content-comment-header-link">Перейти</div>
					</div>
					<div class="comments-content-comment-rating"><div v-for="i in 5"></div>4.0</div>
					<div class="comments-content-comment-about">First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.</div>
				
				</div>
			</div>
		</div>



		<div class="index-section sale">
			<img src="@/static/img/sale.png">
			<div class="sale-col col-6"><img src="@/static/img/logo_blue.png"><span>ISTOK HOME</span></div>
			<div class="sale-col col-6">
				<form class="form">
					<div class="form-title">Получи скидку на первую заявку</div>
					<div class="form-about">Напиши свой email адрес и мы отправим промокод на почту</div>
					<input required type="email" placeholder="Введите email">
					<label class="button" for="sale_int">Получить промокод</label>
					<input type="submit" id="sale_int" style="display: none">
				</form>
			</div>
		</div>



	</div>
</template>

<script>
	export default {
		data(){
			return {
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
				],
				servises: [
					{
						name: 'Дизайн‐проекта',
						img: 'ser_0.png'
					},
					{
						name: 'Ремонт и отделка',
						img: 'ser_1.png'
					},
					{
						name: 'Проектирование',
						img: 'ser_2.png'
					},
					{
						name: 'Схемы и чертежи',
						img: 'ser_3.png'
					},
					{
						name: 'Визуализация',
						img: 'ser_4.png'
					},
				],
				specials: [
					{
						name: 'Кухня',
						img: 'rectangle_0.png'
					},
					{
						name: 'Ванные комнаты',
						img: 'rectangle_1.png'
					},
					{
						name: 'Спальни',
						img: 'rectangle_2.png'
					},
					{
						name: 'Офисы',
						img: 'rectangle_3.png'
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
			// this.$router.push('partner/sign')
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	
	.index{
		margin-top: -30px;
		margin-bottom: 30px;
		&-header{
			height: 100vh;
			&>img{
				position: absolute;
				z-index: -1;
				height: 100%;
				width: 100vw;
				top: 0;
			}
			&-title{
				color: $white;
				font-weight: bold;
				font-size: 46px;
				line-height: 50px;
				text-align: center;
				margin: 50px;
			}
			&-search{
				padding: 15px;
				outline: none;
			}
		}
		&-section{
			margin: 50px 0;
			padding: 0 15px;
			.section-title{
				align-items: flex-start;
				font-weight: bold;
				font-size: 34px;
				line-height: 50px;
			}
			.section-header{
				width: 100%;
				flex-direction: row;
				justify-content: space-between;
				&-name{
						align-items: flex-start;
						color: $grey;
						font-size: 25px;
						line-height: 30px;
						margin: 15px 0 20px;
				}
				&-link{
					width: auto;
					white-space: nowrap;
					font-size: 14px;
					line-height: 20px;
					color: $cian;
					&:hover{
						color: $blue;
					}
				}
			}
			&.working{
				align-items: flex-start;
			}
			.working{
				&-title{
					align-items: flex-start;
					font-weight: bold;
					font-size: 34px;
					line-height: 50px;
				}
				&-about{
					align-items: flex-start;
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
			.special{
				&-content{
					width: auto;
					flex-direction: row;
					&-item{
						border-radius: 10px;
						outline: none;
						cursor: pointer;
						margin: 0 15px;
						width: 25%;
						&:first-child{
							margin-left: unset;
						}
						&:last-child{
							margin-right: unset;
						}
						&>span{
							height: 100%;
							width: 100%;
							position: absolute;
							display: flex;
							justify-content: center;
							align-items: center;
							font-size: 25px;
							line-height: 30px;
							color: $white;
						}
						&>img{
							width: 100%;
						}
					}
				}
			}
			&.saver{
				background-color: #67AAD540;
				background-image: url('../static/img/balls.png');
				background-size: 100% 100%;
				flex-direction: row;
				padding: 35px 30px 35px 50px;
				border-radius: 10px;
				overflow: hidden;
			}
			.saver{
				&-col{
					justify-content: space-around;
					&-title{
						align-items: flex-start;
						margin-bottom: 40px;
						font-weight: bold;
						font-size: 48px;
						line-height: 50px;
					}
					&-content{
						font-size: 26px;
						line-height: 40px;
					}
					&-img{

					}
				}
			}
			&.servises{
			}
			.servises{
				&-content{
				flex-direction: row;
				width: calc(100% + 30px);
					&-col{
						width: 33%;
					}
					&-item{
						margin: 15px 0;
						border-radius: 10px;
						overflow: hidden;
						&>img{
							width: 100%;
						}
						&>span{
							height: 100%;
							width: 100%;
							position: absolute;
							display: flex;
							justify-content: center;
							align-items: flex-start;
							padding: 25px; 
							font-size: 25px;
							line-height: 30px;
							color: $white;
						}
					}
				}
			}
			&.mimic{
				flex-direction: column;
			}
			.mimic{
				&-content{
					flex-direction: row;
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
			&.comments{

			}
			.comments{
				&-content{
					flex-direction: row;
					width: calc(100% + 30px);
					&-comment{
						margin: 0 15px;
						background-color: $white;
						border-radius: 10px;
						overflow: hidden;
						padding: 30px 15px 20px;
						&-header{
							flex-direction: row;
							&-name{
								align-items: flex-start;
								font-weight: bold;
								font-size: 14px;
								line-height: 20px;
							}
							&-link{
								width: auto;
								color: $cian;
								cursor: pointer;
								&:hover{
									color: $blue;
								}
							}
						}
						&-rating{
							flex-direction: row;
							justify-content: flex-start;
							&>div{
								width: 13px;
							}
						}
						&-about{
							color: $grey;
						}
					}
				}
			}
			&.sale{
				flex-direction: row;
				padding: 60px;
				align-items: flex-start;
				&>img{
					position: absolute;
					top: 0;
					height: 100%;
					width: 100%;
				}
			}
			.sale{
				&-col{
					flex-direction: row;
					align-items: center;
					justify-content: flex-start;
					&>img{

					}
					&>span{
						display: flex;
						margin-left: 15px;
						font-size: 34px;
						line-height: 30px;
						color: $cian;
					}
				}
			}
		}
	}

	.form{
		background-color: $white;
		border-radius: 10px;
		padding: 30px 40px;
		align-items: flex-end;
		&-title{
			align-items: flex-start;
			margin-bottom: 12px;
			font-size: 20px;
			line-height: 25px;
			font-weight: bold;
		}
		&-about{
			color: $grey;
			font-size: 14px;
			line-height: 20px;
			margin-bottom: 18px;
		}
		&>input{
			padding: 12px 15px;
		}
		.button{
			width: auto;
			padding: 12px 32px;
		}
	}

</style>