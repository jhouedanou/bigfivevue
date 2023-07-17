<template>
	<ContenuLayout>
		<div id="contactpage">
			<div id="contacts"
				class="container">
				<div class="row">
					<div class="vanhouan col-3"
						v-for="texte in state.textespageContacts"
						:key="state.textespageContacts.id">
						<h2>{{ texte.titre }}</h2>
						<h4>{{ texte.adresse }}</h4>
					</div>
				</div>
				<div id="untel">
					<h3>Nous vous remercions d'avoir envoyé ce message et vous recontacterons le plus vite possile</h3>
				</div>

			</div>


			<div id="footer">
				©BIGFIVE SOLUTIONS ALL RIGHTS RESERVED - COOKIES POLICY
			</div>
		</div>
	</ContenuLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import ContenuLayout from '@/layouts/ContactLayout.vue';

const state = reactive({
	textespageContact: null,
	formFields: null
})
const route = useRoute()

onMounted(async () => {
	const response = await axios.get('/api/contact.json');
	state.textespageContacts = response.data.contactData;
	state.formFields = response.data.formFields;
	console.log(state.textespageContacts);
})
</script>

<style scoped></style>
