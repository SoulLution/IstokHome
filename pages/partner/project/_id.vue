 <template>
	<div class="project_id">
		<div class="project_id-header">Новый проект</div>

		<div class="project_id-body">

			<div class="project_id-body-row" v-for="input in inputs">
				<div :class="'col-' + (12 / input.length)" v-for="item in input">
					<div class="project_id-body-row-input">
						<div>{{item.name}}*</div>
						<select :placeholder="item.name" v-modal="input.data" v-if="item.type === 'select'"></select>
						<textarea :placeholder="item.name" v-modal="input.data" v-else-if="item.type === 'area'"></textarea>
						<input :placeholder="item.name" v-modal="input.data" v-else>
					</div>
				</div>
			</div>

			<div class="project_id-body-row size">
				<div class="project_id-body-row-title col-12">Общие размеры</div>
				<div :class="'col-' + (12 / sizes.length)" v-for="input in sizes">
					<div class="project_id-body-row-input">
						<input :placeholder="input.name" v-modal="input.data">
					</div>
				</div>
			</div>

			<div class="project_id-body-row photos">
				<div class="project_id-body-row-title col-12">Фото проекта*</div>
				<div class="col-4">
					<div class="project_id-body-row-img">
						<div class="new">Добавить фото</div>
					</div>
				</div>
				<div class="col-4" v-for="photo in photos" :key="photo">
					<div class="project_id-body-row-img">
						<div></div>
						<img :src="photo">
					</div>
				</div>
			</div>

		</div>

		<div class="project_id-footer">
			<div class="project_id-footer-link link" @click="$router.go(-1)">Отменить</div>	 
			<div class="project_id-footer-button  button" @click="sendData()">Сохранить</div>	 
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
				sizes: [
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
		},
		methods: {
			sendData(){

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.project_id{
		width: calc(100% - 100px);
		border-radius: 10px;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 32px 30px;
		background-color: $white;
		&-header{
			width: auto;
			font-size: 20px;
			line-height: 25px;
			margin-bottom: 25px;
		}
		&-body{
			&-row{
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: flex-start;
				&-title{
					width: auto;
					color: $grey;
				}
				&-img{
					border-radius: 10px;
					overflow: hidden;
					height: 180px;
					width: 240px;
					margin: 15px 0;
					&>img{
						width: 240px;
						height: 180px;
					}
					&>div{
						position: absolute;
						width: 240px;
						height: 180px;
						z-index: 1;
						opacity: 0;
						background-color: rgba(255, 255, 255, 0.79);
						cursor: pointer;
						&:after, &:before{
							display: none;
						}
						&.new{
							opacity: 1;
							background-color: #EBECEC;
							&:hover{
								background-color: #dedede;
							}
						}
						&:hover{
							opacity: 1;
						}
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
					align-items: flex-start;
					&>div{
						width: auto;
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
				max-width: 200px;
			}
		}
	}
</style>