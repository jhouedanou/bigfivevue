<script setup>
import { ref, reactive, onMounted, watchEffect } from "vue";
import axios from "axios";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "animate.css";
import { useRoute } from "vue-router";

import Menumobile from "@/components/Menumobile.vue";
import PageLoader from "@/components/PageLoader.vue";
import "bootstrap/dist/css/bootstrap.css";

let swiperContainer = ref(null);
let swiperContainer2 = ref(null);
let swiperContainer3 = ref(null);
let slide3Content = ref([]);
let swiperInstance;
let swiperInstance2;
let isMainFull = ref(true);
let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
const route = useRoute();

const filterValue = route.fullPath.substring("/".length);
//console.log(filterValue);
const windowWidth = ref(0);
const state = reactive({
  metadesc: "",
  pageTitle: "",
  agence: null,
  isSlide1Active: "",
  isLoading: true,
});

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

onMounted(() => {
  //ajouter l'id de la page  #agence à la balise body si et seulement agence est dans la barre adresse
  if (filterValue == "agence") {
    document.body.id = "agence";
  }

  // ajouter la classe .agence à la balise body
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", updateWindowWidth);
});
onMounted(async () => {
  try {
    // page loading
    state.isLoading = true;
    //recupération des textes de la page
    const textesGlobal = await axios.get("/api/agence.json");
    state.metadesc = textesGlobal.data.metadesc;
    state.pageTitle = textesGlobal.data.title;
    state.agence = textesGlobal.data;
    if (windowWidth.value > 1024) {
      swiperInstance = new Swiper(swiperContainer.value, {
        direction: "vertical", // Set the direction to vertical
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        keyboard: true,
        effect: "slide", // Set the slide effect
        autoplay: {
          delay: 30000, // Delay between transitions in ms
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      const slide1Element = document.getElementById("slide1");
      if (slide1Element) {
        setTimeout(() => {
          slide1Element.classList.add("slide1-active");
        }, 1000);
      } else {
        slide1Element.classList.remove("slide1-active");
      }
      swiperInstance.on("slideChange", () => {
        if (swiperInstance.activeIndex == 0) {
          state.isSlide1Active = true;
          document.querySelector(".slide1").classList.add("slide1-active");
        } else if (swiperInstance.activeIndex == 2) {
          state.isSlide1Active = false;
          swiperInstance2 = new Swiper(swiperContainer2.value, {
            direction: "horizontal",
            slidesPerView: 1,
            spaceBetween: 10,
            rewind: true,
            disabledOnInteraction: true,
            initialSlide: 0,
            speed: 2000,
            draggable: true,
            parallax: true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: true,
            },
          });
        } else if (swiperInstance.activeIndex === 3) {
          const tipster = document.querySelector("#tipster");
          const liste = tipster.querySelectorAll("li");
          console.log(liste);
          const delai = 300;
          const increment = 1;
          const debutFadeOut = 19;
          let i = liste.length - increment; // 34
          let dernierElementdelaListe = liste.length - increment;
          const lEcart = liste.length - debutFadeOut; //34-15=19
          const interval = setInterval(() => {
            if (i >= debutFadeOut) {
              liste[i].classList.add(
                "animate__animated",
                "animate__fadeInDownBig"
              );
              i--;
            } else if (i < debutFadeOut && i >= 0) {
              liste[i + lEcart].classList.remove("animate__fadeInDownBig");
              liste[i + lEcart].classList.add(
                "animate__fadeOutDownBig",
                "close"
              );
              liste[i].classList.add(
                "animate__animated",
                "animate__fadeInDownBig"
              );
              i--;
            } else if (i < 0) {
              stop();
            } else {
              clearInterval(interval);
            }
          }, delai);

          state.isSlide1Active = false;
        } else {
          state.isSlide1Active = false;
        }
      });
      //gestion de l'animation de la slide 5
      const slide5Element = document.getElementById("slide5");
      slide5Element.addEventListener("mousemove", (event) => {
        const posX = (event.clientX / slide5Element.offsetWidth) * 200;
        const posY = (event.clientY / slide5Element.offsetHeight) * 200;
        // Set the new background position
        slide5Element.style.backgroundPosition = `${posX}% ${posY}%`;
      });
    } else {
      const { default: Hammer } = await import("hammerjs");
      const { Carousel } = await import("bootstrap");
      //bootstrap
      const carouselElement = document.querySelector(
        "#carouselExampleIndicators"
      );
      const hammer = new Hammer(carouselElement);
      hammer.on("swipeleft", function () {
        // Aller à la diapositive suivante
        $("#carouselExampleIndicators").carousel("next");
      });

      hammer.on("swiperight", function () {
        // Aller à la diapositive précédente
        $("#carouselExampleIndicators").carousel("prev");
      });
      const carousel = new Carousel(carouselElement, {
        interval: 2000, // Autoplay interval in milliseconds
      });
      //animation de la 2nde liste tipster
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "slide4" && entry.isIntersecting) {
            //alert("slide4 est dans le viewport");
            // Execute the code when #slide4 reaches the top of the viewport
            const tipster = document.querySelector("#tipster2");
            const liste = tipster.querySelectorAll("div");
            const delai = 300;
            const increment = 1;
            const debutFadeOut = 0; //pas de fadeout sur mobile
            let i = liste.length - increment; // 34
            let dernierElementdelaListe = liste.length - increment;
            const lEcart = liste.length - debutFadeOut; //34-15=19
            const interval = setInterval(() => {
              if (i >= debutFadeOut) {
                liste[i].classList.add(
                  "animate__animated",
                  "animate__fadeInDownBig"
                );
                i--;
              } else if (i < debutFadeOut && i >= 0) {
                i--;
              } else if (i < 0) {
                stop();
              } else {
                clearInterval(interval);
              }
            }, delai);
            observer.unobserve(entry.target);
          }
        });
      });
      const slide4Element = document.getElementById("slide4");
      observer.observe(slide4Element);
      const tipster = document.querySelector("#tipster2");
      const liste = tipster.querySelectorAll("div");
      const delai = 300;
      const increment = 1;
      const debutFadeOut = 0; //pas de fadeout sur mobile
      let i = liste.length - increment; // 34
      let dernierElementdelaListe = liste.length - increment;
      const lEcart = liste.length - debutFadeOut; //34-15=19
      const interval = setInterval(() => {
        if (i >= debutFadeOut) {
          liste[i].classList.add("animate__animated", "animate__fadeInDownBig");
          i--;
        } else if (i < debutFadeOut && i >= 0) {
          i--;
        } else if (i < 0) {
          stop();
        } else {
          clearInterval(interval);
        }
      }, delai);
    }

    // Set isLoading to false when everything is loaded
    state.isLoading = false;
  } catch (error) {
    console.error(error);
    state.isLoading = false;
  } finally {
    state.isLoading = false;
  }
});

watchEffect(() => {
  useHead({
    title: state.pageTitle,
    meta: [
      {
        hid: "description",
        name: "description",
        content: state.metadesc,
      },
      {
        property: "og:title",
        content: state.pageTitle,
      },
      {
        property: "og:description",
        content: state.metadesc,
      },
    ],
  });
});
</script>
<template>
  <div id="lagence" class="container-fluid">
    <PageLoader v-if="state.isLoading" />
    <div id="menumobile" class="no-bg">
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
    <div class="row">
      <div
        id="sidebar"
        class="sidebar homepagesidebar"
        :class="{ flipit: state.isSlide1Active, open: isSidebarOpen }"
      >
        <Logo :id="2" />
        <Menu :page="'/agence'" />
        <Menumobile />
      </div>
      <div id="lemain" class="main vh-100" :class="{ full: isMainFull }">
        <div class="swiper" ref="swiperContainer">
          <div class="swiper-wrapper">
            <div id="slide1" class="swiper-slide">
              <!-- presentation de l'agence -->
              <h3>{{ state.agence?.slide1?.title ?? "" }}</h3>
              <p v-html="state.agence?.slide1?.soustitre ?? ''"></p>
              <h3 v-html="state.agence?.slide1?.contenu ?? ''"></h3>
            </div>
            <div id="slide2" class="swiper-slide">
              <div class="row slide-inner">
                <div
                  class="col-md-4 col-sm-12 slide2-p"
                  v-for="slide in state.agence?.slide2 ?? []"
                  :key="slide.id ?? ''"
                >
                  <div class="inner">
                    <img :src="slide.img ?? ''" alt="" />
                    <h3>{{ slide.title ?? "" }}</h3>
                    <div class="sabine">
                      <p v-html="slide.content ?? ''"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide3" class="swiper-slide">
              <div id="die">
                <div
                  class="mongoue"
                  v-html="state.agence?.introslide3 ?? ''"
                ></div>
              </div>
              <!--  {{ windowWidth }} -->
              <div id="offmideh" v-if="windowWidth <= 1024">
                <div id="carousel-wrapper">
                  <div class="ensr">
                    <div
                      id="carouselExampleIndicators"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div
                          :index="item.Id"
                          class="carousel-item"
                          v-for="(item, index) in state.agence?.slide3 ?? []"
                          :key="item.Id"
                          :class="{ active: index === 0 }"
                        >
                          <div class="num">
                            <h3>{{ item.Id }}.&nbsp;</h3>
                          </div>
                          <div class="cont-slide">
                            <h3>{{ item.titre }}</h3>
                            <h4 v-html="item.nom"></h4>
                          </div>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="moufmideh"
                ref="swiperContainer2"
                v-if="windowWidth > 1024"
              >
                <div id="swide" class="swiper-wrapper">
                  <div
                    :index="item.Id"
                    class="swiper-slide"
                    v-for="item in state.agence?.slide3 ?? []"
                    :key="item.Id"
                    :peek-gutter="true"
                    :slides-per-page="1"
                  >
                    <div class="num">
                      <h3>{{ item.Id }}.&nbsp;</h3>
                    </div>
                    <div class="cont-slide">
                      <h3>{{ item.titre }}</h3>
                      <h4 v-html="item.nom"></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide4" class="swiper-slide">
              <ul id="tipster" class="slide4 full-height desktop">
                <li
                  class="stack-up"
                  :id="`lestack${item.id - 1}`"
                  v-for="item in state.agence?.slide4.slice().reverse() ?? []"
                  :key="item.id"
                >
                  {{ item.content }}
                </li>
              </ul>
              <div id="tipster2" class="mobile">
                <div class="lepos">SOCIAL MÉDIA</div>
                <div class="lepos">APPLICATIF</div>
                <div class="lepos">BRAND CONTENT</div>
                <div class="lepos">SITES VITRINE</div>
                <div class="lepos">PROGRAMME DE FIDÉLISATION</div>
                <div class="lepos">LOGOTYPES</div>
                <div class="lepos">SOLUTIONS DIGITALES</div>
                <div class="lepos">MARKETING</div>
                <div class="lepos">COACHING</div>
                <div class="lepos">CAMPAGNES 360</div>
                <div class="lepos">SEO/SEA</div>
                <div class="lepos">LANCEMENT DE MARQUE</div>
                <div class="lepos">DATA COLLECTION</div>
                <div class="lepos">CONCEPT RETAIL</div>
                <div class="lepos">NAMING</div>
                <div class="lepos">STRATÉGIE DE MARQUE</div>
                <div class="lepos">ANALYSE DES TENDANCES</div>
                <div class="lepos">ARCHITECTURE DE MARQUE</div>
                <div class="lepos">E-COMMERCE</div>
                <div class="lepos">CHARTE GRAPHIQUE</div>
                <div class="lepos">PUBLICITÉ</div>
                <div class="lepos">THÉATRALISATION DES VENTES</div>
                <div class="lepos">E-RÉPUTATION</div>
                <div class="lepos">APPLICATIONS MOBILES</div>
                <div class="lepos">SITES INSTITUTIONNELS</div>
                <div class="lepos">COMMUNICATION</div>
                <div class="lepos">M-COMMERCE</div>
                <div class="lepos">PACKAGING</div>
                <div class="lepos">ÉDITION AFFICHAGE</div>
                <div class="lepos">ACTIVATIONS DIGITALES</div>
                <div class="lepos">PRINT TV RADIO PRESSE</div>
                <div class="lepos">IDENTITÉ DE MARQUE</div>
                <div class="lepos">CAMPAGNE SOCIAL MEDIA</div>
                <div class="lepos">FORMATIONS</div>
                <div class="lepos">AUDIT</div>
              </div>
            </div>
            <div id="slide5" class="swiper-slide slide5-background">
              <div id="mouf" v-html="state.agence?.slide5 ?? ''"></div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div
          id="kpaflotage"
          class="menuflottant"
          :class="{ flipit: state.isSlide1Active, open: isSidebarOpen }"
        >
          <SocialLinksAlt />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide5-background {
  background: url("/img/visages.png") black;
  background-position: 50% 50%;
  transition: background-position 0.3s ease-in-out;
}

.slide5-background:hover {
  background-position: 50% 70%;
  /* Adjust the background position as needed */
}

@media screen and (max-width: 1024px) {
  .slide5-background {
    background-size: 100% !important;
    background-repeat: no-repeat !important;

    &:hover {
      background-position: 50% 50% !important;
    }
  }
}

#lagence {
  .sidebar {
    &.flipit {
    }
  }
}

#mouf {
  background: linear-gradient(to bottom, #80368c, #2c348b);
  font-size: 70px;
  font-weight: bold;
  line-height: 70px;
  position: absolute;
  padding: 0.75em 1em;
  transform: rotate(357deg);
  right: -14px;
  top: 260px;
}

.main {
  padding: 0;
  margin: 0;
}

.swiper-wrapper {
  /* background: linear-gradient(to bottom, #80368c, #2c348b); */
  background: linear-gradient(to bottom, #82368c 0%, #27348b 100%);
  /*  overflow: hidden; */
  height: auto;
}

@media screen and (max-width: 1024px) {
  .swiper {
    width: 100%;
    height: 100vh;
  }
  .swiper-wrapper {
    .swiper-slide {
      padding: 1em !important ;
    }
  }
  .swiper-horizontal {
    height: auto;
  }

  #slide5 {
    height: 255px !important;
    padding: 1em 1em 1em 1em;
    background-position: 0 0 !important;
    background-size: cover;
  }

  #slide4 {
    background: none !important;
    height: 720px !important;
    overflow: hidden;
  }

  #slide3 {
    .swiper-wrapper {
      flex-direction: row;
    }
  }

  #slide1,
  #slide2,
  #slide3 {
    background: none !important;
    height: auto !important;
  }

  .swiper-wrapper {
    flex-direction: column;
    overflow-y: scroll;
    min-height: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  #offmideh {
    display: block;
    height: auto !important;
    width: 80vw;
    overflow: hidden;
  }
  /* 
  #slide3 {
    #swidel {
    }
  }

  #slide1 {
    padding-top: 1em;

    h3 {
    }
  } */
}

@media screen and (min-width: 1025px) {
  .swiper {
    width: 100%;
    height: 100vh;
  }

  .swiper-horizontal {
    height: auto;
  }
}
</style>
