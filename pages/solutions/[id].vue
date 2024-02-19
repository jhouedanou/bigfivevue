<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import PageLoader from "@/components/PageLoader.vue";
let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
const solutions = ref([]);
const state = reactive({
  isLoading: true,
});
onMounted(async () => {
  try {
    state.isLoading = true;
    //recupere la liste des solutions
    const listeDesSolutions = await axios.get("api/solutions.json");
    const data = listeDesSolutions.data;
    solutions.value = data.map((solution) => ({
      id: solution.id,
      homepageVisuel: solution.homepageVisuel,
      nomsolution: solution.nomsolution,
      logo: solution.logo,
      slug: solution.slug,
    }));
    state.isLoading = false;
  } catch (error) {
    console.log("Pas de solutions Big Five à afficher");
  }
});
</script>
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
      :id="`banner`"
      :class="{ fixed: scrollPosition > 200, visible: scrollPosition > 200 }"
    >
      <img :src="matchingRealisation.banniere" alt="Image" class="img-fluid" />
    </div>
    <div id="singlesolutionwrapper"></div>
  </ContenuAltLayout>
</template>
