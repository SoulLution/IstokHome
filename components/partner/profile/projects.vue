<template>
	<div class="projects">
		<div class="projects-title" v-if="projects.length">Количество проектов: <div>{{projects.length}}</div></div>
		<div class="projects-erno" v-else><div></div>Новый проект</div>
		<v-overview v-for="project in projects"/>
		<div class="projects-more" v-if="projects.length">Загрузить ещё</div>
	</div>
</template>

<script>
	import vOverview from '../../overview.vue'
	export default{
		components: { vOverview },
		data(){
			return{
				projects: [
					{

					},
					{

					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.projects{
		align-items: flex-start;
		&-title{
			flex-direction: row;
			justify-content: flex-start;
			font-size: 14px;
			color: $grey;
			margin: 16px 52px;
			width: auto;
			&>div{
				width: auto;
				margin: 0 5px;
				font-size: 14px;
				line-height: 20px;
				color: $black;
			}
		}
		&-erno{
			&>div{

			}
		}
		&-more{
			color: $cian;
			cursor: pointer;
			margin-bottom: 5px;
		}
	}

</style>