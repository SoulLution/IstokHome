 <template>
	<div class="about">
		<div class="about-title">Заполненность профиля:<div>Начинающий</div></div>
		<div class="about-line" :style="':after{ max-width:' + 20 '%}'"><div style="left: 20%">20%</div></div>
		<div class="about-buttons">
			<div class="about-buttons-button"><div></div>Новый проект</div>
			<div class="about-buttons-button premium"><div></div>Стать премиум</div>
		</div>

		<div class="about-settings">
			<div class="about-settings-row" v-for="row in data">
				<div>{{row.name}}</div>
				<div><div v-for="(child, i) in row.childs">{{child + ( i !== row.childs.length - 1 ? ', ' : '')}}</div></div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data: [
					{
						name: 'РЕГИОНЫ ОБСЛУЖИВАНИЯ:',
						childs: ['Алматы','Караганда','Нур-султан']
					},
					{
						name: 'НАГРАДЫ:',
						childs: ['Награда 1','Награда 2','Награда 3']
					},
					{
						name: 'Адрес:',
						childs: ['проспект Аль-Фараби 19к2Б','050000 Алматы','Россия','+7-7473170747']
					}
				]
			}
		}
	}    
</script>

<style lang="scss" scoped>
	.about{
		justify-content: flex-start;
		&-title{
			color: $grey;
			&>div{
				margin-left: 5px;
			}
		}
		&-line{
			border-radius: 9px;
			background-color: $cian;
			&>div{
				position: absolute;
				bottom: -24px;
			}
			&:after{
				content: "";
				width: 100%;
				height: 100%;
				border-radius: 9px;
				background-color: $green;
				position: absolute;
				left: 0;
				top: 0;
				max-width: 0;
				transition: 0.3s;
			}
		}
		&-buttons{
			flex-direction: row;
			&-button{
				height: 180px;
				width: 240px;
				color: $grey;
				&>div{

				}
				&.premium{
					color: $red;
				}
			}
		}
		&-settings{
			&-row{
				flex-direction: row;
				&>div{
					min-width: 40%;
					width: auto;
					align-items: flex-start;
					&>div{
						width: auto;
					}
				}
			}
		}
	}
</style>