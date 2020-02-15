 <template>
	<div class="comment">
		<div class="comment-stars"><div></div></div>
		<div class="comment-content">
			<div class="comment-content-head">
				<div class="comment-content-head-title">
					<div>{{comment.title}}</div>
					<div>{{comment.author}}<div>{{$f.getNormalDate(comment.dt)}}</div></div>
				</div>
				<div class="comment-content-head-likes"><div></div>{{comment.like}}</div>
			</div>
			<div class="comment-content-body">
				<div class="comment-content-body-about">{{comment.com}}</div>
				<div class="comment-content-body-galery"><img :src="img" v-for="img in comment.img"></div>
			</div>

			<div class="comment-content-footer">
				<div class="comment-content-footer-ans">Ответить</div>
				<div class="comment-content-footer-open" @click="open = !open">{{comment.answers.length}} ответов</div>

			</div>

			<div class="comment-content-answer" v-if="open">
				<v-comment v-for="answer in comment.answers"/>
			</div>
			    
		</div>
			
	</div>
</template>

<script>
	import vComment from './comment'
	export default{
		components: { vComment },
		data(){
			return{
				open: false,
				comment: {
					title: 'Знаток своего дела ',
					author: 'Doug Horneron',
					dt: new Date(),
					com: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
					img: [''],
					like: 1,
					answers: [
						{
							title: 'Знаток своего дела ',
							author: 'Doug Horneron',
							dt: new Date(),
							com: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
							img: [''],
							like: 1,
						},{
							title: 'Знаток своего дела ',
							author: 'Doug Horneron',
							dt: new Date(),
							com: `First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.`,
							like: 1,
						}
					]
				}

			}
		}
	}
</script>

<style lang="scss">
	.comment{
		flex-direction: row;
		justify-content: flex-start;
		margin-top: 65px;
		&-stars{
			flex-direction: row;
			width: auto;
			margin-right: 12px;
			&>div{
				width: auto;
			}
		}
		&-content{
			&-head{
				font-size: 16px;
				flex-direction: row;
				justify-content: space-between;
				&-title{
					width: auto;
					&>div{
						width: auto;
						&:first-child{
							font-size: 16px;
						}
						&>div{

						}
					}
				}
				&-likes{
					width: auto;
					&>div{
						width: auto;
					}
				}
			}
			&-body{
				&-about{
					margin: 20px 12px 20px 0;
					text-align: left;
					align-items: flex-start;
				}
				&-galery{
					flex-direction: row;
					justify-content: flex-start;
					overflow-x: auto;
					&>img{
						width: 45px;
						height: 45px;
						margin-right: 20px;
					}
				}
			}
			&-footer{
				flex-direction: row;
				justify-content: flex-start;
				&-ans{
					color: $blue;
					cursor: pointer;
					margin-left: 70px;
				}
				&-open{

				}
			}
			&-answer{
				justify-content: flex-start;
				&>div{
					padding-left: 12px;
					border-left: 1px dashed $black;
				}
			}
		}
	}
</style>