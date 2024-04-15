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
            ? 'url(/img/solutions/bigcrm/banner.jpg)'
            : 'url(/img/solutions/bigcrm/homeMobile.jpg)',
      }"
    >
      <div class="cartouchez">
        <i
          class="solutionlogo"
          :style="{ backgroundImage: `url(/img/solutions/bigcrm.svg)` }"
        ></i>
        <h4>Optimisez le développement<br />commercial de votre entreprise</h4>
        <a id="btnDiscova" @click="scrollToElement">Découvrir</a>
      </div>
    </div>
    <div id="restedelapage">
      <div id="pargrapheIntros" v-if="matchingSolution">
        <div id="introforeal">
          <p>
            Directement installé sur le smartphone des commerciaux,
            <strong>BIG CRM</strong> automatise<br />la démarche commerciale de
            la prise de commande à la livraison et au paiement, <br />de la
            prise d’informations d’un prospect à la veille concurrentielle.
          </p>
          <p>
            <strong>BIG CRM</strong> est une application qui permet
            <span
              >d’organiser et d'automatiser les échanges<br />entre les clients,
              l’équipe commerciale et les managers.</span
            >
            Véritable boîte à outils d’aide<br />à la vente interactive et
            connectée, BIG CRM est un booster d’opportunités commerciales.
          </p>
          <p>
            La remontée d’informations est qualifiée et organisée pour rendre
            les statistiques<br />de vente efficaces et constructives. De plus,
            BIG CRM offre une multitude<br />de combinaisons pour tout type de
            collecte et de gestion d’informations.
          </p>
        </div>
        <div id="contenudelapage">
          <div id="sectionunbigcrm" class="container-fluid">
            <div class="row">
              <div id="intro" class="col-md-12 obam">
                <h3>
                  Quelle que soit votre activité,<br /><span>BIG CRM</span> est
                  LA solution !
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="service-item">
                  <div class="service-icon">
                    <img
                      loading="lazy"
                      src="/img/solutions/bigcrm/22028823_m.png"
                      alt="CRM Icon"
                    />
                  </div>
                  <p>DISTRIBUTEURS</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="service-item">
                  <div class="service-icon">
                    <img
                      loading="lazy"
                      src="/img/solutions/bigcrm/146378085_47.png"
                      alt="CRM Icon"
                    />
                  </div>
                  <p>REPRÉSENTANTS<br />COMMERCIAUX</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="service-item">
                  <div class="service-icon">
                    <img
                      loading="lazy"
                      src="/img/solutions/bigcrm/oscar.png"
                      alt="CRM Icon"
                    />
                  </div>
                  <p>MERCHANDISERS</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="service-item">
                  <div class="service-icon">
                    <img
                      loading="lazy"
                      src="/img/solutions/bigcrm/10241541_xl.png"
                      alt="CRM Icon"
                    />
                  </div>
                  <p>ENQUÊTEURS</p>
                </div>
              </div>
            </div>
          </div>
          <div id="sectiontwobigcrm" class="container">
            <div class="row">
              <div id="pimptro" class="col-md-12 obam">
                <h3>
                  Avec <span>BIG CRM</span>, automatiser<br />ses process
                  dynamise la prospection<br />et le suivi des actions terrain
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <h3>
                  Pour les distributeurs et les<br />représentants commerciaux
                </h3>
                <ul>
                  <li>Prise en main rapide par les agents commerciaux</li>
                  <li>Véritable outil de pilotage pour les managers</li>
                  <li>Relation client sécurisée</li>
                  <li>Traçabilité du parcours de vente</li>
                  <li>Accessible sur smartphones et tablettes</li>
                  <li>Grande souplesse d'adaptation aux KPI fixes</li>
                  <li>Ajouts de fonctionnalités rapides et sur-mesure</li>
                  <li>Intégration aux interfaces IT</li>
                  <li>Fonctionne Online et Offline</li>
                  <li>Garantie de la sécurité des données collectées</li>
                  <li>Support et maintenance sur-mesure</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h3>Pour les Merchandiseurs et enquêteurs</h3>
                <ul>
                  <li>
                    Prise en main rapide par les utilisateurs sur le terrain
                  </li>
                  <li>
                    Automatisation de la collecte et tri des informations en
                    live
                  </li>
                  <li>
                    Renforcement de la capacité d'action du merchandiser ou de
                    l'enquêteur
                  </li>
                  <li>
                    Véritable baromètre de visibilité des marques/produits sur
                    le terrain
                  </li>
                  <li>
                    Évaluation de votre réseau dans son environnement
                    concurrentiel
                  </li>
                  <li>
                    Identification et définition des axes d'amélioration et de
                    progression de vos clients
                  </li>
                  <li>
                    Valorisation des bonnes pratiques qui aideront vos clients à
                    se développer
                  </li>
                  <li>Professionnalisation de votre réseau commercial</li>
                  <li>
                    Prise de contrôle de votre image dans votre réseau
                    commercial
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="sectionthreebigcrm" class="container">
            <div class="row">
              <div class="col-md-3">
                <img
                  loading="lazy"
                  src="/img/solutions/bigcrm/Groupe 281.png"
                  alt
                />
              </div>
              <div class="col-md-3">
                <img
                  loading="lazy"
                  src="/img/solutions/bigcrm/Groupe 280.png"
                  alt
                />
              </div>
              <div class="col-md-3">
                <img
                  loading="lazy"
                  src="/img/solutions/bigcrm/Groupe 282.png"
                  alt
                />
              </div>
              <div class="col-md-3">
                <img
                  loading="lazy"
                  src="/img/solutions/bigcrm/Groupe 283.png"
                  alt
                />
              </div>
            </div>
          </div>
          <div id="sectionfourbigcrm" class="container">
            <div class="row">
              <div class="col-md-12">
                <img
                  loading="lazy"
                  class="mobile"
                  src="/img/solutions/bigcrm/CRM-dashbord1.png"
                  alt
                /><img
                  loading="lazy"
                  class="desktop"
                  src="/img/solutions/bigcrm/Groupe 577x.svg"
                  alt
                /><img
                  loading="lazy"
                  src="/img/solutions/bigcrm/CRM-dashbord2.png"
                  alt
                />
                <p>
                  Interface simple et facile à utiliser,<br />Accès instantané
                  et en permanence<br />à des données consolidées.
                </p>
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
