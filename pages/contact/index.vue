<template>
  <ContenuLayout>
    <div id="contactpage">
      <PageLoader v-if="state.isLoading" />
      <div id="menumobile">
        <Logo :id="3"
          v-if="!isSidebarOpen" />
        <button id="menutrigger"
          @click="isSidebarOpen = !isSidebarOpen; isMainFull = !isMainFull; toClose = !toClose"
          :class="{ dana: closeBlack }">
          <span v-if="!toClose"
            class="material-symbols-rounded">menu</span>
          <span v-if="toClose"
            class="dana material-symbols-rounded">close</span>
        </button>
      </div>
      <div id="sidebar"
        class="sidebar rakim"
        :class="{ flipit: state.isSlide1Active, open: isSidebarOpen }">
        <Logo :id="2" />
        <Menu :page="'/agence'" />
      </div>
      <div id="contacts"
        class="container">
        <div class="row">
          <div class="vanhouan col-md-3 col-sm-12"
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
              <input name="email"
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


      <div id="footer"
        class="kylie">
        ©BIGFIVE SOLUTIONS ALL RIGHTS RESERVED - COOKIES POLICY
      </div>
    </div>
  </ContenuLayout>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios';
import ContenuLayout from '@/layouts/ContactLayout.vue';

let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
const state = reactive({
  textespageContact: null,
  formFields: null,
  isLoading: true

})
const route = useRoute()

onMounted(async () => {
  try {

    const response = await axios.get('/api/contact.json');
    state.textespageContacts = response.data.contactData;
    state.formFields = response.data.formFields;
    state.isLoading = false;
  } catch (error) {

    state.isLoading = false;

  }
})
</script>

<style scoped></style>
