<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';
const state = reactive({
	menus: [],
});
const getIconPath = (iconPath) => {
	return `/${iconPath}`;
};
onMounted(async () => {
	try {
		const menuLinks = await axios.get('/assets/json/menu.json');
		state.menuLinks = menuLinks.data;
	} catch (error) {
		console.log(error);
	}
});
</script>
<template>
	<div class="menucontainer">
		<ul id="menulinks">
			<li v-for="link in state.menuLinks"
				:key="link.id">
				<nuxt-link :to="link.url">{{ link.nom }}</nuxt-link>
			</li>
		</ul>
	</div>
</template>