<template>
	<div class="header">
		<div class="header-logo">
			<div class="header-logo-links">
				<img src="@/static/img/logo.png" @click="$router.push('/')">
				<div class="header-logo-links-link" @click="changeLink(link)" v-for="link in links">{{link.name}}</div>
			</div>
			<div class="header-logo-profile">
				<router-link class="header-logo-profile-edit" :to="checkRoute().path">{{checkRoute().name}}</router-link>
				<router-link class="header-logo-profile-icon" :to="i === 2 ? checkRoute().home : prof.link" v-for="(prof, i) in profile"><img :src="require('@/static/img/' + prof.icon)"></router-link>
			</div>
		</div>
		
		<div class="header-childs" v-if="false">
			<div class="header-childs-side col-9">
				<div class="header-childs-side-title col-12"></div>
				<div class="header-childs-side-link col-4" v-for="icon in profile"></div>
			</div>
			<div class="header-childs-side col-3">
				<div class="header-childs-side-tag"></div>
				<div class="header-childs-side-content"></div>
				<div class="header-childs-side-author"></div>
				<img src="">
			</div>
 		</div>
		<div class="header-bg" v-if="false"></div>
	</div>
</template>


<script>
	import Vue from 'vue'
	import f from './../plugins/functions.js'
	Vue.prototype.$f = f

	export default{
		data(){
			return{
				child: null,
				profile: [
					{
						icon: 'mail.svg',
						link: '/'
					},
					{
						icon: 'search.svg',
						link: '/'
					},
					{
						icon: 'account.svg',
						link: '/'
					}
				],
				links: [
					{
						name: 'Категории',
						childs: [],
					},
					{
						name: 'Заявки',
						link: '/partner/applications'
					},
					// {
					// 	name: 'Блог',
					// 	link: '/vlog'
					// }
				]
			}
		},
		methods:{
			checkRoute(){
				let end = {path: '/partner/sign', name: 'Исполнителям', home: '/profile'}
				if(this.$route.path.split('/')[1]){
					let path = this.$route.path.split('/')[1]
					if(path === 'partner')
						end = {path: '/', name: 'Клиентам', home: '/partner/profile'}
				}
				return end
			},
			changeLink(link){
				if(link.link)
					this.$router.push(link.link)
			}
		}
	}
</script>


<style lang="scss">
	@import '@/assets/scss/all.scss';

	.header{
		background-color: $cian;
		flex-direction: row;
		justify-content: center;
		height: 70px;
		margin-bottom: 30px;
		position: sticky;
		top: 0;
		z-index: 10;
		&-logo{
			padding: 0 5px;
			height: 100%;
			justify-content: space-between;
			flex-direction: row;
			&>img{
				// height: 90%;
				margin-right: 30px;
			}
			&-links{
				width: auto;
				flex-direction: row;
				&>img{
					cursor: pointer;
				}
				&-link{
					color: $white;
					font-weight: bold;
					font-size: 14px;
					line-height: 20px;
					cursor: pointer;
					margin: 0 40px; 
					align-items: flex-start;
					&:hover:after{
						max-width: 100%;
					}
					&:after{
						content: "";
						background-color: $white;
						height: 3px;
						width: 100%;
						max-width: 0;
						transition: 0.3s;
					}
				}
			}
			&-profile{
				flex-direction: row;
				width: auto;
				&-edit{
					width: auto;
					cursor: pointer;
					color: $white !important;
					margin-right: 38px;
					font-weight: bold; 
					align-items: flex-start;
					&:hover:after{
						max-width: 100%;
					}
					&:after{
						content: "";
						background-color: $white;
						height: 3px;
						width: 100%;
						max-width: 0;
						transition: 0.3s;
					}
				}
				&-icon{
					width: auto;
					height: 38px;
					color: $white;
					margin: 0 15px;
				}
			}
		}
		&-bg{
			position: fixed;
			height: calc(100vh - 70px);
			top: 70px;
			left: 0;
			z-index: 0;
		}
		&-childs{	
			top: 100px; 
			z-index: 1;	
			width: 100%;
			position: fixed;
			max-width: 1140px;
			&-side{
				padding: 35px;
				flex-wrap: wrap;
				flex-direction: row;
				&.col-3{
					justify-content: flex-end;
				}
				&-title{
					font-size: 14px;
					line-height: 20px;
					align-items: flex-start;
					padding: 0 5px;
				}
				&-link{
					padding: 5px;
					font-size: 14px;
					line-height: 20px;
					margin-top: 5px; 
					align-items: flex-start;
					cursor: pointer; 
					&:hover{
						color: $blue;
						&:after{
							content: "";
							width: 100%;
							height: 100%;
							background-color: $cian;
							opacity: 0.5;
						}
					}
				}
				&-tag{
					background-color: $blue;
					position: absolute;
					top: 5%;
					left: 5px;
					padding: 6px 12px 2px;
					border-radius: 3px; 
					color: $white ;
				}
				&-content{
 					color: $white;
 					margin: 0 25px;
				}
				&-author{
					margin: 16px 25px 32px;
					color: $white;
				}
				&>img{
					position: absolute;
					top: 0;
					left: 0;
					height: 100%;
					width: 100%;
					border-radius: 8px;
				}
			}
		}
	}

</style>