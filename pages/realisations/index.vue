<template>
	<ContenuAltLayout>
		<div id="realisationList">
			<div class="slides">
				<section :id="`slide-${realisation.id}`"
					v-for="realisation in realisations"
					:key="realisation.lien"
					class="section"
					:style="{ backgroundImage: `url(${realisation.image})` }">

					<div class="cartouche">
						<span>{{ realisation.client }}</span>
						<h3 v-html="realisation.titre"></h3>
						<NuxtLink :to="`/realisations/${realisation.lien}`"
							class="btn">Voir plus</NuxtLink>
					</div>
					<!-- <nuxt-img fit="contain"
						format="webp"
						quality="80"
						class="img-fluid"
						:src="realisation.image"
						loading="lazy" /> -->

				</section>
			</div>
		</div>
	</ContenuAltLayout>
</template>
<script setup>


import { ref, onMounted } from 'vue';
import axios from 'axios';
import ContenuAltLayout from '@/layouts/contenuAlt.vue';
const realisations = ref([]);

onMounted(async () => {
	console.log('Before fetching data');
	const response = await axios.get('/api/clients.json');
	realisations.value = response.data;
	console.log('Data fetched:', realisations.value);


});


</script>
<style lang="scss" scoped>
.realisationwrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100vw;




}

.cartouche {
	position: absolute;
	padding: 1em;
	min-width: 80vw;

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

.section {

	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
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

body,
html {
	height: 100%;
}

body.slider__body {
	margin: 0;
	padding: 0;
	overflow: hidden;
}

.slider__container {
	position: fixed;
	display: block;
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	-webkit-transition: -webkit-transform 500ms ease-in-out;
	transition: -webkit-transform 500ms ease-in-out;
	-o-transition: transform 500ms ease-in-out;
	transition: transform 500ms ease-in-out;
}

.slider__page {
	position: relative;
	width: 100%;
	height: 100%;
}

.slider__indicators {
	position: fixed;
	left: 18px;
	top: 50%;
	z-index: 2;
	margin: 0;
	padding: 0;
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
}

.slider__indicator {
	display: block;
	width: 10px;
	height: 10px;
	margin: 10px 0;
	border-radius: 100px;
	background-color: #fff;
	cursor: default;
}

.slider__indicator--active {
	opacity: 0.3;
}
</style>