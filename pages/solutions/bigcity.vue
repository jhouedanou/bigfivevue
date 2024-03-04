<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import ContenuAltLayout from "@/layouts/contenuAlt.vue";
import PageLoader from "@/components/PageLoader.vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
const swiperContainer = ref(null);
let swiperInstance;
const solutions = ref([]);
const menusolutions = ref([]);
const route = useRoute();
const scrollPosition = ref(0);
let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
const filterValue = route.fullPath.substring("/solutions/".length);
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
  document.body.id = filterValue;
  document.body.classList.add("solutions");
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
  const index = solutions.value.findIndex(
    (solution) => solution.lien === filterValue
  );
  return {
    ...solutions.value[index],
  };
});

onMounted(async () => {
  // Initialisation du swiper
  swiperInstance = new Swiper(swiperContainer.value, {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    keyboard: true,
    rewind: true,
    observer: true,
    observeParents: true,
    /*  autoplay: {
      delay: 5000, // delay between transitions in ms
      disableOnInteraction: true, // enable/disable autoplay on user interaction
    }, */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
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

    <div class="swiper" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- solutionsBanner -->
          <div
            id="solutionBanner"
            :style="{
              backgroundImage: 'url(' + matchingSolution.banniere + ')',
            }"
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
        </div>
        <div class="swiper-slide">
          <div
            id="restedelapage"
            class="dflex justify-content-center align-items-center"
          >
            <div id="pargrapheIntros" v-if="matchingSolution">
              <div
                id="introforeal"
                v-html="matchingSolution.introduction"
              ></div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="divwrapper dflex justify-content-center align-items-center"
          >
            <div id="sectionunbigcity" class="container">
              <div class="row">
                <div id="intro" class="col-md-12 obam">
                  <h3>
                    <span>Avec BIG City, vous pouvez rapidement créer…</span>
                  </h3>
                </div>
              </div>
            </div>
            <div id="sectiontwobigcity" class="container">
              <div class="row">
                <div class="col-md-6">
                  <img src="/img/solutions/bigcity/igcityanim_2.png" alt />
                </div>
                <div class="col-md-6">
                  <ul>
                    <li>une application Brand-content</li>
                    <li>une application BtoB</li>
                    <li>une marketplace</li>
                    <li>un guide touristique</li>
                    <li>une application événementielle</li>
                    <li>une plateforme associative</li>
                    <li>un annuaire BtoBtoC</li>
                    <li>une plateforme pour votre fédération</li>
                    <li>une application sur-mesure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectionthreebigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-5 letexte">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est un annuaire<br />géolocalisé</h3>
                <p>
                  Vous avez désormais le moyen de valoriser l’expertise de
                  vos<br />revendeurs, maillons essentiels pour transformer
                  l’acte<br />d’engagement quel qu’il soit : achat, conversion
                  ou<br />fidélisation
                </p>
                <p>
                  Le CMS BIG CITY a été conçu comme un guide Événementiel<br />interactif
                  permettant de donner de la visibilité aux points de<br />vente
                  qui y sont inscrits, à leurs événements ainsi que ceux que<br />la
                  marque exploitante sponsorise
                </p>
                <p>
                  Au fur et à mesure que votre réseau grandit, ajoutez
                  facilement<br />à votre application vo nouveaux établissement
                </p>
              </div>
              <div class="col-md-7 d-flex">
                <img src="/img/solutions/bigcity/Groupe 572.svg" alt />
                <img src="/img/solutions/bigcity/Groupe 573.svg" alt />
                <img src="/img/solutions/bigcity/Groupe 574.svg" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectionfourbigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-4">
                    <img src="/img/solutions/bigcity/Groupe 537.png" alt />
                  </div>
                  <div class="col-md-8 letexte">
                    <img src="/img/solutions/bigcity/logopetit.svg" alt />
                    <h3>C’est un outil<br />de fidélisation</h3>
                    <p>
                      BIG CITY permet la mise en place de programmes de
                      fidélité<br />pour les consommateurs et de motivation pour
                      les points de<br />vente prescripteurs de la marque.
                    </p>
                    <p>
                      Entièrement personnalisables, ce sont les outils idéaux
                      pour<br />lancer un produit ou dynamiser des ventes et
                      récompenser les<br />PDV en suivant en temps réel leurs
                      performances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectionfivebigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-4 letexte">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est un Générateur<br />de contenu…</h3>
                <p>
                  … pour la marque, ses produits et ses<br />événements, mais
                  également pour les Points<br />de vente : bons plans,
                  promotions, lancement<br />de produits, événements,
                  actualités…
                </p>
              </div>
              <div class="col-md-8 d-flex">
                <div class="row">
                  <img src="/img/solutions/bigcity/Groupe 549.png" alt />
                  <img
                    class="col-md-4"
                    src="/img/solutions/bigcity/Groupe 571.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectionsixbigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-8">
                <div class="row">
                  <img src="/img/solutions/bigcity/Groupe 545.png" alt />
                  <img
                    class="col-md-4"
                    src="/img/solutions/bigcity/Groupe 546.png"
                    alt
                  />
                  <img
                    class="col-md-4"
                    src="/img/solutions/bigcity/Groupe 547.png"
                    alt
                  />
                </div>
              </div>
              <div class="col-md-4 letexte">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est un gestionnaire<br />d’activité pour les pros</h3>
                <p>
                  Les propriétaires des PDV peuvent créer et<br />piloter leur
                  page PDV depuis leur compte PRO.<br />En un clic, ils ont
                  accès à leur dashboard business (revenus, points obtenus dans
                  le programme de motivation,<br />les raccourcis vers des
                  cadeaux, la possibilité d’ajouter rapidement des événements ou
                  d’envoyer<br />notifications…).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectionsevenbigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est une alternative<br />aux réseaux sociaux</h3>
                <p>
                  La marque crée son propre réseau social.<br /><br />La marque
                  devient un média qui fédère<br />sa propre communauté pour
                  produire<br />de la valeur et de l’engagement.
                </p>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <img
                    class="col-md-6"
                    src="/img/solutions/bigcity/Groupe 548a.png"
                    alt
                  /><img
                    class="col-md-6"
                    src="/img/solutions/bigcity/Groupe 549a.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectioneightbigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-8">
                <div class="row">
                  <img src="/img/solutions/bigcity/Groupe 550.png" alt /><img
                    class="col-md-4"
                    src="/img/solutions/bigcity/Groupe 551.png"
                    alt
                  /><img src="/img/solutions/bigcity/Groupe 552.png" alt />
                </div>
              </div>
              <div class="col-md-4 letexte">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est un créateur<br />d’activations</h3>
                <p>
                  BIG CITY permet la mise en place d’activations<br />digitales
                  (jeux, concours, loteries, cartes à gratter…)<br />qui
                  renforcent le lien entre la marque et le<br />consommateur.<br />Le
                  module PRONOSTICS permet une animation<br />originale en ligne
                  et dans les points de vente autour<br />de grands événements
                  sportifs (ponctuels ou tout<br />au long de l’année)
                  fédérateurs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectionninebigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-4 letexte">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est une boutique<br />intégrée</h3>
                <p>
                  L’application dispose d’un module e-commerce<br />intégré
                  permettant les paiements digitaux.
                </p>
                <p>
                  Il permet aux établissements de vendre leurs<br />produits de
                  façon digitale, prise de commande<br />par le personnel ou
                  commande directe par les<br />clients, sur place, à emporter
                  ou à se faire livrer.<br />Le système permet la vente par
                  mobile money,<br />carte de crédit ou cash et est fourni avec
                  un<br />dashboard analytics pour suivre ses ventes.
                </p>
                <p>
                  Les établissements sélectionnent eux-mêmes<br />leurs livreurs
                  et organisent les tarifs comme ils le<br />souhaitent en
                  fonction de la distance, ce qui<br />leur donne une plus
                  grande flexibilité que ce<br />qu’offrent les autres
                  plateformes de livraison.
                </p>
              </div>
            </div>
            <div class="col-md-8">
              <div id="galerieimg">
                <img src="/img/solutions/bigcity/Groupe 442.png" alt />
                <img src="/img/solutions/bigcity/Groupe 443.png" alt />
                <img src="/img/solutions/bigcity/Groupe 444.png" alt />
                <img src="/img/solutions/bigcity/Groupe 445.png" alt />
                <img src="/img/solutions/bigcity/Groupe 446.png" alt />
                <img src="/img/solutions/bigcity/Groupe 447.png" alt />
                <img src="/img/solutions/bigcity/Groupe 448.png" alt />
                <img src="/img/solutions/bigcity/Groupe 449.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div id="sectiontenbigcity" class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <img src="img/solutions/bigcity/Groupe 553.png" /><img
                src="img/solutions/bigcity/Groupe 554.png"
              /><img src="img/solutions/bigcity/Groupe 555.png" />
            </div>
            <div class="col-md-4 letexte">
              <img src="/img/solutions/bigcity/logopetit.svg" alt />
              <h3>
                C’est un guide<br />et une billetterie<br />événementielle
              </h3>
              <p>
                Les utilisateurs peuvent acheter des<br />billets de concert,
                festival ou tout type<br />d’événement depuis l’application !
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div id="sectionelevenbigcity" class="container-fluid">
          <div class="row">
            <div class="col-md-6 letexte">
              <img src="/img/solutions/bigcity/logopetit.svg" alt />
              <h3>C’est un aspirateur<br />de datas</h3>
              <p>
                Depuis le dashboard de l’application,<br />directement depuis
                votre smartphone<br />la marque prend le contrôle du contenu,<br />attribue
                les rôles de ses administrés<br />et suit les analytics de son
                écosystème pour<br />mieux anticiper les prochaines actions.
              </p>
            </div>
            <div class="col-md-6">
              <img src="/img/solutions/bigcity/Groupe 576.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div id="sectiontwelvebigcity" class="container-fluid">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-6 letexte">
              <img src="/img/solutions/bigcity/logopetit.svg" alt />
              <h3>Formule 1</h3>
              <p>
                <strong
                  >Logiciel seul + hébergement + maintenance<br />+
                  formation</strong
                >Vous n’avez plus qu’à vous occuper de votre contenu
              </p>
              <h3>Formule 2</h3>
              <p>
                <strong
                  >Logiciel seul + hébergement + maintenance<br />+ formation +
                  Accompagnement</strong
                >On s’occupe de tout, y compris de votre contenu/p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide"></div>
    </div>
    <div class="swiper-pagination"></div>

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
  </ContenuAltLayout>
</template>

<style lang="scss" scoped>
#header-alt {
  position: relative !important;
}

.swiper-wrapper {
  /* background: linear-gradient(to bottom, #80368c, #2c348b); */
  /*   background: linear-gradient(to bottom, #82368c 0%, #27348b 100%);
 */ /*  overflow: hidden; */
  height: 100vh;
}

.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-horizontal {
  height: auto;
}

.swiper-slide {
  /* Styles pour les slides */
  padding: 0;
  margin: 0 auto;
}
#restedelapage {
  padding: 0;
  margin: 0 auto;
}
.divwrapper {
  padding: 0;
  margin: 0 auto;
}
</style>
