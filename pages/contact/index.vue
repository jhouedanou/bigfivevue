<template>
  <div>
    <div id="contacts"
      class="container">
      <div class="row">
        <div class="col-3"
          v-for="texte in state.textespageContacts"
          :key="state.textespageContacts.id">
          <h2>{{ texte.titre }}</h2>
          <h4>{{ texte.adresse }}</h4>
        </div>
      </div>
    </div>
    <form action="https://public.herotofu.com/v1/1c419dc0-1cd8-11ee-b0a7-9f000c4c1540"
      method="post"
      accept-charset="UTF-8">
      <div>
        <label for="name">Your Name</label>
        <input name="Name"
          id="name"
          type="text"
          required />
      </div>
      <div>
        <label for="email">Your Email</label>
        <input name="Email"
          id="email"
          type="email"
          required />
      </div>
      <div>
        <input type="submit"
          value="Envoyer un message" />
        <div style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;"
          aria-hidden="true">
          <input type="text"
            name="_gotcha"
            tabindex="-1"
            autocomplete="off" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

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
