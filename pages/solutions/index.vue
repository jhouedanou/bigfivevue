<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import SolutionsLayout from "@/layouts/SolutionsLayout.vue";
import PageLoader from "@/components/PageLoader.vue";
let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
const windowWidth = ref(0);
const solutions = ref([]);
const state = reactive({
  isLoading: true,
});
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", updateWindowWidth);
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
      banniere: solution.banniere,
      logo: solution.logo,
      lien: solution.lien,
    }));
    state.isLoading = false;
    // Déterminer la largeur de la fenêtre après que solutions.value a été rempli
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", updateWindowWidth);
    if (windowWidth.value > 1024) {
    } else {
    }
  } catch (error) {
    console.log("Pas de solutions Big Five à afficher");
  }
});
</script>

<template>
  <SolutionsLayout>
    <div id="listedessolutions">
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
        <Menu :page="'/solutions'" />
        <Menumobile />
      </div>
      <div
        id="main"
        class="main indexsolutions"
        :class="{ full: isMainFull, open: isSidebarOpen }"
      >
        <ul id="solutionslist" class="row">
          <li
            class="col"
            :style="{
              backgroundImage:
                windowWidth > 1024
                  ? 'url(/' + solution.homepageVisuel + ')'
                  : 'url(/' + solution.banniere + ')',
            }"
            v-for="solution in solutions"
            :key="solution.id"
          >
            <a :href="`/solutions/${solution.lien}`">
              <i
                :style="{ backgroundImage: 'url(' + solution.logo + ')' }"
                alt="logo"
              ></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </SolutionsLayout>
</template>

<style lang="scss" scoped></style>
