<template>
	<div class="application">
		<div class="application-title">Заявки</div>

		<div class="application-sides">
			<div class="application-sides-side" :class="{'active': current === i}" v-for="(side, i) in sides" @click="current = i">
				{{side}}
			</div>
		</div>
		<div class="application-pre_title">Количество заявок: {{applications.length}}</div>

		<div class="application-item" v-for="item in applications">
			<div class="application-item-header">
				<div class="application-item-header-date">{{$getNormalDate(item.dt, true)}}</div>
				<div class="application-item-header-buttons">

					<div class="button" :class="{'default' : current !== 0}">
						{{ current === 0 ? 'Принять' : 'Написать'}}
					</div>
					<div class="button" :class="{'nope' : current === 0}" v-if="current !== 2">
						{{ current === 0 ? 'Отклонить' : 'Завершить'}}
					</div>

				</div>
				
			</div>
			<div class="application-item-body">
				<img class="application-item-body-img" :stc="item.img">
				<div class="application-item-body-content">
					<div class="application-item-body-content-name">{{item.title}}</div>
					<div class="application-item-body-content-col">Стоимость<div>{{item.cost}}KZT</div></div>
					<div class="application-item-body-content-col">Клиент<div>{{item.user}}</div></div>
					<div class="application-item-body-content-col">{{current !== 2 ? 'Рейтинг клиента' : 'Ваша оценка'}}<div>{{item.rating}}</div></div>

				</div>
				
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				current: 0,
				sides: ['Новые','В процессе','Завершенные'],
				applications: [
					{
						id: 1,
						img: '',
						dt: new Date(),
						title: 'Кухня Лофт стиль',
						cost: 23990,
						user: 'Карина Марина',
						rating: 4.5
					},
					{
						id: 2,
						img: '',
						dt: new Date(),
						title: 'Кухня Лофт стиль',
						cost: 23990,
						user: 'Карина Марина',
						rating: 4.5
					}
				]
			}
		},
		created(){
			if(!this.$store.getters['PROFILE'].profile.id)
				this.$store.dispatch('GET_PROFILE', {router: this.$router})
			else
				this.changeProfile(this.$store.getters['PROFILE'])
		}
	}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all.scss';
	.application{
		width: calc(100% - 100px);
		padding: 35px;
		background-color: $white;
		margin-bottom: 15px;
		&-title{
			font-size: 25px;
			font-weight: bold;
			align-items: flex-start;
		}
		&-sides{
			flex-direction: row;
			justify-content: flex-start;
			&-side{
				width: auto;
				padding: 2px 5px;
				margin: 48px 20px 30px 0;
				color: $grey;
				text-transform: uppercase;
				cursor: pointer;

				&:after{
					content: "";
					width: 100%;
					max-width: 0;
					transition: 0.3s;
					position: absolute;
					bottom: 0;
					height: 2px;
					background-color: $cian;
					font-size: 14px;
				}
				&:hover, &.active{
					color: $cian;
					.application-sides-side:after{
						max-width: 100%;
					}
				}
			}
		}
		&-pre_title{
			// width: auto;
			text-align: left;
			// flex-direction: row;
			align-items: flex-start;
		}
		&-item{
			box-shadow: 0px 1px 7px rgba(176, 176, 176, 0.75);
			border-radius: 10px;
			padding: 20px;
			margin: 7.5px;
			&-header{
				flex-direction: row;
				justify-content: space-between;
				&-date{
					flex-direction: row;
					justify-content: space-between;
					width: auto;
					color: $grey;	
				}
				&-buttons{
					width: 40%;
					flex-direction: row;
					justify-content: space-between;
					&>div{
						// width: auto;
						margin: 0 5px;
					}
				}
			}

			&-body{
				flex-direction: row;
				&-img{
					width: 125px;
					height: 125px;
					margin-right: 20px;
					border-radius: 10px;
				}
				&-content{
					flex-direction: row;
					flex-wrap: wrap;
					&-name{
						align-items: flex-start;
						font-size: 25px;
						margin-bottom: 30px;
					}
					&-col{
						width: 33%;
						align-items: flex-start;
						color: $grey;
						&>div{
							width: auto;
						}	
					}
				}
			}
		}
	}
</style>