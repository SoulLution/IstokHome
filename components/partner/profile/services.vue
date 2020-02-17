<template>
	<div class="services">
		<div class="services-body col-9">
			<div class="services-body-row" v-for="(service, i) in services">
				<div>{{i+1}}</div>
				{{service.name}}
			</div>
		</div>
		<div class="services-change col-3"><div class="button">Изменить</div></div>
			
	</div>
</template>

<script>
	export default{
		data(){
			return{
				services: [
					{
						name: 'Услуга номер 1',
						id: 1,
					},
					{
						name: 'Услуга номер 2',
						id: 2,
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/all.scss';
	.services{
		padding-left: 20%;
		flex-direction: row;
		justify-content: flex-start;
		&-body{
			&-row{
					flex-direction: row;
					justify-content: flex-start;
				&>div{
					margin-left: 20px;
				}
			}
		}
		&-change{
			align-items: flex-end;
			padding-left: 40%;
			&>.button{

			}
		}

	}

</style>