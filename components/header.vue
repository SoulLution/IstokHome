<template>
	<div class="header">
		<div class="header-logo">
			<img src="">
			<div class="header-logo-links">
				<div class="header-logo-links-link"></div>
			</div>
			<div class="header-logo-profile">
				<div class="header-logo-profile-edit"></div>
				<div class="header-logo-profile-icon"></div>
			</div>
		</div>
		
		<div class="header-bg"></div>
		<div class="header-childs">
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
	</div>
</template>


<script>
	export default{
		data(){
			return{
				child: null,
				profile: [
					{
						icon: '',
						link: ''
					},
					{
						icon: '',
						link: ''
					},
					{
						icon: '',
						link: ''
					}
				],
				links: [
					{
						name: 'Категории',
						childs: [],
					},
					{
						name: 'Специалисты',
						childs: [],
					},
					{
						name: 'Блог',
						link: '/vlog'
					}
				]
			}
		}
	}
</script>


<style lang="scss">
	@import '@/assets/scss/all.scss';

	.header{
		background-color: $cian;
		flex-direction: row;
		justify-content: space-between;
		height: 70px;
		&-logo{
			height: 100%;
			&>img{
				height: 90%;
				margin-right: 30px;
			}
			&-links{
				justify-content: row;
				&-link{
					color: $white;
					font-weight: bold;
					font-size: 14px;
					line-height: 20px;
					cursor: pointer;
					margin: 0 40px; 
					&:hover:after{
						max-width: 100%;
					}
					&:after{
						content: "";
						background-color: $white;
						height: 3px;
						width: 100%;
						max-width: 0;
					}
				}
			}
			&-profile{
				&-edit{
					cursor: pointer;
					color: $white;
					margin-right: 38px;
					font-weight: bold; 
				}
				&-icon{
					height: 38px;
					color: $white;
					margin: 0 34px;
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