<script setup>
import { onMounted, watchEffect, reactive } from 'vue';
import axios from 'axios';
import SocialLinks from '@/components/SocialLinks.vue';
const state = reactive({
	logoAltText: '',
	sidebarText: '',
	logo: '',
	sloganbigfive: '',
	metadesc: ''
});

onMounted(async () => {
	try {
		const textesResponse = await axios.get('/api/textesHomepage.json');
		const graphiques = await axios.get('/api/graphiques.json');
		const textesGlobal = await axios.get('/api/global.json');
		state.logoAltText = textesResponse.data.logoAltText;
		state.sidebarText = textesResponse.data.sidebarText;
		state.logo = graphiques.data.logo;
		state.sloganbigfive = textesGlobal.data.sloganbigfive;
		state.metadesc = textesGlobal.data.hompage.metadesc;
		state.homepageTitle = textesGlobal.data.hompage.title;

	} catch (error) {
		console.error(error);
	}
	//trigger a click on nuxt-link after 5000ms
	setTimeout(() => {
		document.querySelector('#ontwo video').click();
	}, 5000);
	//autoplay the video
	const video = document.querySelector('#ontwo video');
	video.addEventListener('click', function () {
		video.play();
	});
});
watchEffect(() => {


	useHead({
		title: state.homepageTitle, // Use new variable
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: state.metadesc
			},
			// Open Graph Tags
			{
				property: 'og:title',
				content: state.homepageTitle,
			},
			{
				property: 'og:description',
				content: state.metadesc,
			},
		],
	});
});
</script>
<template>
	<div id="homewrapper"
		class="container-fluid d-flex align-items-center flex-column justify-content-center vh-100 w-100">
		<div id="ontwo"
			class="row w-100">
			<div id="main"
				class="col-12 d-flex flex-column justify-content-center align-items-center">
				<nuxt-link to="/agence">
					<video id="nassir"
						autoplay
						playsInline
						autoPlay
						muted
						loop
						playsinline
						class="img-fluid"
						controlsList="nodownload"
						preload="auto">
						<source src="/video/01.mp4"
							type="video/mp4">
						Your browser does not support the video tag.
					</video>
				</nuxt-link>
				<SocialLinks />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
