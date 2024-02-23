<template>
  <ContenuAltLayout>
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
        <img v-if="toClose" src="/img/btn-close.svg" alt="" />
        <img v-if="!toClose" src="/img/btn-menu.svg" alt="" />
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
    <div
      id="solutionBanner"
      :style="{ backgroundImage: 'url(' + matchingSolution.banniere + ')' }"
    >
      <div class="cartouchez">
        <i
          class="solutionlogo"
          :style="{ backgroundImage: `url(/${matchingSolution.logo})` }"
        ></i>
        <h4 v-html="matchingSolution.slogan"></h4>
        <a id="btnDiscova" @click="scrollToElement">Découvrir</a>
      </div>
    </div>
    <div id="restedelapage">
      <div id="pargrapheIntros" v-if="matchingSolution">
        <div id="introforeal" v-html="matchingSolution.introduction"></div>
        <div id="contenudelapage" v-html="matchingSolution.contenu"></div>
        <div id="nosautresolutons">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2>Découvrez nos autres solutions</h2>
              </div>
              <p>Inserez le menu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContenuAltLayout>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import ContenuAltLayout from "@/layouts/contenuAlt.vue";
import PageLoader from "@/components/PageLoader.vue";

const solutions = ref([]);
const route = useRoute();
const scrollPosition = ref(0);

let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
//ajouter un code pour ajouter une classe shadowy sur #headeramt lorsque le scroll est à 100px

const scrollToElement = () => {
  const element = document.getElementById("restedelapage");
  element.scrollIntoView({ behavior: "smooth" });
};
const state = reactive({
  isLoading: true,
});
const onScroll = () => {
  scrollPosition.value = window.scrollY;
};
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onMounted(async () => {
  try {
    state.isLoading = true;
    const response = await axios.get("/api/solutions.json");
    solutions.value = response.data;
    state.isLoading = false;
  } catch (error) {
    console.error(error);
    state.isLoading = false;
  }
});
const matchingSolution = computed(() => {
  const filterValue = route.fullPath.substring("/solutions/".length);
  const index = solutions.value.findIndex(
    (solution) => solution.lien === filterValue
  );
  return {
    ...solutions.value[index],
  };
});
</script>

<style lang="scss" scoped></style>
