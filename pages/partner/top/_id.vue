<template>
	<div class="top_id">
		<div class="top_id-title">Продвижение проекта</div>

		<div class="top_id-header">
			<div class="top_id-header-checks">
				<select class="top_id-header-checks-select select">
					<option>Выберите категорию</option>
				</select>
				<div class="top_id-header-checks-radio" >
					<div class="check" :class="{'active': check}" @click="check = !check"></div>
					Продвигать портфолио
				</div>
				
			</div>
			
		</div>
		
		<div class="top_id-body">
			<div class="top_id-body-title">Выберите тариф</div>
			<div class="top_id-body-content">
				<div class="col-3" v-for="(tarif, i) in tarifs">
					<div class="top_id-body-content-tarif">
						<div class="check":class="{'active': i === tarif_check}" @click="tarif_check = i"></div>
						<div class="top_id-body-content-tarif-time">{{tarif.time}} дня</div>
						<div class="top_id-body-content-tarif-cost">{{tarif.cost}}тенге</div>
						<div class="top_id-body-content-tarif-gift" v-if="tarif.gift">+{{tarif.gift}} дней в подарок</div>
					</div>
				</div>
				
			</div>

		</div>

		<div class="top_id-footer">

			<div class="top_id-footer-item col-4">
				<div class="top_id-footer-content">
					<div class="top_id-footer-content-mimic">
						<div class="top_id-footer-content-mimic-header">
							<div class="top_id-footer-content-mimic-header-name">{{project.title}}</div>
							<div class="top_id-footer-content-mimic-header-raiting"><div></div>{{project.raiting}}</div>
							<div class="top_id-footer-content-mimic-header-who">{{project.who}}</div>

						</div>
						<div class="top_id-footer-content-mimic-body">
							<img :src="img" v-for="img in project.img">
						</div>

						<div class="top_id-footer-content-mimic-link">
							Посмотреть портфолио
						</div>

					</div>
				</div>
			</div>

			<div class="top_id-footer-stats">
				
				<div class="button">Продвигать</div>
			</div>
		</div>


	</div>
</template>

<script>
	export default{
		data(){
			return{
				check: false,
				tarif_check: false,
				project: {
					title: 'Алина Бабаева',
					who: 'Интерьер дизайнер',
					raiting: 4,
					img: ['','']
				},
				tarifs: [
					{
						time: 3,
						cost: 4000,
						gift: 0,
					},
					{
						time: 7,
						cost: 7500,
						gift: 1,
					},
					{
						time: 14,
						cost: 10000,
						gift: 3,
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all.scss';
	.top_id{
		width: calc(100% - 100px);
		border-radius: 7px;
		background-color: $white;
		padding: 30px;
		align-items: flex-start;
		&-title{
			font-size: 20px;;
			width: auto;
		}
		&-header{
			flex-direction: row-reverse;
			width: auto;
			&-what{
				font-size: 14px;
				width: auto;
			}
			&-checks{
				flex-direction: row;
				width: auto;
				&-select{
					width: auto;
				}
				&-radio{
					margin-left: 25px;
					padding-left: 25px;
				&>div{

				}
				}
			}
		}
		&-body{
			align-items: flex-start;
			&-title{
				width: auto;
				color: $grey;
			}
			&-content{
				width: 100%;
				margin: 15px 0;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: flex-start;
				&-tarif{
					height: 200px;
					border-radius: 10px;
					background-color: $blue;
					&>div{
						color: $white;
					}
					&>.check{
						left: 5%;
						top: 2.5%;
					}
					&-time{
						margin-bottom: 23px;
						font-size: 30px;
					}
					&-cost{
						font-size: 14px;
						margin-bottom: 6px;
					}
					&-gift{
						font-size: 14px;
					}
				}
			}
		}
		&-footer{
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-end;
			&-title{
				font-size: 34px;
				line-height: 50px;
			}
			&-content{
				flex-direction: row;
				justify-content: flex-start;
				&-mimic{
					border: 1px solid #959696;
					margin: 20px 28px 20px 0;
					padding: 5px;
					background-color: $white;
					border-radius: 10px;
					justify-content: flex-start;
					&-header{
						flex-direction: row;
						flex-wrap: wrap;
						&-name{
							align-items: flex-start;
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
							align-items: flex-start;
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
			&-stats{
				max-width: 300px;
			}
		}
	}

				
</style>