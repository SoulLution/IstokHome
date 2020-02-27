 <template>
	<form class="edit" @submit.prevent="sendData()">
		<div class="edit-header">Ваш аккаунт зарегистрирован, пожалуйста заполните информацию</div>

		<div class="edit-body">

			<div class="edit-body-row" v-for="input in inputs">
				<div :class="'col-' + (12 / input.length)" v-for="item in input">
					<div class="edit-body-row-input">
						<div>{{item.name}}</div>
						<select v-if="item.type === 'select'" v-model="item.data" required>
							<option value="" disabled selected>{{item.name}}</option>
							<option v-for="option in item.options" :value="option.id">{{option.name}}</option>
						</select>
						<textarea :placeholder="item.name" v-model="item.data" required v-else-if="item.type === 'area'"></textarea>
						<input :placeholder="item.name" v-model="item.data" required v-else>
					</div>
				</div>

			</div>
		</div>

		<div class="edit-footer">
			<div class="edit-footer-link link">Отменить</div>	 
			<label class="edit-footer-button  button" for="sub-edit">Сохранить</label>
			<input type="submit" id="sub-edit" style="display: none" @click="sendData()">
		</div>
		
	</form>
</template>

<script>
	export default{
		data(){
			return{
				inputs: [
					[
						{
							name: 'Название компании/ФИО',
							data: ''
						},
						{
							name: 'Ваша категория',
							data: '',
							type: 'select'
						},
						{
							name: 'Страна',
							data: '',
							type: 'select'
						}
					],
					[
						{
							name: 'Адрес',
							data: ''
						},
						{
							name: 'Номер телефона',
							data: ''
						},
						{
							name: 'Индекс ',
							data: ''
						}
					],
					[
						{
							name: 'Опсание компании',
							data: '',
							type: 'area'
						}
					],
					[
						{
							name: 'Услуги',
							data: '',
							type: 'select'
						}
					],
					[
						{
							name: 'Список регионов обслуживания',
							data: '',
							type: 'area'
						}
					],
					[
						{
							name: 'Награды',
							data: '',
							type: 'area'
						}
					],
				]
			}
		},
		computed:{
			getProfile(){
				return this.$store.getters['PROFILE'].profile
			}
		},
		watch:{
			getProfile(newData){
				this.changeProfile(newData)
			}
		},
		async created(){
			if(!this.$store.getters['PROFILE'].profile.id)
				this.$store.dispatch('GET_PROFILE', this.$router)
			else
				this.changeProfile(this.$store.getters['PROFILE'].profile)

			this.$axios.get('/api/category/sub-performer/')
			.then( res => {
				this.$set(this.inputs[0][1], 'options', res.data.results)
			} )

			this.$axios.get('/api/category/sub-project/')
			.then( res => {
				this.$set(this.inputs[3][0], 'options', res.data.results)
			} )
			this.$axios.get('/api/cities/',{
        headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
      })
			.then( res => {
				this.$set(this.inputs[0][2], 'options', res.data.results)
			} )

		},
		methods:{
			sendData(){
				let data = {
					name: this.inputs[0][0].data,
					sub_performer_category: this.inputs[0][1].data,
					city: this.inputs[0][2].data,
					address: this.inputs[1][0].data + ', ' + this.inputs[1][2].data,
					phone: this.inputs[1][1].data,
					description: this.inputs[2][0].data,
					working_regions: [this.inputs[3][0].data],
					reward: this.inputs[5][0].data
				}
				let profile = this.$store.getters['PROFILE'].profile
				this.$axios[profile.performer_id ? 'patch' : 'post'](`/api/performer/${profile.performer_id ? profile.performer_id + '/' : ''}`,data,{
	        headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
	      })
	      .then(res => {
	      	this.$store.dispatch('GET_PROFILE', {router: this.$router, path: '/partner/profile'})
	      })
	      .catch(err => console.log(err.response.data))
			},
			changeProfile(data){
				let profile = JSON.parse(JSON.stringify(data))
				this.inputs[0][0].data = profile.first_name + ' ' + profile.last_name + ' ' + profile.patronymic
				this.inputs[1][1].data = profile.phone
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.edit{
		justify-content: flex-start;
		padding: 32px 30px;
		margin: 50px;
		width: calc(100% - 100px);
		background-color: $white;
		&-header{
			font-size: 20px;
			line-height: 25px;
		}
		&-body{
			padding: 30px 0;
			&-row{
				flex-direction: row;
				&>div{
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
				margin-right: 15px;
				cursor: pointer;
				color: #67AAD5;
			}
			&-button{
				width: auto;
				padding: 12px 10%;
			}
		}
	}
</style>