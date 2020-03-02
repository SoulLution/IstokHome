<template>
	<div class="index">
		<div class="index-header">
			<div class="index-header-title"></div>
			<input type="search" class="index-header-search">
		</div>
		

		<div class="index-section working">
			<div class="working-title">Как это работает</div>
			<div class="working-about">Начните в 3 простых шага</div>
			<div class="working-content">
				<div class="working-content-item" v-for="(work, i) in works">
					<img class="working-content-item-img" :src="require('@/static/img/' + work.img)">
					<div class="working-content-item-name"><div>{{i+1}}.</div>{{work.about}}</div>
				</div>
			</div>
		</div>


		<div class="index-section special">
			<div class="section-title">Лучшие подборки для вас</div>
			<div class="section-header">
				<div class="section-header-name">Посмотрите тысячи красивых работ</div>
				<router-link to="/" class="section-header-link">Смотреть все</router-link>
			</div>
			<div class="special-content">
				<div class="special-content-item" v-for="special in specials"><img :src="require('@/static/img/' + special.img)">{{special.name}}</div>
			</div>
		</div>



		<div class="index-section save">
			<div class="save-col col-6">
				<div class="save-col-title">Безопасная оплата</div>
				<div class="save-col-content">Мы заранее позаботились о наших пользователях и ввели безопасную оплату
	ISTOK HOME гарантирует возврат всей суммы при неисполнение обязательств</div>
			</div>
			<div class="save-col col-6">
				<img class="save-col-img" src="@/static/img/save_pay.png">
			</div>

		</div>


		<div class="index-section servises">
			<div class="section-title">Услуги</div>
			<div class="section-header">
				<div class="section-header-name">Посмотрите тысячи красивых работ</div>
				<router-link to="/" class="section-header-link">Смотреть все</router-link>
			</div>
			<div class="servises-content">
				<div class="servises-content-col col-4">
					<div class="servises-content-item" v-for="i in 2"><img :src="require('@/static/img/' + servises[i-1].img)">{{servises[i-1].name}}</div>
				</div>
				<div class="servises-content-col col-4">
					<div class="servises-content-item" v-for="i in 1"><img :src="require('@/static/img/' + servises[i+1].img)">{{servises[i+1].name}}</div>
				</div>
				<div class="servises-content-col col-4">
					<div class="servises-content-item" v-for="i in 2"><img :src="require('@/static/img/' + servises[i+2].img)">{{servises[i+2].name}}</div>
				</div>
			</div>
		</div>


		<div class="index-section mimic">
			<div class="section-title">Лучшие профессионалы для вас</div>
			<div class="section-header">
				<div class="section-header-name">Лучшие мастера для вашего проекта</div>
				<div class="mimic-content">
					<div class="mimic-content-mimic" v-for="mimic in mimics">
						<div class="mimic-content-mimic-header">
							<div class="mimic-content-mimic-header-name">{{mimic.name}}</div>
							<div class="mimic-content-mimic-header-raiting"><div></div>{{mimic.raiting}}</div>
							<div class="mimic-content-mimic-header-who">{{mimic.who}}</div>

						</div>
						<div class="mimic-content-mimic-body">
							<img :src="img" v-for="img in mimic.img">
						</div>

						<div class="mimic-content-mimic-link">
							Посмотреть портфолио
						</div>

					</div>
				</div>
			</div>
			
		</div>


		<div class="index-section comments">
			<div class="section-title">Отзывы</div>
			<div class="section-header">
				<div class="section-header-name">Отзывы могут помочь вам с выбором</div>
			</div>
			<div class="comments-content">
				<div class="comments-content-comment" v-for="comment in 2">
					<div class="comments-content-comment-header">
						<div class="comments-content-comment-header-name">Алина Бабаева</div>
						<div class="comments-content-comment-header-link">Перейти</div>
					</div>
					<div class="comments-content-comment-rating"><div v-for="i in 5"></div>4.0</div>
					<div class="comments-content-comment-about">First off, the display is lovely, it's an IPS LCD screen, this by far is not the best screen on the market but this phone has done a great job in keeping the colors rich and bright. The size of the screen is perfect for watching videos. I spend a lot of time on youtube and other streaming sites and because of the screen I rely on msaid videos.</div>
				
				</div>
			</div>
		</div>



		<div class="index-section sale">
			<img src="@/static/img/sale.png">
			<div class="sale-col col-6"><img src="@/static/img/logo_blue.png">ISTOK HOME</div>
			<div class="sale-col col-6">
				<form class="form">
					<div class="form-title">Получи скидку на первую заявку</div>
					<div class="form-about">Напиши свой email адрес и мы отправим промокод на почту</div>
					<input required type="email" placeholder="Введите email">
					<button class="button">Получить промокод</button>
				</form>
			</div>
		</div>



	</div>
</template>

<script>
	export default {
		data(){
			return {
				mimics: [
					{
						id: 1,
						name: 'Алина Бабаева',
						who: 'Интерьер дизайнер',
						rating: 4.0,
						img: ['','']
					},
					{
						id: 1,
						name: 'Алина Бабаева',
						who: 'Интерьер дизайнер',
						rating: 4.0,
						img: ['','']
					},
					{
						id: 1,
						name: 'Алина Бабаева',
						who: 'Интерьер дизайнер',
						rating: 4.0,
						img: ['','']
					},
					{
						id: 1,
						name: 'Алина Бабаева',
						who: 'Интерьер дизайнер',
						rating: 4.0,
						img: ['','']
					},
				],
				servises: [
					{
						name: 'Дизайн‐проекта',
						img: 'ser_0.png'
					},
					{
						name: 'Ремонт и отделка',
						img: 'ser_1.png'
					},
					{
						name: 'Проектирование',
						img: 'ser_2.png'
					},
					{
						name: 'Схемы и чертежи',
						img: 'ser_3.png'
					},
					{
						name: 'Визуализация',
						img: 'ser_4.png'
					},
				],
				specials: [
					{
						name: 'Кухня',
						img: 'rectangle_0.png'
					},
					{
						name: 'Ванные комнаты',
						img: 'rectangle_1.png'
					},
					{
						name: 'Спальни',
						img: 'rectangle_2.png'
					},
					{
						name: 'Офисы',
						img: 'rectangle_3.png'
					}
				],
				works: [
					{
						img: 'partner_sign_1.png',
						about: 'Создайте свою виртуальную компанию на ISTOK HOME'
					},
					{
						img: 'partner_sign_2.png',
						about: 'Создайте свое портфолио и следите за просмотрами'
					},
					{
						img: 'partner_sign_3.png',
						about: 'Принимайте заявки и зарабатывайте вместе с ISTOK HOME'
					}
				]
			}
		},
		created(){
			// this.$router.push('partner/sign')
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	
</style>