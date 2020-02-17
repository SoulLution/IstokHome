 <template>
	<div class="edit">
		<div class="edit-header">Ваш аккаунт зарегистрирован, пожалуйста заполните информацию</div>

		<div class="edit-body">

			<div class="edit-body-row" v-for="input in inputs">
				<div :class="'col-' + (12 / input.length)">
					<div class="edit-body-row-input" v-for="item in input">
						<div>{{item.name}}</div>
						<select :placeholder="item.name" v-if="item.type === 'select'"></select>
						<textarea :placeholder="item.name" v-else-if="item.type === 'area'"></textarea>
						<input :placeholder="item.name" v-else>
					</div>
				</div>

			</div>
		</div>

		<div class="edit-footer">
			<div class="edit-footer-link link">Отменить</div>	 
			<div class="edit-footer-button  button">Сохранить</div>	 
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
							data: ''
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
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.edit{
		justify-content: flex-start;
		padding: 32px 30px;
		background-color: $white;
		&-header{
			font-size: 20px;
			line-height: 25px;
		}
		&-body{
			&-row{
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