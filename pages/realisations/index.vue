
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const realisations = ref([])

onMounted(async () => {
	const response = await axios.get('/api/clients.json');
	realisations.value = response.data;
})

</script>

<template>
	<div>
		<h1>Realisations</h1>
		<ul>
			<li v-for="realisation in realisations"
				:key="realisation.lien">
				<div class="realisationwrapper">
					<div class="cartouche">

						<span>{{ realisation.client }}</span>
						<h3 v-html="realisation.titre"></h3>
						<NuxtLink :to="`/realisations/${realisation.lien}`"
							class="btn">Voir plus</NuxtLink>
					</div>
					<img :src="realisation.image"
						alt=""
						class="img-fluid">
				</div>

			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.realisationwrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.cartouche {
		position: absolute;
		padding: 1em;


	}

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

ul,
li {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>