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
		flex-direction: row;
		justify-content: flex-start;
		&-body{
			&-row{
				flex-direction: row;
				justify-content: flex-start;
				margin: 7.5px 0;
				text-transform: uppercase;
				&>div{
					width: auto;
					font-size: 14px;
					margin-left: 20px;
					&:first-child{
						font-size: 18px;
						color: #808080;
						margin-right: 15px;
					}
				}
			}
		}
		&-change{
			align-items: flex-end;
			&>.button{

			}
		}

	}

</style>