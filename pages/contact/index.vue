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
          <form action="https://public.herotofu.com/v1/1c419dc0-1cd8-11ee-b0a7-9f000c4c1540"
            method="post"
            accept-charset="UTF-8">
            <div>
              <input email="email"
                id="email"
                type="text"
                placeholder="E-mail"
                required />
            </div>
            <div>
              <textarea name="message"
                id="message"
                type="message"
                placeholder="Message"
                required></textarea>
            </div>
            <div>
              <input type="submit"
                value="Envoyer un message" />
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
