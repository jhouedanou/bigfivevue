<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const state = reactive({
	socialLinks: [],
});

const getIconPath = (iconPath) => {
	return `/${iconPath}`;
};

onMounted(async () => {
	try {
		const socialResponse = await axios.get('/assets/json/social.json');
		state.socialLinks = socialResponse.data;
	} catch (error) {
		console.error(error);
	}
});
</script>


<template>
	<div id="menureso">
		<ul id="lesros"
			class="d-flex flex-row justify-content-end">
			<li v-for="link in state.socialLinks"
				:key="link.id">
				<a :href="link.url"
					target="_blank">
					<img :src="getIconPath(link.icon)"
						:alt="link.platform" />
				</a>
			</li>
		</ul>
	</div>
</template>


<style scoped>
/* Add your styles here */
</style>
