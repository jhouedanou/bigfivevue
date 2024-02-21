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
    <div id="solutionBanner">
      <img :src="matchingSolution.banniere" alt="Image" class="img-fluid" />
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

<style lang="scss" scoped>
.shadowy {
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
}
#solutionBanner {
  position: relative;
  .img-fluid {
    width: 100%;
  }
  #btnDiscova {
    margin: auto;
    border: 3px solid white;
    color: white;
    top: 588px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 200px;
    height: 40px;
    font-size: 19px;
    text-decoration: none;
    border-radius: 75px;
    text-transform: uppercase;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    line-height: 0;
    &:hover {
      background-color: white;
      color: black;
    }
  }
}
.cartouchez {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  top: 0;
  padding: 1rem;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .solutionlogo {
    width: 235px;
    height: 235px;
    border-radius: 50%;
    display: block;
  }
  h4 {
    white-space: wrap;
    font-weight: bold;
    letter-spacing: 4px;
    padding: 0 0 0 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -87px;
    top: 280px;
    margin: auto;
    height: 29px;
    font-size: 30px;
  }
}
#restedelapage {
  padding: 0;
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
}
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

#galerie {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80vw;
  margin: 0 auto;
}
.img-fluid,
.img-thumbnail {
  width: 100%;
}
/* Remove the invalid nested styles here */
</style>
