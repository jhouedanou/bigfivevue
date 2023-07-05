<template>
	<div>
		<div v-for="realisation in realisations"
			:key="realisation.id">
			<h2>{{ realisation.client }}</h2>
			<p>{{ realisation.accroche }}</p>
			<img :src="realisation.imgalaune"
				alt="">
			<p>{{ realisation.texte }}</p>
			<div v-for="image in realisation.galerie"
				:key="image">
				<img :src="image"
					alt="">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const realisations = await $content('realisations').fetch();
		return { realisations };
	},
	props: {
		realisations: {
			type: Array,
			required: true,
		},
	},
};
</script>