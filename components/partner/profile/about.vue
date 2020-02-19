 <template>
	<div class="about">
		<div class="about-title">Заполненность профиля:<div>Начинающий</div></div>
		<div class="about-line"><div :style="{ maxWidth: 20 + '%' }"></div><div style="left: 20%">20%</div></div>
		<div class="about-buttons">
			<router-link to="/partner/project/new" class="about-buttons-button"><div></div>Новый проект</router-link>
			<router-link to="/partner/top" class="about-buttons-button premium"><div></div>Стать премиум</router-link>
		</div>
		<div class="hr"></div>
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
	@import '@/assets/scss/all.scss';
	.about{
		justify-content: flex-start;
		&-title{
			margin: 15px;
			flex-direction: row;
			justify-content: flex-start;
			background-color: $white;
			color: $grey;
			&>div{
				width: auto;
				margin-left: 5px;
			}
		}
		&-line{
			background-color: $white;
			border-radius: 9px;
			height: 15px;
			background-color: $blue_015;
			&>div{
				position: absolute;
				bottom: -24px;
				margin-left: -12px;
				width: auto;
			}
			&>div:first-child{
				margin-left: unset;
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
				margin: 30px;
				height: 180px;
				width: 240px;
				color: $grey;
				background-color: #EBECEC;
				border-radius: 10px;
				cursor: pointer;
				&:first-child{
					&>div{
						&:before, &:after{
							content: "";
							background-color: #ABABAB;
							height: 30px;
							width: 5px;
							border-radius: 30px;
						}
						&:before{
							position: absolute;
							transform: rotate(90deg);
						}
					}
				}
				&.premium{
					background-color: rgba(216, 64, 11, 0.08);
					color: $red;
					&>div{
			      width: 25px;
			      height: 32px;
			      background: #D8400B;
			      font-size: 11px;
			      border-radius: 2px 2px 0 0;
				    &:after {
				      content: "";
				      position: absolute;
				      left: 0;
				      bottom: 0;
				      width: 0;
				      height: 0;
				      border-bottom: 10px solid #eee;
				      border-left: 12.5px solid transparent;
				      border-right: 12.5px solid transparent;
				    }
					}
				}
			}
		}
		&-settings{
			padding: 15px 0;
			&-row{
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 30px;
				&>div{
					flex-direction: row;
					width: 50%;
					min-width: 40%;
					align-items: flex-start;
					justify-content: flex-start;
					text-align: left;
					flex-wrap: wrap;
					&>div{
						width: auto;
						margin: 0 5px;
					}
				}
			}
		}
	}
	.hr{
		width: 100vw;
		height: 15px;
		background-color: #ececec;
	}
</style>