<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import SolutionsLayout from "@/layouts/SolutionsLayout.vue";
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
      lien: solution.lien,
    }));
    state.isLoading = false;
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
        <Menu :page="'/solutions'" />
      </div>
      <div
        id="main"
        class="main"
        :class="{ full: isMainFull, open: isSidebarOpen }"
      >
        <ul class="row">
          <li
            class="col"
            :style="{ backgroundImage: 'url(' + solution.homepageVisuel + ')' }"
            v-for="solution in solutions"
            :key="solution.id"
          >
            <NuxtLink :to="`/solutions/${solution.lien}`">
              <i
                :style="{ backgroundImage: 'url(' + solution.logo + ')' }"
                alt="logo"
              ></i
            ></NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </SolutionsLayout>
</template>

<style lang="scss" scoped></style>
