<template>
	<div class="reviews">
		<div class="reviews-header">
			<div class="reviews-header-status">
				<div class="reviews-header-status-row" v-for="i in 5">
					<div class="reviews-header-status-row-srars">{{i}} Звёзд</div>
					<div class="reviews-header-status-row-line"><div :style="{maxWidth: '4%', transition: ((i/10) + 0.3) + 's'}"></div></div>
					<div class="reviews-header-status-row-procent">4%</div>
					
				</div>
				
			</div>
			<div class="reviews-header-all">
				<div class="reviews-header-all-rating"><div v-for="i in 5"></div></div>
				<div class="reviews-header-all-title">Рейтинг 4.8 (40 оценок)</div>
				<div class="reviews-header-all-main">Помогите другим пользователям узнать больше</div>
				<div class="reviews-header-all-link">Оставить отзыв</div>
			</div>

		
		</div>
		<div class="reviews-body">
			<div class="reviews-body-row">
				<v-comment />
			</div>
		</div>
	</div>
</template>

<script>
	import vComment from '../../comment.vue'
	export default{
		components: { vComment },
		data(){
			return{

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.reviews{
		justify-content: flex-start;
		padding: 64px 15px;
		&-header{
			flex-direction: row;
			&-status{
				flex-direction: column-reverse;
				&-row{
					flex-direction: row;
					justify-content: space-between;
					margin-bottom: 15px;
					&-srars{
						width: 6rem;
						margin-right: 5px;
						color: rgba(40, 47, 54, 0.8);
					}
					&-line{
						width: 100%;
						height: 5px;
						border-radius: 3px;
						background: rgba(40, 47, 54, 0.08);
						&>div{
							width: 100%;
							height: 100%;
							position: absolute;
							left: 0;
							max-width: 0;
							border-radius: 3px;
							background-color: $cian;
						}
					}
					&-procent{
						width: 6rem;
						color: rgba(40, 47, 54, 0.8);
					}
				}
			}
			&-all{
				justify-content: flex-start;
				align-items: flex-start;
				&-rating{
					width: auto;
					&>div{

					}
				}
				&-title{
					width: auto;
					font-size: 18px;
				}
				&-main{
					width: auto;
				}
				&-link{
					width: 75%;
				}
			}
		}
		&-body{
			// width: calc(100% - 86px);
			// margin-left: -86px;
			&-row{

			}
		}
	}
</style>