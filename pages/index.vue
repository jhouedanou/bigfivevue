
<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const state = reactive({
	socialLinks: [],
	logoAltText: '',
	sidebarText: '',
	logo: '',
	sloganbigfive: '',
	metadesc: ''
});


async function mounted() {
	try {
		const socialResponse = await axios.get('/assets/json/social.json');
		const textesResponse = await axios.get('/assets/json/textesHomepage.json');
		const graphiques = await axios.get('/assets/json/graphiques.json');
		const textesGlobal = await axios.get('/assets/json/global.json');
		state.socialLinks = socialResponse.data;
		state.logoAltText = textesResponse.data.logoAltText;
		state.sidebarText = textesResponse.data.sidebarText;
		state.logo = graphiques.data.logo;
		state.sloganbigfive = textesGlobal.data.sloganbigfive;


	} catch (error) {
		console.error(error);
	}
}
mounted();
//function to get the path of the images
function getIconPath(iconPath) {
	return `/${iconPath}`;
}



</script>
<template>
	<div id="homewrapper"
		class="container-fluid d-flex align-items-center flex-column justify-content-center vh-100 w-100">
		<div id="ontwo"
			class="row w-100">
			<div id="main"
				class="col-12 d-flex flex-column justify-content-center align-items-center">
				<div class="container d-flex align-items-center flex-row justify-content-center">
					<nuxt-link to="/agence"
						class="d-flex flex-column align-items-center justify-content-center">
						<img :src="getIconPath(state.logo)"
							:alt="state.logoAltText" />
						{{ state.sloganbigfive }}
					</nuxt-link>
				</div>
				<div id="menu">
					<ul id="lesros"
						class="d-flex flex-row justify-content-end">
						<li v-for="link in state.socialLinks"
							:key="link.platform">
							<a :href="link.url"
								target="_blank">
								<img :src="getIconPath(link.icon)"
									:alt="link.platform" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
/* Add your styles here */
</style>
