 <template>
	<div class="project_id">
		<div class="project_id-header">Новый проект</div>

		<div class="project_id-body">

			<div class="project_id-body-row" v-for="input in inputs">
				<div :class="'col-' + (12 / input.length)">
					<div class="project_id-body-row-input" v-for="item in input">
						<div>{{item.name}}*</div>
						<select :placeholder="item.name" v-modal="input.data" v-if="item.type === 'select'"></select>
						<textarea :placeholder="item.name" v-modal="input.data" v-else-if="item.type === 'area"></textarea>
						<input :placeholder="item.name" v-modal="input.data" v-else>
					</div>
				</div>
			</div>

			<div class="project_id-body-row size">
				<div class="project_id-body-row-title col-12">Общие размеры</div>
				<div :class="'col-' + (12 / sizes.length)">
					<div class="project_id-body-row-input" v-for="input in sizes">
						<div>{{input.name}}</div>
						<input :placeholder="input.name" v-modal="input.data">
					</div>
				</div>
			</div>

			<div class="project_id-body-row photos">
				<div class="project_id-body-row-title col-12">Фото проекта*</div>
				<div class="col-4">
					<div class="project_id-body-row-img">
						<div>Добавить фото</div>
					</div>
				</div>
				<div class="col-4" v-for="photo in photos">
					<div class="project_id-body-row-img">
						<div></div>
						<img :src="photo">
					</div>
				</div>
			</div>

		</div>

		<div class="project_id-footer">
			<div class="project_id-footer-link link">Отменить</div>	 
			<div class="project_id-footer-button  button">Сохранить</div>	 
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				inputs: [
					[
						{
							name: 'Название',
							data: ''
						},
						{
							name: 'Категория и услуга*',
							data: '',
							type: 'select'
						},
						{
							name: 'Стоимость kzt',
							data: ''
						}
					], 
					[
						{
							name: 'Опсание',
							data: '',
							type: 'area'
						}
					],
				],
				zises: [
					{
						name: 'Длина(м)',
						data: ''
					},
					{
						name: 'Ширина(м)',
						data: ''
					},
					{ 
						name: 'Высота(м)',
						data: ''
					},
					{
						name: 'Площадь(м2)',
						data: ''
					},
				],
				photos: []
			}
		}
	}
</script>

<style lang="scss" scoped>
	.project_id{
		justify-content: flex-start;
		padding: 32px 30px;
		background-color: $white;
		&-header{
			font-size: 20px;
			line-height: 25px;
		}
		&-body{
			&-row{
				flex-direction: row;
				flex-wrap: wrap;
				&-title{
					color: $grey;
				}
				&-img{
					border-radius: 10px;
					overflow: hidden;

					&:hover{
						.project_id-body-row-img>div{
							opacity: 1;
						}
					}
					&>img{
						width: 240px;
						height: 180px;
					}
					&>div{
						position: absolute;
						height: 100px;
						width: 100px;
						z-index: 1;
						opacity: 0;
						background-color: $white;
						&:after, &:before{
							content: "";
							border-radius: 1px;
							background-color: $black;
							width: 56px;
							height: 3px;
							position: absolute;
							transform: rotate(45deg); 
						}
						&:after{
							transform: rotate(-45deg); 
						}
					}
				}
				&.zise{

				}
				&.photos{

				}
				&-input{
					&>div{
					  font-weight: bold;
						font-size: 14px;
						line-height: 20px;
					}
					&>select{
						width: 100%;
						font-size: 14px;
						line-height: 16px;
					}
					&>textarea{
						resize: none;
						width: 100%;
						font-size: 14px;
						line-height: 16px;
					}
					&>input{
						width: 100%;
						font-size: 14px;
						line-height: 16px;  
					}
				}
			}
		}
		&-footer{
			flex-direction: row;
			justify-content: flex-end;
			&-link{
				width: auto;
				margin-right: 5px;
				cursor: pointer;
				color: $blue;
			}
			&-button{
				width: auto;
			}
		}
	}
</style>