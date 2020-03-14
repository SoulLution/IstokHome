<template>
	<div class="profile">

		<div class="profile-links">
			<div class="profile-links-link"></div>
			
		</div>

		<div class="profile-body">
			<v-user v-if="current === 0"/>
		</div>


	</div>
</template>

<script>
	import vUser from '@/components/user.vue'
	export default{
		components: { vUser },
		data(){
			return{
				current: 0,
				links: ['Профиль','Заявки','Уведомления']
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>