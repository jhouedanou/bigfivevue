<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const state = reactive({
	socialLinks: [],
});


onMounted(async () => {
	try {
		const socialResponse = await axios.get('/api/social.json');
		state.socialLinks = socialResponse.data;
	} catch (error) {
		console.error(error);
	}
});


</script>


<template>
	<div id="menureso">
		<ul id="lesrosz"
			class="d-flex flex-row justify-content-end">
			<li><a href="https://selectivecity.co.za/selective-live/"
					target="_blank">
					<img src="/img/selectivelive.svg"
						alt="">
				</a></li>
			<li v-for="link in state.socialLinks"
				:key="link.id">
				<a :href="link.url"
					target="_blank">
					<img :src="link.iconAlt"
						:alt="link.platform" />
				</a>
			</li>
		</ul>
	</div>
</template>


<style lang="scss" scoped></style>
