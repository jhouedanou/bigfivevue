<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import ContenuAltLayout from "@/layouts/contenuAlt.vue";
import PageLoader from "@/components/PageLoader.vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
let swiperContainer = ref(null);
let swiperContainer2 = ref(null);
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
  // Initialisation du swiper sur la page
  swiperInstance = new Swiper(swiperContainer.value, {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    //keyboard: true,
    rewind: true,
    parallax: true,
    draggable: true,
    autoHeight: true,
    lazy: true,
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
  //slider sur les images de la boutique
  swiperInstance2 = new Swiper(swiperContainer2.value, {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    draggable: true,
    loop: true,
    // mousewheel: true,
    keyboard: true,
    rewind: true,
    observer: true,
    observeParents: true,
    /*  autoplay: {
      delay: 2000,
      disableOnInteraction: true, // enable/disable autoplay on user interaction
    }, */
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

    <div id="rakimz" class="swiper" ref="swiperContainer">
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
          <div id="sectionthreebigcity" class="container">
            <div class="row">
              <div class="col-md-4 col-offset-1 letexte">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est un annuaire géolocalisé</h3>
                <p>
                  Vous avez désormais le moyen de valoriser l’expertise de vos
                  revendeurs, maillons essentiels pour transformer l’acte
                  d’engagement quel qu’il soit : achat, conversion ou
                  fidélisation
                </p>
                <p>
                  Le CMS BIG CITY a été conçu comme un guide Événementiel
                  interactif permettant de donner de la visibilité aux points de
                  vente qui y sont inscrits, à leurs événements ainsi que ceux
                  que la marque exploitante sponsorise
                </p>
                <p>
                  Au fur et à mesure que votre réseau grandit, ajoutez
                  facilement à votre application vos nouveaux établissement
                </p>
              </div>
              <div class="col-md-7 d-flex align-items-center">
                <img
                  class="img-fluid"
                  src="/img/solutions/bigcity/Groupe 572.svg"
                  alt
                />
                <img
                  class="img-fluid"
                  src="/img/solutions/bigcity/Groupe 573.svg"
                  alt
                />
                <img
                  class="img-fluid"
                  src="/img/solutions/bigcity/Groupe 574.svg"
                  alt
                />
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
                    <h3>C’est un outil de fidélisation</h3>
                    <p>
                      BIG CITY permet la mise en place de programmes de fidélité
                      pour les consommateurs et de motivation pour les points de
                      vente prescripteurs de la marque.
                    </p>
                    <p>
                      Entièrement personnalisables, ce sont les outils idéaux
                      pour lancer un produit ou dynamiser des ventes et
                      récompenser les PDV en suivant en temps réel leurs
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
                <h3>C’est un Générateur de contenu…</h3>
                <p>
                  … pour la marque, ses produits et ses événements, mais
                  également pour les Points de vente : bons plans, promotions,
                  lancement de produits, événements, actualités…
                </p>
              </div>
              <div class="col-md-8">
                <div class="row d-flex">
                  <img src="/img/solutions/bigcity/Groupe 549.png" alt />
                  <img src="/img/solutions/bigcity/Groupe 571.png" alt />
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
                <h3>C’est un gestionnaire d’activité pour les pros</h3>
                <p>
                  Les propriétaires des PDV peuvent créer et piloter leur page
                  PDV depuis leur compte PRO. En un clic, ils ont accès à leur
                  dashboard business (revenus, points obtenus dans le programme
                  de motivation, les raccourcis vers des cadeaux, la possibilité
                  d’ajouter rapidement des événements ou d’envoyer
                  notifications…).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectionsevenbigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-6 letexte">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est une alternative aux réseaux sociaux</h3>
                <p>
                  La marque crée son propre réseau social. La marque devient un
                  média qui fédère sa propre communauté pour produire de la
                  valeur et de l’engagement.
                </p>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <img src="/img/solutions/bigcity/Groupe 548a.png" alt /><img
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
                <h3>C’est un créateur d’activations</h3>
                <p>
                  BIG CITY permet la mise en place d’activations digitales
                  (jeux, concours, loteries, cartes à gratter…) qui renforcent
                  le lien entre la marque et le consommateur. Le module
                  PRONOSTICS permet une animation originale en ligne et dans les
                  points de vente autour de grands événements sportifs
                  (ponctuels ou tout au long de l’année) fédérateurs.
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
                <h3>C’est une boutique intégrée</h3>
                <p>
                  L’application dispose d’un module e-commerce intégré
                  permettant les paiements digitaux.
                </p>
                <p>
                  Il permet aux établissements de vendre leurs produits de façon
                  digitale, prise de commande par le personnel ou commande
                  directe par les clients, sur place, à emporter ou à se faire
                  livrer. Le système permet la vente par mobile money, carte de
                  crédit ou cash et est fourni avec un dashboard analytics pour
                  suivre ses ventes.
                </p>
                <p>
                  Les établissements sélectionnent eux-mêmes leurs livreurs et
                  organisent les tarifs comme ils le souhaitent en fonction de
                  la distance, ce qui leur donne une plus grande flexibilité que
                  ce qu’offrent les autres plateformes de livraison.
                </p>
              </div>
              <div class="col-md-8">
                <div id="galerieimg">
                  <div id="imagshop" ref="swiperContainer2">
                    <div id="swidel" class="swiper-wrapper">
                      <img
                        class="swiper-slide"
                        src="/img/solutions/bigcity/Groupe 444.svg"
                        alt
                      />
                      <img
                        class="swiper-slide"
                        src="/img/solutions/bigcity/Groupe 447.svg"
                        alt
                      />
                      <img
                        class="swiper-slide"
                        src="/img/solutions/bigcity/Groupe 448.svg"
                        alt
                      />
                      <img
                        class="swiper-slide"
                        src="/img/solutions/bigcity/Groupe 449.svg"
                        alt
                      />
                      <img
                        class="swiper-slide"
                        src="/img/solutions/bigcity/Groupe 578.svg"
                        alt
                      />
                      <img
                        class="swiper-slide"
                        src="/img/solutions/bigcity/Groupe 579.svg"
                        alt
                      />
                      <img
                        class="swiper-slide"
                        src="/img/solutions/bigcity/Groupe 443.svg"
                        alt
                      />
                      <img
                        class="swiper-slide"
                        src="/img/solutions/bigcity/Groupe 442.svg"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="sectiontenbigcity" class="container-fluid">
            <div class="row">
              <div class="col-md-8">
                <img src="/img/solutions/bigcity/Groupe 553.svg" />
                <img src="/img/solutions/bigcity/Groupe 554.svg" />
                <img src="/img/solutions/bigcity/Groupe 555.svg" />
              </div>
              <div class="col-md-4 letexte">
                <img src="/img/solutions/bigcity/logopetit.svg" alt />
                <h3>C’est un guide et une billetterie événementielle</h3>
                <p>
                  Les utilisateurs peuvent acheter des billets de concert,
                  festival ou tout type d’événement depuis l’application !
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
                <h3>C’est un aspirateur de datas</h3>
                <p>
                  Depuis le dashboard de l’application, directement depuis votre
                  smartphone la marque prend le contrôle du contenu, attribue
                  les rôles de ses administrés et suit les analytics de son
                  écosystème pour mieux anticiper les prochaines actions.
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
                    >Logiciel seul + hébergement + maintenance +
                    formation</strong
                  >Vous n’avez plus qu’à vous occuper de votre contenu
                </p>
                <h3>Formule 2</h3>
                <p>
                  <strong
                    >Logiciel seul + hébergement + maintenance + formation +
                    Accompagnement</strong
                  >On s’occupe de tout, y compris de votre contenu/p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id="nosautresolutons">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h3>Découvrez nos autres solutions</h3>
                </div>
                <div class="dflex austin">
                  <div
                    class="chyna"
                    v-for="item in menusolutions"
                    :key="item.id"
                  >
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
      <div class="swiper-pagination"></div>
    </div>
  </ContenuAltLayout>
</template>

<style lang="scss" scoped>
#header-alt {
  position: relative !important;
}

.swiper-wrapper {
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
