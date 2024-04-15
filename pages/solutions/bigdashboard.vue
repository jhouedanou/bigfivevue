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
const windowWidth = ref(0);
let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
const filterValue = route.fullPath.substring("/solutions/".length);
const scrollToElement = () => {
  const element = document.getElementById("btnDiscova");
  element.scrollIntoView({ behavior: "smooth" });
};
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
  document.body.id = filterValue;
  document.body.classList.add("solutions");
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", updateWindowWidth);
});
onMounted(async () => {
  try {
    state.isLoading = true;
    const response = await axios.get("/api/solutions.json", {
      timeout: 10000,
    });
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
      id="solutionBanner"
      :style="{
        backgroundImage:
          windowWidth > 1024
            ? 'url(/img/solutions/bigdashboard/banner.jpg)'
            : 'url(/img/solutions/bigdashboard/homeMobile.jpg)',
      }"
    >
      <div class="cartouchez">
        <i
          class="solutionlogo"
          :style="{ backgroundImage: `url(/img/solutions/bigdashboard.svg)` }"
        ></i>
        <h4>Mesurez la performance de<br />vos initiatives digitales</h4>
        <a id="btnDiscova" @click="scrollToElement">Découvrir</a>
      </div>
    </div>
    <div id="restedelapage">
      <div id="pargrapheIntros" v-if="matchingSolution">
        <div id="introforeal">
          <p>
            <strong>BIG DASHBOARD</strong> est une solution de social media
            analytics qui rassemble dans des<br />synthèses visuelles
            <span
              >l’ensemble des indicateurs de performance de toutes vos
              initiatives<br />digitales,</span
            >
            vous permettant ainsi d'en mesurer l'efficacité en un seul coup
            d’œil.
          </p>
          <p>
            Dans des enjeux d’Inbound Marketing, la mesure de chacune de vos
            communications digitales<br />est une étape fondamentale, celles-ci
            étant en concurrence avec les publications du monde entier.<br /><br />Analyser
            vos performances sur les réseaux sociaux peut s’avérer être un
            processus extrêmement <br />chronophage, fastidieux et délicat.
            <strong>BIG DASHBOARD</strong> automatise ces processus pour
            accorder plus de temps à l’analyse et à la prise de décision, et
            supprimer au maximum les risques<br />d’interventions manuelles dans
            le traitement des données.
          </p>
        </div>
        <div id="contenudelapage">
          <div id="sectionunbigdashboard" class="container">
            <div class="row">
              <div id="intro" class="col-md-12 obam">
                <h3>
                  Quelle que soit votre activité,<br /><span
                    >BIG DASHBOARD</span
                  >
                  est LA solution !
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="service-item">
                  <div class="service-icon">
                    <img
                      loading="lazy"
                      src="/img/solutions/bigdashboard/97725947_s.png"
                      alt="CRM Icon"
                    />
                  </div>
                  <p>MARQUES, ENSEIGNES,<br />RÉSEAU</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <div class="service-icon">
                    <img
                      loading="lazy"
                      src="/img/solutions/bigdashboard/oscar.png"
                      alt="CRM Icon"
                    />
                  </div>
                  <p>AGENCES DE<br />COMMUNICATION</p>
                </div>
              </div>
            </div>
          </div>
          <div id="sectiontwobigdashboard" class="container-fluid">
            <div class="row">
              <div id="pimptro" class="col-md-12 obam">
                <h3>
                  Avec <span>BIG DASHBOARD</span>, comprendre<br />et répondre
                  aux attentes de ses clients<br />devient un jeu d’enfant
                </h3>
                <img
                  loading="lazy"
                  class="img-fluid"
                  src="/img/solutions/bigdashboard/hitmap.jpg"
                />
              </div>
            </div>
          </div>
          <div id="sectionfourbigdashboard" class="container">
            <div class="row">
              <div class="col-md-12">
                <img
                  loading="lazy"
                  src="/img/solutions/bigdashboard/rapportdigital1.png"
                  alt
                /><img
                  loading="lazy"
                  class="desktop"
                  src="/img/solutions/bigdashboard/rapportDigital.svg"
                  alt
                /><img
                  loading="lazy"
                  class="mobile"
                  src="/img/solutions/bigdashboard/rapportdigital2.png"
                  alt
                />
              </div>
            </div>
          </div>
          <div id="sectionfivedashboard" class="container">
            <div class="row">
              <div class="col-md-12">
                <h3>
                  Nous vous accompagnons pour suivre,<br />analyser et mieux
                  comprendre les performances<br />de vos initiatives digitales
                </h3>
              </div>
              <div class="mass row">
                <div class="col-md-3">
                  <h4>
                    Les indicateurs de<br />performance de toutes<br />vos
                    initiatives digitales<br />sont rassemblés dans<br />des
                    synthèses visuelles.
                  </h4>
                  Réseaux sociaux, sites web<br />et campagnes d’e-mailing,<br />par
                  région, par segment de<br />produit, par période de<br />temps
                  ou encore par format<br />de publication.<br />
                </div>
                <div class="col-md-3">
                  <h4>Suivez vos lancements<br />de produits.</h4>
                  Mesurer l’engagement<br />et les réactions de votre audience,
                  c’est la promesse<br />de contenus à venir<br />plus
                  pertinents.<br />
                </div>
                <div class="col-md-3">
                  <h4>
                    Bénéficiez de l’analyse<br />de synthèse personnalisée<br />
                  </h4>
                  des experts de BIG FIVE Solutions sur chaque tableau<br />de
                  bord et concentrez-vous<br />sur les indicateurs
                  essentiels.<br />
                </div>
                <div class="col-md-3">
                  <h4>Mesurez la qualité<br />des contenus publiés</h4>
                  <br />pour pouvoir en affiner la pertinence et challenger<br />les
                  performances de vos partenaires, agences<br />digitales et/ou
                  marketing,<br />sur les campagnes menées.<br />
                </div>
              </div>
            </div>
          </div>
        </div>
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
