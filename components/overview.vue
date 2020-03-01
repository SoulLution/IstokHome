<template>
	<div class="overview">

		<div class="overview-body">
			<div class="col-3">
				<img class="overview-body-img" :src="'https://istokhome.com' + (project.images.length ? project.images[0].image : '')">
			</div>
			<div class="col-6">
				<div class="overview-body-title col-12">{{project.name}}</div>
					<div class="overview-body-row col-12" v-if="false">
						<div class="overview-body-row-stars"><div v-for="i in 5"></div></div>
						<div class="overview-body-row-hearts"><div></div>123449</div>
					</div>

					<div class="overview-body-row col-12">
						<div class="overview-body-row-item">
							<div class="overview-body-row-item-name">Категория</div>
							<div class="overview-body-row-item-status">{{project.sub_project_category.name}}</div>
						</div>
						<div class="overview-body-row-item">
							<div class="overview-body-row-item-name">Цена</div>
							<div class="overview-body-row-item-status">{{project.price}}kzt</div>
						</div>
					</div>
					<div class="overview-body-row col-12">
						<div class="overview-body-row-item" v-if="project.length">
							<div class="overview-body-row-item-name">Длина</div>
							<div class="overview-body-row-item-status">{{project.length}}</div>
						</div>
						<div class="overview-body-row-item" v-if="project.width">
							<div class="overview-body-row-item-name">Ширина</div>
							<div class="overview-body-row-item-status">{{project.width}}</div>
						</div>
					</div>
					<div class="overview-body-row col-12">
						<div class="overview-body-row-item" v-if="project.height">
							<div class="overview-body-row-item-name">Высота</div>
							<div class="overview-body-row-item-status">{{project.height}}</div>
						</div>
						<div class="overview-body-row-item" v-if="project.area">
							<div class="overview-body-row-item-name">Площадь</div>
							<div class="overview-body-row-item-status">{{project.area}}</div>
						</div>
					</div>
				</div>
				

				<div class="col-3">
					<router-link :to="'/partner/project/'+project.id" class="overview-body-redact"><div></div>Редактировать</router-link>
				</div>
			</div>

		</div>
		
	</div>
</template>

<script>
	export default{
		props: [ 'project' ],
		data(){
			return{
			}
		},
		created(){
			console.log(this.project)
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