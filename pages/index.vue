<template>
	<div>
		<div class="container d-flex align-items-center flex-row justify-content-center vh-80">
			<nuxt-link to="/agence">
				<img src="~/assets/img/logo.svg"
					alt="logo" />
			</nuxt-link>
		</div>
		<div id="menu">
			<ul>
				<li v-for="link in socialLinks"
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
</template>

<script>
import axios from 'axios';

export default {
	name: 'HomePage',
	data() {
		return {
			socialLinks: [],
		};
	},
	async mounted() {
		try {
			const response = await axios.get('/assets/json/social.json');
			this.socialLinks = response.data;
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		getIconPath(iconPath) {
			return `/${iconPath}`;
		}
	}

};

</script>

<style scoped>
/* Add your styles here */
</style>
