<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import ContenuLayout from "@/layouts/ContactLayout.vue";
import PageLoader from "@/components/PageLoader.vue";

let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
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
    state.isLoading = false;
  } catch (error) {
    state.isLoading = false;
  }
});
</script>
<template>
  <ContenuLayout>
    <div id="contactpage">
      <PageLoader v-if="state.isLoading" />
      <div id="menumobile">
        <Logo :id="3" v-if="!isSidebarOpen" class="desktop" />
        <Logo :id="2" v-if="!isSidebarOpen" class="mobile" />
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
          <img
            loading="lazy"
            v-if="!toClose"
            src="/img/btn-menu.png"
            alt=""
            class="desktop"
          />
          <img
            loading="lazy"
            v-if="!toClose"
            src="/img/btn-menu-mobile.svg"
            alt=""
            class="mobile"
          />
        </button>
      </div>
      <div
        id="sidebar"
        class="sidebar rakim"
        :class="{ flipit: state.isSlide1Active, open: isSidebarOpen }"
      >
        <Logo :id="2" />
        <Menu :page="'/contact'" />
        <Menumobile />
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
          <form
            action="https://public.herotofu.com/v1/1c419dc0-1cd8-11ee-b0a7-9f000c4c1540"
            method="post"
            accept-charset="UTF-8"
          >
            <div>
              <input
                name="email"
                id="email"
                type="text"
                placeholder="E-mail"
                required
              />
            </div>
            <div class="form-group">
              <label class="placeholder-text" v-if="!inputValue">Message</label>
              <textarea
                name="message"
                id="message"
                type="message"
                v-model="inputValue"
                @input="handleInput"
                required
              ></textarea>
            </div>
            <div>
              <input type="submit" value="Envoyer un message" />
              <div
                style="
                  text-indent: -99999px;
                  white-space: nowrap;
                  overflow: hiddendsqd;
                  position: absolute;
                "
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="_gotcha"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div id="footer" class="kylie">
        ©BIGFIVE SOLUTIONS ALL RIGHTS RESERVED - COOKIES POLICY
      </div>
    </div>
  </ContenuLayout>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleInput() {
      // Handle input value changes here
      console.log("input");
    },
  },
};
</script>

<style scoped></style>
