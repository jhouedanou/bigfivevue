
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import ContenuAltLayout from '@/layouts/contenuAlt.vue';

const realisations = ref([]);
const route = useRoute();
const grid = ref(null);

onMounted(async () => {
	try {
		if (process.client && typeof window !== 'undefined') {
			const response = await axios.get('/api/clients.json');
			realisations.value = response.data;
			const Masonry = await import('masonry-layout');
			const imagesLoaded = await import('imagesloaded');

			const masonry = new Masonry.default(grid.value, {
				itemSelector: '.element',
				layoutMode: 'packery',/* ,
				columnWidth: '.grid-sizer', percentPosition: true
				 */
			});
			imagesLoaded.default(grid.value).on('progress', () => {
				masonry.layout();
			});
		}
	} catch (error) {
		console.error(error);
	}
});

const matchingRealisation = computed(() => {
	const filterValue = route.fullPath.substring('/realisations/'.length);
	const index = realisations.value.findIndex(
		(realisation) => realisation.lien === filterValue
	);
	const previousRealisation = realisations.value[index - 1];
	const nextRealisation = realisations.value[index + 1];
	return {
		...realisations.value[index],
		previousLink: previousRealisation ? previousRealisation.lien : null,
		nextLink: nextRealisation ? nextRealisation.lien : null
	};
});

</script>
<template>
	<ContenuAltLayout>
		<div :id="`div-${matchingRealisation.lien}`"
			v-if="matchingRealisation">
			<div id="banner">
				<nuxt-img alt="Image"
					class="img-fluid"
					fit="contain"
					format="webp"
					quality="80"
					:src="matchingRealisation.banniere"
					loading="lazy" />
			</div>
			<div id="pargrapheIntro"
				v-if="matchingRealisation"
				:key="matchingRealisation.lien">
				<div v-html="matchingRealisation.description"></div>
				<div id="gridcontainer">
					<div id="galerie"
						class="grid-wrapper"
						ref="grid">
						<nuxt-img v-for="(image, index) in matchingRealisation?.galerie"
							fit="cover"
							format="webp"
							quality="80"
							loading="lazy"
							:key="index"
							:id="'div-' + index + '-' + matchingRealisation.lien"
							:src="image"
							alt="Image"
							class="element grid-item mb-4 p-0 m-0" />

					</div>
				</div>
			</div>
		</div>
		<div id="projectnavgation">
			<ul>
				<li>
					<nuxt-link v-if="matchingRealisation.previousLink"
						:to="'/realisations/' + matchingRealisation.previousLink">
						projet précédent
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/realisations">
						<img src="/img/PATCWORK.svg"
							alt="" />
					</nuxt-link>
				</li>
				<li>
					<nuxt-link v-if="matchingRealisation.nextLink"
						:to="'/realisations/' + matchingRealisation.nextLink">
						projet suivant
					</nuxt-link>
				</li>
			</ul>
		</div>
	</ContenuAltLayout>
</template>



<style lang="scss" scoped>
.button {
	background-color: #4caf50;
	border: none;
	color: white;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	border-radius: 8px;
}

#galerie {

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	background: red;
	max-width: 80vw;
	margin: 0 auto;

}

#div-solibra {
	#galerie {
		img {
			width: 50%;
		}
	}
}


#div-candia {
	#galerie {
		img {
			&:nth-of-type(1) {
				width: auto;
				height: 452px
			}

			&:nth-of-type(2) {
				width: auto;
				height: 452px
			}

			&:nth-of-type(3) {}

			&:nth-of-type(4) {}

			&:nth-of-type(5) {}

			&:nth-of-type(6) {}

			&:nth-of-type(7) {}

			&:nth-of-type(8) {}

			&:nth-of-type(9) {}

			&:nth-of-type(10) {}

			&:nth-of-type(11) {}

			&:nth-of-type(12) {}

			&:nth-of-type(13) {}

			&:nth-of-type(14) {}

			&:nth-of-type(15) {}

			&:nth-of-type(16) {}

			&:nth-of-type(17) {}

			&:nth-of-type(18) {}
		}
	}
}
</style>