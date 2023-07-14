
<template>
	<ContenuAltLayout>
		<div id="realisationList">
			<div class="swiper"
				ref="swiperContainerAlt">
				<div class="swiper-wrapper">
					<div :id="`slide-${realisation.id}`"
						v-for="realisation in realisations"
						:key="realisation.lien"
						class="swiper-slide">
						<div class="realisationwrapper">
							<div class="cartouche">
								<span>{{ realisation.client }}</span>
								<h3 v-html="realisation.titre"></h3>
								<NuxtLink :to="`/realisations/${realisation.lien}`"
									class="btn">Voir plus</NuxtLink>
							</div>
							<img :src="realisation.image"
								alt=""
								class="img-fluid">
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
	</ContenuAltLayout>
</template>
<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import axios from 'axios';
import Swiper from 'swiper/bundle';
import ContenuAltLayout from '@/layouts/contenuAlt.vue';
import 'swiper/css/bundle';
const swiperContainerAlt = ref(null);
let swiperInstanceAlt;
const realisations = ref([]);
onBeforeMount(async () => {

});
onMounted(async () => {
	const response = await axios.get('/api/clients.json');
	realisations.value = response.data;
	swiperInstanceAlt = new Swiper(swiperContainerAlt.value, {
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		keyboard: true,
		//observer: true,
		//observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
})

</script>
<style lang="scss" scoped>
.realisationwrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.cartouche {
		position: absolute;
		padding: 1em;
	}

	span {
		font-family: "New Order", sans-serif;
		font-size: 50px;
		line-height: 52px;
		font-weight: 700;
		color: white;
		text-transform: uppercase;
	}

	h3 {
		font-family: "New Order", sans-serif;
		font-size: 112px;
		line-height: 110px;
		font-weight: 700;
		color: white;
		text-transform: uppercase;
	}

	a {
		width: 200px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "New Order", sans-serif;
		text-transform: uppercase;
		text-decoration: none;
		color: white;
		font-weight: 600;
		border: 2px solid white;
		border-radius: 20px;
	}
}

.realisationwrapper {
	display: flex;
	align-items: center;
	justify-content: center;
}

ul,
li {
	list-style: none;
	margin: 0;
	padding: 0;
}

.swiper {
	width: 100%;
	height: 100vh;
}

.swiper-horizontal {
	height: auto;
}

.swiper-slide {
	/* Styles pour les slides */
	width: 100%;
	height: 100vh;
}
</style>