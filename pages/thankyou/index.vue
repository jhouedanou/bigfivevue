<template>
  <ContenuLayout>
    <div id="contactpage">
      <PageLoader v-if="state.isLoading" />
      <div id="menumobile">
        <Logo :id="3" v-if="!isSidebarOpen" />
        <button
          id="menutrigger"
          @click="
            isSidebarOpen = !isSidebarOpen;
            isMainFull = !isMainFull;
            toClose = !toClose;
          "
          :class="{ dana: closeBlack }"
        >
          <img loading="lazy" v-if="toClose" src="/img/btn-close.png" alt="" />
          <img loading="lazy" v-if="!toClose" src="/img/btn-menu.png" alt="" />
        </button>
      </div>
      <div
        id="sidebar"
        class="sidebar rakim"
        :class="{ flipit: state.isSlide1Active, open: isSidebarOpen }"
      >
        <Logo :id="2" />
        <Menu :page="'/agence'" />
      </div>
      <div id="contacts" class="container">
        <div class="row">
          <div
            class="vanhouan col-md-3 col-sm-12"
            v-for="texte in state.textespageContacts"
            :key="state.textespageContacts.id"
          >
            <h2>{{ texte.titre }}</h2>
            <h4>{{ texte.adresse }}</h4>
          </div>
        </div>
        <div id="untel">
          <h3>
            Nous vous remercions d'avoir envoyé ce message et vous
            recontacterons le plus vite possible
          </h3>
        </div>
      </div>

      <div id="footer">
        ©BIGFIVE SOLUTIONS ALL RIGHTS RESERVED - COOKIES POLICY
      </div>
    </div>
  </ContenuLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ContenuLayout from "@/layouts/ContactLayout.vue";

const state = reactive({
  textespageContact: null,
  formFields: null,
  isLoading: true,
});
const route = useRoute();
onMounted(async () => {
  try {
    const response = await axios.get("/api/contact.json");
    state.textespageContacts = response.data.contactData;
    state.formFields = response.data.formFields;
    console.log(state.textespageContacts);
    state.isLoading = false;
  } catch (error) {
    state.isLoading = false;
  }
});
</script>

<style scoped></style>
