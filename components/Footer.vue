<template>
	<div id="footercontactfrom">
		<div id="contactsz"
			class="container">
			<div class="row">
				<h2 class="vanhouan">{{ state?.labels?.rencontronsnous }}</h2>
			</div>
			<div id="untel">
				<form action="https://public.herotofu.com/v1/1c419dc0-1cd8-11ee-b0a7-9f000c4c1540"
					method="post"
					accept-charset="UTF-8">
					<div id="shefg"
						class="row">

						<div class="col-md-6 col-sm-12">
							<input name="email"
								ref="email"
								id="email"
								type="text"
								:placeholder="state?.labels?.mail"
								required />
						</div>
						<div class="col-md-6 col-sm-12">
							<input name="societe"
								ref="societe"
								id="societe"
								type="text"
								:placeholder="state?.labels?.societe"
								required />
						</div>
						<div class="col-md-12 col-sm-12">
							<textarea name="message"
								id="message"
								type="message"
								placeholder="Message"
								required></textarea>
						</div>
					</div>
					<div>
						<input id="occident"
							type="submit"
							:value="state?.labels?.envoyer" />
						<div style="text-indent:-99999px; white-space:nowrap; overflow:hiddendsqd; position:absolute;"
							aria-hidden="true">
							<input type="text"
								name="_gotcha"
								tabindex="-1"
								autocomplete="off" />
						</div>
					</div>
				</form>
			</div>

		</div>
	</div>
	<div id="footer-footer"
		class="container-fluid fixed">
		<div class="row">
			<div id="meregbarai"
				class="col-md-6 col-sm-6">
				<Logo :id="3" />
			</div>
			<div id="pitchou"
				class="col-md-6 col-sm-6 d-flex">
				<Menu />
				<SocialLinksAlt></SocialLinksAlt>
			</div>
		</div>
	</div>
</template>
<script setup>
import { onMounted } from 'vue'
import axios from 'axios';

const state = reactive({
	textespageContact: null,
	formFields: null,
	labels: null,
})
const route = useRoute()

onMounted(async () => {
	const response = await axios.get('/api/contact.json');
	state.labels = response.data;
	state.textespageContacts = response.data.contactData;
	state.formFields = response.data.formFields;
})
</script>
<style></style>