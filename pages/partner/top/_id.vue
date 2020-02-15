<template>
	<div class="top_id">
		<div class="top_id-title">Продвижение проекта</div>

		<div class="top_id-header">
			<div class="top_id-header-what">Продвижение проекта</div>
			<div class="top_id-header-checks">
				<select class="top_id-header-checks-select select">
					<option></option>
				</select>
				<div class="top_id-header-checks-radio">
					<div></div>
					Продвигать портфолио
				</div>
				
			</div>
			
		</div>
		
		<div class="top_id-body">
			<div class="top_id-body-title">Выберите тариф</div>
			<div class="top_id-body-content">
				<div class="col-3" v-for="tarif in tarifs">
					<div class="top_id-body-content-tarif">
						<div class="check"></div>
						<div class="top_id-body-content-tarif-time">{{tarif.time}} дня</div>
						<div class="top_id-body-content-tarif-cost">{{tarif.cost}}тенге</div>
						<div class="top_id-body-content-tarif-gift">+{{tarif.gift}} дней в подарок</div>
					</div>
				</div>
				
			</div>

		</div>

		<div class="top_id-footer">

			<div class="top_id-footer-item">
				<div class="top_id-footer-content">
				<div class="top_id-footer-content-mimic">
					<div class="top_id-footer-content-mimic-header">
						<div class="top_id-footer-content-mimic-header-name">{{project.name}}</div>
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
				project: {
					title: 'Алина Бабаева',
					who: 'Интерьер дизайнер',
					raiting: 4,
					img: ['','']
				},
				tarifs: [
					time: 3,
					cost: 4000,
					gift: 1,
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top_id{
		border-radius: 7px;
		background-color: $white;
		padding: 30px;
		align-items: flex-start;
		&-title{
			font-size: 20px;;
			width: auto;
		}
		&-header{
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
					margin-left: 20px;
					&>div{
						margin: 0 10px;
					}
				}
			}
		}
		&-body{
			width: auto;
			align-items: flex-start;
			&-title{
				width: auto;
				color: $grey;
			}
			&-content{
				flex-direction: row;
				flex-wrap: wrap;
				&-tarif{
					border-radius: 10px;
					background-color: $blue;
					&>div{
						color: $white;
					}
					&>.check{
						position: absolute;
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
			&-stats{
				
			}
		}
	}

				
</style>