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
            ? 'url(/img/solutions/bigformations/banner.jpg)'
            : 'url(/img/solutions/bigformations/homeMobile.jpg)',
      }"
    >
      <div class="cartouchez">
        <i
          class="solutionlogo"
          :style="{ backgroundImage: `url(/img/solutions/bigformations.svg)` }"
        ></i>
        <h4>
          Formations digitales pour rester<br />connecté avec notre époque
        </h4>
        <a id="btnDiscova" @click="scrollToElement">Découvrir</a>
      </div>
    </div>
    <div id="restedelapage">
      <div id="pargrapheIntros" v-if="matchingSolution">
        <div id="introforeal">
          <p>
            Avec <strong>BIG FORMATIONS</strong> connaître les consommateurs de
            ses produits,<br />booster sa marque sur les réseaux sociaux,
            dynamiser ses activités trade<br />avec le web, connaître le ROI de
            ses actions marketing..
          </p>
          <p>
            Pour être en capacité d’évoluer et de réussir dans ce nouveau
            contexte qui<br />nécessite la transformation digitale d’une
            entreprise, nous en formons tous les<br />acteurs, des équipes
            opérationnelles aux dirigeants afin que toutes les forces<br />en
            action de votre entreprise puissent susciter l’adhésion, travailler
            en bonne<br />intelligence et impulser une stratégie commune.
          </p>
        </div>
        <div id="contenudelapage">
          <div id="sectionunbigformations" class="container-fluid">
            <div class="row">
              <div id="intro" class="col-md-12 obam">
                <h3><span>BIG FORMATIONS</span><br />Nos certifications</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <img
                  loading="lazy"
                  src="/img/solutions/bigformations/adobeanalitics.svg"
                  alt
                />
              </div>
              <div class="col-md-3">
                <img
                  loading="lazy"
                  src="/img/solutions/bigformations/adobetarget.svg"
                  alt
                />
              </div>
              <div class="col-md-3">
                <img
                  loading="lazy"
                  src="/img/solutions/bigformations/googleanalitycs.svg"
                  alt
                />
              </div>
              <div class="col-md-3">
                <img
                  loading="lazy"
                  src="/img/solutions/bigformations/googletagmanager.svg"
                  alt
                />
              </div>
            </div>
          </div>
          <div id="sectiontwobigformations" class="container">
            <div class="row">
              <p>
                Nos 15 ans d’expertise en digital et stratégie de marque, notre
                connaissance<br />des marchés panafricains nous permettent
                d’adapter notre offre de formations aux<br />spécificités des
                marchés internationaux et/ou locaux.
              </p>
              <p>
                Notre méthodologie basée sur la
                <span
                  >mise en situation, le collaboratif,<br />l’immersion et
                  l’interactivité </span
                >permettent aux participants de s’approprier<br />et d’adopter
                rapidement les comportements efficaces.
              </p>
            </div>
          </div>
          <div id="sectionthreebigformations" class="container-fluid">
            <div class="row">
              <div id="formationdecideurs" class="formation">
                <div class="niveau1logo">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigformations/01.png"
                    alt
                  />
                  <div class="dre">
                    <h2>Formation décideurs</h2>
                    <h4>Initiation au marketing digital</h4>
                  </div>
                </div>
                <p>
                  Dans un environnement en constante mutation et de plus en plus
                  concurrentiel, les enjeux<br />liés au digital sont complexes
                  et parfois difficiles à appréhender. Nous vous aidons à
                  vous<br />réinventer et à impulser votre transformation
                  digitale.
                </p>
                <div class="niveau2logo">
                  <h2>Objectifs clefs</h2>
                  <ul>
                    <li>Comprendre l’écosytème digital et ses enjeux</li>
                    <li>
                      Intégrer une stratégie digitale à votre orientation
                      stratégique globale
                    </li>
                    <li>
                      Evaluer et optimiser votre stratégie digitale en fonction
                      des contraintes de coûts et de vos prévisions de ROI
                    </li>
                    <li>
                      Connaître les fondamentaux du marketing online pour
                      élaborer votre plan d’actions digital
                    </li>
                    <li>
                      Dialoguer efficacement avec les différents acteurs du
                      digital internes et externes
                    </li>
                    <li>
                      Acquérir les outils permettant de déployer le modèle
                      économique digital adapté à votre activité
                    </li>
                  </ul>
                </div>
                <div class="niveau3logo">
                  <h2>Pour qui ?</h2>
                  <p>
                    DG/PDG - Cadre dirigeant - Responsable de projet de
                    transformation digital - Chief digital officer Directeur
                    marketing - Directeur communication - Directeur commercial -
                    Directeur internet - DSI - DAF - DRH
                  </p>
                </div>
                <div class="niveau4logo">
                  <div class="row">
                    <div class="col-md-6">
                      <h2>Organisation</h2>
                      <p>
                        Durée : 3 jours (18 h)<br />Date et lieu : à determiner
                        en fonction de vos disponibilités, possibilité de
                        formation On-linE
                      </p>
                    </div>
                    <div class="col-md-6">
                      <h2>PRÉ-REQUIS</h2>
                      <p>Pas de ré-requis</p>
                    </div>
                  </div>
                </div>
                <div class="niveau5logo benefits">
                  <h3>BÉNÉFICES</h3>
                  <ul>
                    <li>
                      Vous apprenez à reconnaître et à exploiter les
                      opportunités liées au web.
                    </li>
                    <li>
                      Vous comprenez les mécanismes du marketing digital et êtes
                      capables de mettre en place une stratégie efficace tout en
                      optimisant vos coûts.
                    </li>
                    <li>
                      Vous pilotez et challengez vos équipes opérationnelles
                      et/ou vos agences externes.
                    </li>
                    <li>
                      Vous innovez et élaborez de nouvelles pistes de
                      croissance.
                    </li>
                    <li>
                      Vous réduisez vos coûts et améliorez la rentabilité de vos
                      investissements.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="formationcommunitymanagement" class="formation">
                <div class="niveau1logo">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigformations/02.png"
                    alt
                  />
                  <div class="dre">
                    <h2>FORMATION COMMUNITY MANAGEMENT</h2>
                    <h4>ACTIVATION SUR LES RÉSEAUX SOCIAUX</h4>
                  </div>
                </div>
                <p>
                  Sensibiliser aux opportunités offertes par les réseaux sociaux
                  en prenant compte des<br />spécificités de votre environnement
                  et de votre marché, démarrer ou optimiser une<br />campagne
                  sur les réseaux sociaux, élaborer une stratégie de
                  communication globale<br />cohérente pour interagir avec votre
                  audience et développer votre marque tout en<br />contrôlant
                  les risques éventuels.
                </p>
                <div class="niveau2logo">
                  <h2>Objectifs clefs</h2>
                  <ul>
                    <li>
                      Bâtir une stratégie efficace et cohérente sur les médias
                      sociaux alignée à votre marque,<br />à vos objectifs et à
                      votre marché
                    </li>
                    <li>
                      Identifier les facteurs du succès d’une stratégie de
                      dialogue et de partage : créer et fidéliser<br />les
                      communautés on-line
                    </li>
                    <li>
                      Exploiter le potentiel des médias sociaux : social CRM,
                      co-création, publicité, social shopping, prospection
                    </li>
                  </ul>
                </div>
                <div class="niveau3logo">
                  <h2>Pour qui ?</h2>
                  <p>
                    Responsable communication - Responsable e-business /
                    e-marketing - Webmarketer Social media manager - Community
                    Manager
                  </p>
                </div>
                <div class="niveau4logo">
                  <div class="row">
                    <div class="col-md-6">
                      <h2>Organisation</h2>
                      <p>
                        Durée : 4 jours<br />Date et lieu : à determiner en
                        fonction de vos disponibilités, possibilité de formation
                        On-linE
                      </p>
                    </div>
                    <div class="col-md-6">
                      <h2>PRÉ-REQUIS</h2>
                      <p>Pas de ré-requis</p>
                    </div>
                  </div>
                </div>
                <div class="niveau5logo benefits">
                  <h3>BÉNÉFICES</h3>
                  <ul>
                    <li>
                      Vous augmentez la visibilité et la notoriété de votre
                      marque.<br />
                    </li>
                    <li>
                      Vous améliorez la communication avec vos clients.<br />
                    </li>
                    <li>
                      Vous approfondissez votre connaissance clients/prospects
                      (ciblage plus pointu, retours d’expériences instantanés)
                      et en attirez de nouveaux.<br />
                    </li>
                    <li>
                      Vous générez de la confiance et de la crédibilité.<br />
                    </li>
                    <li>
                      Vous réduisez vos coûts marketing (les médias sociaux
                      génèrent du lead pour 1/3 du coût).<br />
                    </li>
                    <li>
                      Vous améliorez la veille et prenez une longueur d’avance
                      sur vos concurrents.<br />
                    </li>
                    <li>
                      Vous mesurez et optimisez le retour sur investissement de
                      vos actions.<br />
                    </li>
                  </ul>
                </div>
              </div>
              <div id="formationdigitalmanager" class="formation">
                <div class="niveau1logo">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigformations/03.png"
                    alt
                  />
                  <div class="dre">
                    <h2>FORMATION DIGITAL MANAGERS<br />DIRECTEUR MARKETING</h2>
                    <h4>ANALYSE ET OPTIMISATION DIGITALE</h4>
                  </div>
                </div>
                <p>
                  Comprendre vos points forts et vos points faibles sur le web,
                  optimiser vos campagnes digitales et générer une meilleure
                  acquisition/rétention de votre audience.
                </p>
                <div class="niveau2logo">
                  <h2>Objectifs clefs</h2>
                  <ul>
                    <li>
                      Mesurer la performance de son site et de ses campagnes en
                      fonction de sa stratégie digitale
                    </li>
                    <li>
                      Mettre en place les indicateurs et tracking pertinents
                    </li>
                    <li>Optimiser la configuration de Google Analytics</li>
                    <li>
                      Optimiser le rendement de son environnement d’email
                      marketing
                    </li>
                  </ul>
                </div>
                <div class="niveau3logo">
                  <h2>Pour qui ?</h2>
                  <p>
                    Directeur Marketing / Digital - Responsable Marketing /
                    Digital - Responsable e-commerce Chef de projet e-business -
                    Chef de marché - Chef de produit
                  </p>
                </div>
                <div class="niveau4logo">
                  <div class="row">
                    <div class="col-md-6">
                      <h2>Organisation</h2>
                      <p>
                        Durée : 3 jours (18 h)<br />Date et lieu : à determiner
                        en fonction de vos disponibilités, possibilité de
                        formation On-linE
                      </p>
                    </div>
                    <div class="col-md-6">
                      <h2>PRÉ-REQUIS</h2>
                      <p>Pas de ré-requis</p>
                    </div>
                  </div>
                </div>
                <div class="niveau5logo benefits">
                  <h3>BÉNÉFICES</h3>
                  <ul>
                    <li>
                      Vous savez définir et évaluer la performance de votre site
                      et configurer des indicateurs personnalisés, adaptés à vos
                      besoins.
                    </li>
                    <li>
                      Vous maîtrisez les objectifs et indicateurs de
                      performance, de mesure de l’audience et des leviers
                      d’acquisition digitale.
                    </li>
                    <li>
                      Vous élaborez les indicateurs et le format du reporting
                      pour votre entreprise.
                    </li>
                  </ul>
                </div>
              </div>
              <div id="formatiowebanalytics" class="formation">
                <div class="niveau1logo">
                  <img
                    loading="lazy"
                    src="/img/solutions/bigformations/04.png"
                    alt
                  />
                  <div class="dre">
                    <h2>FORMATION WEB ANALYTICS</h2>
                    <h4>ANALYSE ET OPTIMISATION DIGITALE</h4>
                  </div>
                </div>
                <p>
                  Bâtir une stratégie et un plan d’actions online efficace,
                  assurer le cadrage, la coordination et le lancement de projets
                  digitaux (sites web, campagnes web marketing, dispositifs sur
                  les médias sociaux, plan e-réputation) mesurer et optimiser
                  l’efficacité de vos dispositifs digitaux, mettre en place des
                  processus internes de fonctionnement des équipes marketing.
                </p>
                <div class="niveau2logo">
                  <h2>Objectifs clefs</h2>
                  <ul>
                    <li>Comprendre l’écosytème digital et ses enjeux</li>
                    <li>
                      Intégrer une stratégie digitale à votre orientation
                      stratégique globale
                    </li>
                    <li>
                      Evaluer et optimiser votre stratégie digitale en fonction
                      des contraintes de coûts et de vos prévisions de ROI
                    </li>
                    <li>
                      Connaître les fondamentaux du marketing online pour
                      élaborer votre plan d’actions digital
                    </li>
                    <li>
                      Dialoguer efficacement avec les différents acteurs du
                      digital internes et externes
                    </li>
                    <li>
                      Acquérir les outils permettant de déployer le modèle
                      économique digital adapté à votre activité
                    </li>
                  </ul>
                </div>
                <div class="niveau3logo">
                  <h2>Pour qui ?</h2>
                  <p>Digital Manager - Directeur Marketing</p>
                </div>
                <div class="niveau4logo">
                  <div class="row">
                    <div class="col-md-6">
                      <h2>Organisation</h2>
                      <p>
                        Durée : 3 jours (18 h)<br />Date et lieu : à determiner
                        en fonction de vos disponibilités, possibilité de
                        formation On-linE
                      </p>
                    </div>
                    <div class="col-md-6">
                      <h2>PRÉ-REQUIS</h2>
                      <p>Pas de ré-requis</p>
                    </div>
                  </div>
                </div>
                <div class="niveau5logo benefits">
                  <h3>BÉNÉFICES</h3>
                  <ul>
                    <li>
                      Vous savez bâtir une stratégie et un plan d’action de
                      communication digitale.
                    </li>
                    <li>
                      Vous traduisez les objectifs commerciaux en conversations
                      digitales.
                    </li>
                    <li>
                      Vous optimisez l’arbitrage de vos investissements entre
                      les leviers de communication digitale.
                    </li>
                    <li>
                      Vous pilotez efficacement vos campagnes digitales
                      exécutées en interne ou par vos agences et améliorez votre
                      ROI, en créant des campagnes efficaces à faible budget.
                    </li>
                    <li>
                      Vous traduisez les objectifs commerciaux en conversations
                      digitales.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="sectionfourbigformations" class="container-fluid">
            <h4>BIG FORMATIONS</h4>
            <h6>Nos références</h6>
            <div class="rowas">
              <img
                loading="lazy"
                src="/img/solutions/bigformations/references/logoSOLIBRA.jpg"
                class="ticket"
              />
              <img
                loading="lazy"
                src="/img/solutions/bigformations/references/logoCemoi.jpg"
                class="ticket"
              />
              <img
                loading="lazy"
                src="/img/solutions/bigformations/references/logostandardbank.jpg"
                class="ticket"
              />
              <img
                loading="lazy"
                src="/img/solutions/bigformations/references/logovodafone.jpg"
                class="ticket"
              />
              <img
                loading="lazy"
                src="/img/solutions/bigformations/references/logodstv.jpg"
                class="ticket"
              />
              <img
                loading="lazy"
                src="/img/solutions/bigformations/references/logosania.jpg"
                class="ticket"
              />
              <img
                loading="lazy"
                src="/img/solutions/bigformations/references/logimg.jpg"
                class="ticket"
              />
              <img
                loading="lazy"
                src="/img/solutions/bigformations/references/logobarclays.jpg"
                class="ticket"
              />
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
