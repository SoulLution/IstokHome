<template>
	<div class="projects">
		<div class="projects-title" v-if="projects.length">Количество проектов: {{projects.length}}</div>
		<div class="projects-erno" v-else><div></div>Новый проект</div>
		<v-overview v-for="project in projects"/>
		<div class="projects-more" v-if="projects.length">Загрузить ещё</div>
	</div>
</template>

<script>
	import vOverview from '../../overview.vue'
	export default{
		components: { vOverview }
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
	
	.projects{
		&-title{
			flex-direction: row;
			justify-content: flex-start;
			font-size: 14px;
			color: $grey;
		}
		&-erno{
			&>div{

			}
		}
		&-more{
			color: $blue;
		}
	}

</style>