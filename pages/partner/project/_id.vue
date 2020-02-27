 <template>
	<div class="project_id">
		<div class="project_id-header">Новый проект</div>

		<div class="project_id-body">

			<div class="project_id-body-row" v-for="input in inputs">
				<div :class="'col-' + (12 / input.length)" v-for="item in input">
					<div class="project_id-body-row-input">
						<div>{{item.name}}*</div>
						<select required :placeholder="item.name" v-model="item.data" v-if="item.type === 'select'">
							<option value="" disabled selected>{{item.name}}</option>
							<option :value="option.id" v-for="option in item.options">{{option.name}}</option>
						</select>
						<textarea required :placeholder="item.name" v-model="item.data" v-else-if="item.type === 'area'"></textarea>
						<input required :type="item.type" :placeholder="item.name" v-model="item.data" v-else>
					</div>
				</div>
			</div>

			<div class="project_id-body-row size">
				<div class="project_id-body-row-title col-12">Общие размеры</div>
				<div :class="'col-' + (12 / sizes.length)" v-for="input in sizes">
					<div class="project_id-body-row-input">
						<input type="number" :placeholder="input.name" v-model="input.data">
					</div>
				</div>
			</div>

			<div class="project_id-body-row photos">
				<div class="project_id-body-row-title col-12">Фото проекта*</div>
				<div class="col-4">
					<div class="project_id-body-row-img">
						<input type="file" id="new-image-project" accept="image/*" multiple @change="newFile" style="display: none">
						<label class="new" for="new-image-project">Добавить фото</label>
					</div>
				</div>
				<div class="col-4" v-for="(photo, i) in photos">
					<div class="project_id-body-row-img">
						<div @click="photos.splice(i,1)"></div>
						<img :src="photo.url">
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
							data: '',
							type: 'text'
						},
						{
							name: 'Категория и услуга',
							data: '',
							options: [],
							type: 'select'
						},
						{
							name: 'Стоимость kzt',
							data: '',
							type: 'number'
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
		created(){
			this.$axios.get(`api/category/sub-project/`,{
				headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
      })
			.then(res => this.inputs[0][1].options = res.data.results)
		},
		methods: {
			newFile(e){
				for(let file of e.target.files)
					this.photos.push({
						url: URL.createObjectURL(file),
						data: file
					})
			},
			sendData(){
				let data = {
					name: this.inputs[0][0].data,
					project_type: 1,
					price: this.inputs[0][2].data,
					description: this.inputs[1][0].data,
					length: this.sizes[0].data || 0,
					width: this.sizes[1].data || 0,
					height: this.sizes[2].data || 0,
					area: this.sizes[3].data || 0,
					sub_project_category: this.inputs[0][1].data,
					city: ''
				}
				this.$axios.post(`api/performer/${this.$store.getters['PROFILE'].profile.performer_id}/project/`,data, {
	        headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
	      })
				.then(async res => {
					for(let photo of this.photos){
						let data = {image: photo.data}
						await this.$axios.post(`api/performer/${this.$store.getters['PROFILE'].profile.performer_id}/project/${res.data.id}/image/`,data, {
			        headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
			      })
					}
					this.$router.go(-1)
				})
				.catch(err => console.log(err.response.data))
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
					max-width: 240px;
					margin: 15px 0;
					&>img{
						max-width: 240px;
						width: 100%;
						height: 180px;
					}
					&>div{
						&:after, &:before{
							content: "";
						}
						&:hover{
							opacity: 1;
							&:after, &:before{
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
					&>label, &>div{
						position: absolute;
						width: 240px;
						height: 180px;
						z-index: 1;
						opacity: 0;
						background-color: rgba(255, 255, 255, 0.79);
						cursor: pointer;
						
						&.new{
							opacity: 1;
							background-color: #EBECEC;
							&:hover{
								background-color: #dedede;
							}
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