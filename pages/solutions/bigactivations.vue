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
            ? 'url(/img/solutions/bigactivations/banner.jpg)'
            : 'url(/img/solutions/bigactivations/homeMobile.jpg)',
      }"
    >
      <div class="cartouchez">
        <i
          class="solutionlogo"
          :style="{ backgroundImage: `url(/img/solutions/bigactivations.svg)` }"
        ></i>
        <h4>Activations en ligne<br />Pour générer des fans</h4>
        <a id="btnDiscova" @click="scrollToElement">Découvrir</a>
      </div>
    </div>
    <div id="restedelapage">
      <div id="pargrapheIntros" v-if="matchingSolution">
        <div id="introforeal">
          <p>
            <strong>BIG ACTIVATIONS</strong> est la plate-forme des concours
            funs et viraux. Créez de<br />l’engagement et de la fidélisation sur
            les réseaux sociaux grâce à des concours de<br />photos, vidéos,
            quiz, tests de personnalité, tests de culture générale, etc.
          </p>
          <p>
            Indispensables dans votre stratégie webmarketing, les activations
            digitales sont<br />des outils polyvalents, ludiques et originaux
            qui permettent d’atteindre différents objectifs,<br />tels que la
            <span
              >promotion, l’engagement des clients, la génération de leads,<br />la
              formation et la communication.</span
            >
          </p>
        </div>
        <div id="contenudelapage">
          <div id="sectionunbigactivations" class="container">
            <div class="row">
              <div id="intro" class="col-md-12 obam">
                <h3>
                  Quelle que soit votre activité,<br /><span
                    >BIG ACTIVATIONS</span
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
                      src="/img/solutions/bigactivations/97725947_s.png"
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
                      src="/img/solutions/bigactivations/oscar.png"
                      alt="CRM Icon"
                    />
                  </div>
                  <p>AGENCES DE<br />COMMUNICATION</p>
                </div>
              </div>
            </div>
          </div>
          <div id="sectiontwobigactivations" class="container">
            <div class="row">
              <div id="pimptro" class="col-md-12 obam">
                <h3>
                  Avec <span>BIG ACTIVATIONS</span>, optez pour de
                  <br />puissants leviers marketing pour développer <br />votre
                  relation consommateurs.
                </h3>
              </div>
            </div>
          </div>
          <div id="sectionthreebigactivations" class="container">
            <div class="row">
              <div class="col-md-4">
                <h3>Pronostics</h3>
                <p>
                  Générez du trafic dans les points de<br />ventes et des
                  interactions en ligne,<br />stimulez l’engagement des<br />utilisateurs,
                  créez une communauté<br />autour d’un intérêt commun et<br />fidélisez
                  vos consommateurs
                </p>
              </div>
              <div class="col-md-4">
                <h3>Roue de la Fortune</h3>
                <p>
                  Engagez de façon ludique les internautes, générez des
                  prospects<br />qualifiés, promouvez vos produits ou services,
                  et faîtes du buzz sur<br />les réseaux sociaux
                </p>
              </div>
              <div class="col-md-4">
                <h3>Test personnalité</h3>
                <p>
                  Segmentez votre audience, personnalisez vos offres et générez
                  des leads<br />qualifiés
                </p>
              </div>
              <div class="col-md-4">
                <h3>Sondages</h3>
                <p>
                  Personnalisez vos offres, lancez de nouveaux produits ou
                  services,<br />analysez vos points faibles, reculiez des
                  données sur vos clients et<br />suivez leur satisfaction
                </p>
              </div>
              <div class="col-md-4">
                <h3>Photo contest</h3>
                <p>
                  Stimulez l’engagement des internautes en générant du contenu
                  utilisateur<br />authentique, augmentez la visibilité de votre
                  marque, favorisez la<br />créativité et l’innovation
                </p>
              </div>
              <div class="col-md-4">
                <h3>Video contest</h3>
                <p>
                  Stimulez l’engagement des internautes en générant du contenu
                  utilisateur<br />authentique, augmentez la visibilité de votre
                  marque, favorisez la<br />créativité et l’innovation
                </p>
              </div>
              <div class="col-md-4">
                <h3>Quizz</h3>
                <p>
                  Stimulez l’engagement de votre communauté en la divertissant,
                  générez du<br />trafic et des leads, recueillez des données et
                  des insights sur le<br />public cible
                </p>
              </div>
              <div class="col-md-4">
                <h3>Coupons promo</h3>
                <p>
                  Fidélisation grâce à la mise en place de tickets
                  promotionnels<br />permettant aux internautes d’obtenir des
                  réductions sur vos produits
                </p>
              </div>
              <div class="col-md-4">
                <h3>Carte à gratter</h3>
                <p>
                  Engagez de façon ludique les internautes, générez des
                  prospects<br />qualifiés, promouvez vos produits ou services,
                  et faîtes du buzz sur<br />les réseaux sociaux
                </p>
              </div>
              <div class="col-md-4">
                <h3>Challenges sur-mesure</h3>
                <p>
                  Engager les utilisateurs, créez<br />une communauté,
                  recueillez<br />des données et renforcez<br />votre marque.
                </p>
              </div>
            </div>
          </div>
          <div id="sectionfourbigactivations" class="container">
            <a href="/realisations/dinor" id="andre">
              <img loading="lazy" src="/img/solutions/case.jpg" alt />
              <h3>Découvrir<br />le case<br />study</h3>
            </a>
          </div>
          <div id="sectionfiveactivations" class="container">
            <div class="row">
              <div id="pimptro" class="col-md-12 obam">
                <h3>
                  Nous vous accompagnons pour<br />intégrer vos campagnes
                  d’activation<br />à votre stratégie marketing.
                </h3>
              </div>
              <div class="row kpassagnon">
                <div class="col-md-3">
                  <h3>Gardez le contact avec votre communauté digitale.</h3>
                  <p>
                    Entre deux campagnes publicitaires, fidélisez vos
                    fans/clients en les<br />surprenant et en les divertissant.
                  </p>
                </div>
                <div class="col-md-3">
                  <h3>Faîtes croître votre audience.</h3>
                  <p>
                    Génerez de l’engagement et du partage avec des concours
                    adaptés à votre ligne<br />éditoriale ou promotionnelle.
                  </p>
                </div>
                <div class="col-md-3">
                  <h3>Valorisez votre marque</h3>
                  <p>
                    Valorisez votre marque ou votre produit en l’intégrant dans
                    la scénarisation des<br />concours.
                  </p>
                </div>
                <div class="col-md-3">
                  <h3>Support créatif</h3>
                  <p>
                    Vous manquez de ressources internes et avez besoin d’un coup
                    de pouce créatif?<br />Nous avons la possibilité de produire
                    pour vous des éléments graphiques<br />percutants et en
                    phase avec l’ADN de votre marque.
                  </p>
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
