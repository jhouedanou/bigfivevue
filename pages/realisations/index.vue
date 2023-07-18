<template>
	<ContenuAltLayout>
		<div id="realisationList">
			<div id="fullpage">
				<div :id="`slide-${realisation.id}`"
					v-for="realisation in realisations"
					:key="realisation.lien"
					class="section">
					<div class="realisationwrapper">
						<div class="cartouche">
							<span>{{ realisation.client }}</span>
							<h3 v-html="realisation.titre"></h3>
							<NuxtLink :to="`/realisations/${realisation.lien}`"
								class="btn">Voir plus</NuxtLink>
						</div>
						<nuxt-img fit="contain"
							format="webp"
							quality="80"
							class="img-fluid"
							:src="realisation.image"
							loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	</ContenuAltLayout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import Swiper from 'swiper/bundle';
import ContenuAltLayout from '@/layouts/contenuAlt.vue';
import 'swiper/css/bundle';
const swiperContainerAlt = ref(null);
let swiperInstanceAlt;
const realisations = ref([]);

onMounted(async () => {
	console.log('Before fetching data');
	const response = await axios.get('/api/clients.json');
	realisations.value = response.data;
	console.log('Data fetched:', realisations.value);

	new fullpage('#fullpage', {
		licenseKey: 'null',
		autoScrolling: true,
		navigation: true
	});

});
// Trigger a viewport resize event to fix the issue

onMounted(() => {
	const triggerViewportResize = () => {
		if (process.client) {
			const resizeEvent = new Event('resize');
			window.innerWidth = window.innerWidth - 10000;
			window.dispatchEvent(resizeEvent);
			console.log('cest gaté');
			setTimeout(() => {
				window.innerWidth = window.innerWidth + 10000;
				window.dispatchEvent(resizeEvent);
			}, 100);
		}
	};

	triggerViewportResize();
});


</script>
<style lang="scss" scoped>
.realisationwrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100vw;

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

	width: 100%;
	height: 100vh;
}

.swiper-slide {
	min-height: 100vh !important;
	height: 100% !important;
	background-size: cover;
	background-repeat: no-repeat;
	margin: 0;
	padding: 0;

	img {
		width: auto;
		height: 100vh;
	}

	.cartouche {
		width: 100vw !important;
		padding: 0em !important;
		max-width: 1480px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}

	.realisationwrapper {
		min-height: 100vh !important;
		height: 100% !important;
		margin: 0;
		padding: 0;
	}
}
</style>