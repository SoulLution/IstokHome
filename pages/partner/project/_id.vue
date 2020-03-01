 <template>
	<div class="project_id">
		<div class="project_id-header">{{isNaN($route.params.id) ? 'Новый проект' : 'Проект ' + inputs[0][0].data}}</div>

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
						<div @click="deleteImg(i)"></div>
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
		computed:{
			getProfile(){
				return this.$store.getters['PROFILE']
			}
		},
		watch:{
			getProfile(newData){
				this.changeProfile()
			}
		},
		created(){
			if(!this.$store.getters['PROFILE'].profile.id)
				this.$store.dispatch('GET_PROFILE', {router: this.$router})
			else
				this.changeProfile()

			this.$axios.get(`api/category/sub-project/`,{
				headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
      })
			.then(res => this.inputs[0][1].options = res.data.results)
		},
		methods: {
			deleteImg(index){
				if(this.photos[index].id)
					this.$axios.delete(`api/performer/${this.$store.getters['PROFILE'].profile.performer_id}/project/${this.$route.params.id}/image/${this.photos[index].id}`,{
						headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
		      })

				this.photos.splice(index,1)
			},
			changeProfile(){
				if(!isNaN(this.$route.params.id))
					this.$axios.get(`api/performer/${this.$store.getters['PROFILE'].profile.performer_id}/project/${this.$route.params.id}/`,{
						headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
		      })
					.then(res => {
						let data = res.data

						this.inputs[0][0].data = data.name
						this.inputs[0][1].data = data.sub_project_category.id
						this.inputs[0][2].data = data.price

						this.inputs[1][0].data = data.description

						this.sizes[0].data = data.length
						this.sizes[1].data = data.width
						this.sizes[2].data = data.height
						this.sizes[3].data = data.area

						for(let img of data.images)
							this.photos.push({
								id: img.id,
								url: 'https://istokhome.com' + img.image,
							})
					})
			},
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
					project_type: 2,
					price: this.inputs[0][2].data,
					description: this.inputs[1][0].data,
					length: this.sizes[0].data || 0,
					width: this.sizes[1].data || 0,
					height: this.sizes[2].data || 0,
					area: this.sizes[3].data || 0,
					sub_project_category: this.inputs[0][1].data,
					city: ''
				}
				let patch = true

				if(isNaN(this.$route.params.id)) patch = false

				this.$axios[patch ? 'patch' : 'post']
				(`api/performer/${this.$store.getters['PROFILE'].profile.performer_id}/project/${patch ? this.$route.params.id + '/' : ''}`
				,data, 
				{
        headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
	      })
				.then(res => {
					for(let i = 0; i < this.photos.length; i++)
						if(!this.photos[i].id){
							let form = new FormData()
							form.append('image', this.photos[i].data)
							this.$axios.post(`api/performer/${this.$store.getters['PROFILE'].profile.performer_id}/project/${res.data.id}/image/`,form, {
				        headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
				      })
						}
						this.$router.push('/partner/profile')
				})
				.catch(err => console.log(err.response))
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
		margin-bottom: 15px;
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