<template>
	<div class="top">
		<div class="top-header">
			<div class="top-header-title">Топ</div>
			<div class="top-header-button button">Продвигать проект</div>
		</div>
		<div class="top-pre_title">Проекты на продвижении: {{projects.length}}</div>

		<div class="top-body">
			<div class="top-body-project" v-for="project in projects">
				<img class="top-body-project-img col-3" :src="project.img">

				<div class="top-body-project-content col-9">
					<div class="top-body-project-content-header">
						<div>{{project.title}}</div>
						<div><div class="button nope">Приостановить</div><div class="button success">Пролонгация</div></div>
					</div>
					<div class="top-body-project-content-body">
						<div class="col-4"><div v-for="i in 5"></div></div>
						<div class="col-8"><div></div>{{project.raiting}}</div>

						<div class="col-4" v-for="set in project.settings">{{project.name}}<div>{{project.status}}</div></div>

					</div>

				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				projects: [
					{
						title: 'Кухня Лофт стиль',
						img: '',
						raiting: 4.5,
						heart: 1,
						id: 1,
						settings: [
							{
								name: 'Дата начала:',
								status: new Date()
							},
							{
								name: 'Переходов:',
								status: '20 000'
							},
							{
								name: 'Стоимость продвижения:',
								status: '1 000'
							},
							{
								name: 'Дата окончания:',
								status: new Date()
							},
							{
								name: 'Заказы по переходу:',
								status: '20 000'
							}
						]

					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all.scss';
	.top{
		padding: 30px 65px;
		border-radius: 10px;
		background-color: $white;
		&-header{
			flex-direction: row;
			justify-content: space-between;
			&-title{
				width: auto;
				font-size: 25px;
			}
			&-button{
					width: auto;
				&>div{
					width: auto;
				}
			}
		}
		&-pre_title{
			font-size: 14px;
		}

		&-body{
			&-project{
				margin-bottom: 5px;
				padding: 25px 20px;
				box-shadow: 0px 1px 7px rgba(176, 176, 176, 0.25);
				&-img{
					border-radius: 10px;
				}
				&-content{
					flex-direction: row;
					flex-wrap: wrap;

					&-header{
						&>div{
							width: auto;
							font-size: 16px;
						}
					}
					&-body{
						flex-direction: row;
						flex-wrap: wrap;
						&>div{
							margin: 10px;
							color: $grey;
							&>div{
								width: auto;
								margin:  5px;
								color: $black;
							}
						}
					}
				}
			}
		}
	}

</style>