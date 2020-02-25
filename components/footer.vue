 <template>
	<div class="footer">
		<div class="footer-content">
			<div class="footer-content-column">
				<div class="footer-content-column-title bold">ISTOK HOME</div>
				<a href="tel:+77223788899" class="footer-content-column-link">+7 722 378 88 99</a>
				<a href="mailyo:info@istokhome.сom" class="footer-content-column-link">info@istokhome.сom</a>
				
			</div>

			<div class="footer-content-column" v-for="column in data">
				<div class="footer-content-column-title">{{column.title}}</div>

				<router-link class="footer-content-column-link" :to="link.link" v-for="link in column.links">{{link.name}}</router-link>
				
			</div>

			<div class="footer-content-column">
				<div class="footer-content-column-title">Присоединяйся</div>
				<div class="footer-content-column-link"><a href=""><img src=""></a><a href=""><img src=""></a><a href=""><img src=""></a></div>
			</div>
			
		</div>

		<div class="footer-copyright">© 2019 ISTOKHOME</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data: [
					{
						title: 'Компания',
						links: [
							{
								name: 'О нас',
								link: '/',
							},
							{
								name: 'Контакты',
								link: '/',
							},
							{
								name: 'Карьера',
								link: '/',
							},
							{
								name: 'Блог',
								link: '/',
							}
						]
					},
					{
						title: 'Исполнителям',
						links: [
							{
								name: 'Дизайнерам',
								link: '/',
							},
							{
								name: 'Архитекторам',
								link: '/',
							},
							{
								name: 'Декораторам',
								link: '/',
							},
							{
								name: 'Строителям',
								link: '/',
							},
							{
								name: 'Поставщикам',
								link: '/',
							}
						]
					},
					{
						title: 'Помощь',
						links: [
							{
								name: 'FAQ',
								link: '/',
							},
							{
								name: 'Пользовательское соглашение',
								link: '/',
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
	.footer{
		background-color: $white;
		&-content{
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			border-bottom: 1px solid rgba(40, 47, 54, 0.15);
			width: calc(100% - 100px);
			&-column{
				padding: 40px 0;
				align-items: flex-start;
				width: 20%;
				&-title{
					width: auto;
					font-size: 14px;
					line-height: 20px;
					color: #282F36;
					font-weight: bold;	
					margin-bottom: 17.5px;
					&.bold{
						font-size: 25px;
						line-height: 30px;
					}
				}
				&-link{
					justify-content: flex-start;
					flex-direction: row;
					margin: 7.5px 0;
					color: rgba(40, 47, 54, 0.5);
					font-size: 14px;
					line-height: 20px;
					&>a{
						min-height: 40px;
						min-width: 40px;
						max-height: 40px;
						max-width: 40px;
						border-radius: 50%;
						margin: 0 7.5px;
						background-color: #ddd;
					}
				}
			}
		}
		&-copyright{
			align-items: flex-start;
			color: rgba(40, 47, 54, 0.5);
			font-size: 14px;
			line-height: 20px;
			padding: 35px 0;
			width: calc(100% - 100px);
		}
	}
</style>