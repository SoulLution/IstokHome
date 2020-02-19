<template>
	<div class="overview">

		<div class="overview-body">
			<div class="col-3">
				<img class="overview-body-img" :src="project.img">
			</div>
			<div class="col-6">
				<div class="overview-body-title col-12">{{project.title}}</div>
					<div class="overview-body-row col-12">
						<div class="overview-body-row-stars"><div v-for="i in 5"></div></div>
						<div class="overview-body-row-hearts"><div></div>123449</div>
					</div>

					<div class="overview-body-row col-12" v-for="set in project.settings">
						<div class="overview-body-row-item" v-for="item in set">
							<div class="overview-body-row-item-name">{{item.name}}</div>
							<div class="overview-body-row-item-status">{{item.status}}</div>
						</div>
					</div>
				</div>
				

				<div class="col-3">
					<router-link to="/partner/project/1" class="overview-body-redact"><div></div>Редактировать</router-link>
				</div>
			</div>

		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				project: {
					title: 'Кухня Лофт стиль',
					img: '',
					raiting: 4.5,
					id: 1,
					settings: [
						[
							{
								name: 'Категория:',
								status: 'Ванная'
							},
							{
								name: 'Заказов:',
								status: '20 000'
							}
						],
						[
							{
								name: 'Стоимость:',
								status: '23 990 KZT'
							},
							{
								name: 'Переходов:',
								status: '20 000/мес'
							}
						]
					]

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.overview{
		flex-direction: row;
		align-items: flex-start;
		box-shadow: 0px 1px 7px rgba(176, 176, 176, 0.25);
		margin: 15px;
		padding: 15px;
		&-body{
			flex-direction: row;
			align-items: flex-start;
			&>div{
				padding: 0;
			}
			&-img{
				border-radius: 10px;
				height: 125px;
				width: 125px;
			}
			&-title{
				align-items: flex-start;
				font-size: 16px;
			}
			&-row{
				flex-direction: row;
				padding: 0;
				&-stars{
					&>div{

					}
				}
				&-hearts{
					&>div{

					}
				}
				&-item{
					flex-direction: row;
					justify-content: space-between;
					&-name{
						color: $grey;
					}
					&-status{

					}
				}
			}
			&-redact{
				color:  #808080;
				cursor: pointer;
				justify-content: flex-start;
				height: 100%;
				transition: 0.1s;
				&:hover{
					color: $cian;
				}
			}
		}
	}

</style>