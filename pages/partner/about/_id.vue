 <template>
	<div class="about">
		<div class="about-project">
			<div class="about-project-content">

				<div class="about-project-content-main">
					<div class="about-project-content-main-redact">Редактировать</div>
					<div class="about-project-content-main-title">{{project.title}}</div>
					<div class="about-project-content-main-tags"><div v-for="tag in project.tags">{{tag}}</div></div>
					<div class="about-project-content-main-price">{{project.price}}KZT</div>
					<div class="about-project-content-main-about">{{project.about}}</div>
					<div class="about-project-content-main-more">читать еще...</div>
					<div class="about-project-content-main-heart">
						<div></div>
							Добавить в избранное
						<div>( добавили {{project.heart}} )</div>
					</div>
					<div class="about-project-content-main-row">Заказов: <div>{{project.application}}</div></div>
					<div class="about-project-content-main-row">Переходов: <div>{{project.transfer}}</div></div>
					<div class="about-project-content-main-row">Консультация: <div>{{project.consultation}}</div></div>
					
				</div>

				<div class="about-project-content-galery">
					<div></div>
					<img :src="img" v-for="img in project.galery">
					<div></div>
					<div class="about-project-content-galery-next"></div>
				</div>

			</div>
			<img class="about-project-img" :src="project.galery[project.img]">
			
		</div>

		<div class="about-comments">
			<div class="about-comments-header">Отзывы (754)</div>
			<v-reviews />
		</div>
		
	</div>
</template>

<script>
	import vReviews from './../../../components/partner/profile/reviews.vue'
	export default{
		components: { vReviews },
		data(){
			return{
				project: {
					id: 1,
					img: 0,
					galery: ['',''],
					title: 'Strandmon',
					tags: ['Кухня','Лофт','Тиффани'],
					price: '23 990',
					about: 'Маленький интерьер с правильным настроением.Когда нет возможности заполучить много пространства для своего ',
					heart: 1,
					application: '20 000',
					transfer: '20 000/мес',
					consultation: '20 000'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all.scss';
	.about{
		&-project{
			margin: 30px 0;
			background-color: $white;
			border-radius: 10px;
			flex-direction: row;
			padding: 10px;
			&-content{
				flex-direction: row;
				padding: 20px;
				&-main{
					align-items: flex-start;
					&-redact{
						color: $blue;
						width: auto;
					}
					&-title{
						width: auto;
						font-size: 40px;
					}
					&-tags{
						flex-direction: row;
							&>div{
								width: auto;
								color: $cian;
								margin: 0 5px;
								cursor: pointer;
								&:before{
									content: "";
									margin-right: 3px;
									width: 3px;
									height: 3px;
									border-radius: 50%;
									background-color: $cian;
								}
								&:first-child{
									.about-project-content-main-tags>div:before{
										display: none;
									}
								}
							}
						}
					}
					&-price{
						width: auto;
					}
					&-about{
						width: auto;
						max-height: 60px;
						font-size: 14px;
					}
					&-more{
						color: $cian;
						cursor: pointer;
					}
					&-heart{
						width: auto;
						&>div{
							width: auto;
							color: $grey;
							margin-left: 15px
						}
					}
					&-row{
						font-size: 18px;
						color: $grey;
						width: auto;
						&>div{
							align-items: flex-start;
							width: 50%;
							font-size: 18px;
						}
					}
				}
				&-galery{
					width: 20%;
					height: 100%;
					&>div{
						margin: 13px 0;
					}
					&>img{
						margin: 20px 0; 
					}
					&-next{
						margin-top: 20px;
					}
				}
			}
			&-img{
				width: 100%;
				min-height: 535px;
			}
		
		
		&-comments{
			margin: 30px 0; 
			border-radius: 10px;
			background-color: $white;
			&-header{
				font-size: 14px;
				border-bottom: 1px solid $grey;
			}
		}
	}


</style>