<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import ContenuAltLayout from "@/layouts/contenuAlt.vue";
import PageLoader from "@/components/PageLoader.vue";
const solutions = ref([]);
const menusolutions = ref([]);
const route = useRoute();
const scrollPosition = ref(0);
let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);

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
    menusolutions.value = response.data.map((solution) => ({
      id: solution.id,
      logo: solution.logo,
      lien: solution.lien,
    }));
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
      <Menu :page="'/solutions'" />
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
                <h3>Découvrez nos autres solutions</h3>
              </div>
              <div class="dflex austin">
                <div class="chyna" v-for="item in menusolutions" :key="item.id">
                  <a
                    v-if="item.lien !== matchingSolution.lien"
                    :href="`/solutions/${item.lien}`"
                  >
                    <i
                      :style="{ backgroundImage: 'url(/' + item.logo + ')' }"
                      alt="logo"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContenuAltLayout>
</template>

<style lang="scss" scoped>
#header-alt {
  position: relative !important;
}
</style>
