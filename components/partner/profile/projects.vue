<template>
	<div class="projects">
		<div class="projects-title" v-if="projects.length">Количество проектов: <div>{{projects.length}}</div></div>
		<router-link to="/partner/project/new" class="projects-erno" v-else><div></div>Новый проект</router-link>
		<v-overview :project="project" v-for="project in projects"/>
		<div class="projects-more" v-if="projects.length">Загрузить ещё</div>
	</div>
</template>

<script>
	import vOverview from '../../overview.vue'
	export default{
		components: { vOverview },
		props: [ 'projects' ],
		data(){
			return{
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.projects{
		align-items: center;
		&-title{
			flex-direction: row;
			justify-content: flex-start;
			font-size: 14px;
			color: $grey;
			margin: 16px 52px;
			width: calc(100% - 104px);
			&>div{
				width: auto;
				margin: 0 5px;
				font-size: 14px;
				line-height: 20px;
				color: $black;
			}
		}
		&-erno{
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
		}
		&-more{
			color: $cian;
			cursor: pointer;
			margin-bottom: 5px;
		}
	}

</style>