<script setup>
import { reactive, onMounted, watchEffect } from 'vue';
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
				<!-- <Logo :id="1" /> -->
				<img src="img/01.gif"
					alt="logo animé de Big Five"
					class="img-fluid">
				<!-- <h1> {{ state.sloganbigfive }}
				</h1> -->
				<SocialLinks />
			</div>
		</div>
	</div>
</template>
<style scoped>
/* Add your styles here */
</style>
