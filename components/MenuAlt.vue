<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';
const state = reactive({
	menus: [],
});
onMounted(async () => {
	try {
		const menuLinks = await axios.get('/api/menu.json');
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
<style lang="scss" scoped>
/* Add your styles here */
#menulinks {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;

	li {
		margin: 0 0.5em;
		padding: 0.5em;

		a {
			font-family: "New Order";
			font-weight: 700;
			color: white;
		}
	}
}
</style>