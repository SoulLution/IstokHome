<template>
	<div class="top">
		<div class="top-header">
			<div class="top-header-title">Топ</div>
			<router-link to="/partner/top/new" class="top-header-button button">Продвигать проект</router-link>
		</div>
		<div class="top-pre_title">Проекты на продвижении: {{projects.length}}</div>

		<div class="top-body">
			<div class="top-body-project" v-for="project in projects">
				<img class="top-body-project-img col-3" :src="'project.img'">

				<div class="top-body-project-content col-9">
					<div class="top-body-project-content-header">
						<div>{{project.title}}</div>
						<div><div class="button nope">Приостановить</div><router-link to="/partner/top/1" class="button success">Пролонгация</router-link></div>
					</div>
					<div class="top-body-project-content-body">
						<div class="col-4"><div v-for="i in 5"></div></div>
						<div class="col-8"><div></div>{{project.raiting}}</div>

						<div class="col-4" v-for="(set, i) in project.settings">{{set.name}}<div>{{set.type === 'date' ? $getNormalDate(set.status) : set.status}}</div></div>

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
								type: 'date',
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
								type: 'date',
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
		width: calc(100% - 100px);
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
			align-items: flex-start;
		}

		&-body{
			&-project{
				flex-direction: row;
				margin-bottom: 5px;
				padding: 25px 20px;
				box-shadow: 0px 1px 7px rgba(176, 176, 176, 0.5);
				margin: 15px;
				&-img{
					border-radius: 10px;
				}
				&-content{
					flex-direction: row;
					flex-wrap: wrap;

					&-header{
						flex-direction: row;
						justify-content: space-between;
						&>div{
							flex-direction: row;
							width: auto;
							font-size: 16px;
						}
					}
					&-body{
						justify-content: flex-start;
						flex-direction: row;
						flex-wrap: wrap;
						&>div{
							align-items: flex-start;
							margin: unset;
							padding: unset;
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