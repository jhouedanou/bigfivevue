<template>
  <ContenuAltLayout>
    <div id="realisationList">
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
          <NuxtImg v-if="toClose" src="/img/btn-close.png" alt="" />
          <NuxtImg
            v-if="!toClose"
            src="/img/btn-menu.png"
            alt=""
            class="desktop"
            :options="{ quality: 80, webp: true }"
          />
          <NuxtImg
            v-if="!toClose"
            src="/img/btn-menu-mobile.svg"
            alt=""
            class="mobile"
            :options="{ quality: 80, webp: true }"
          />
        </button>
      </div>
      <div
        id="sidebar"
        class="sidebar rakim"
        :class="{ flipit: state.isSlide1Active, open: isSidebarOpen }"
      >
        <Logo :id="2" />
        <Menu :page="'/realisations'" />
        <Menumobile />
      </div>
      <div
        id="lemain"
        class="main primary-bg vh-100"
        :class="{ full: isMainFull }"
      >
        <div class="swiper" ref="swiperContainer">
          <div class="swiper-wrapper">
            <div
              v-for="realisation in state.realisations"
              :key="realisation.lien"
              :id="`slide-${realisation.id}`"
              class="swiper-slide"
              :style="{
                backgroundImage:
                  windowWidth > 1024
                    ? `url(${realisation.image})`
                    : `url(${realisation.bannieremobile})`,
              }"
            >
              <div class="cartouche">
                <span>{{ realisation.client }}</span>
                <h3 v-html="realisation.titre"></h3>
                <NuxtLink
                  v-if="windowWidth >= 1024"
                  :to="`/realisations/${realisation.lien}`"
                  class="btn"
                  >Voir plus</NuxtLink
                >
                <NuxtLink
                  v-if="windowWidth < 1024"
                  :to="`/realisations/${realisation.lien}`"
                  class="btn"
                  >Voir</NuxtLink
                >
              </div>
            </div>

            <div class="swiper-slide" id="rencontres">
              <h3>RENCONTRONS-NOUS</h3>
              <div id="untel">
                <form
                  action="https://public.herotofu.com/v1/1c419dc0-1cd8-11ee-b0a7-9f000c4c1540"
                  method="post"
                  accept-charset="UTF-8"
                >
                  <div class="form-group" id="form-element">
                    <div>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        required
                      />
                    </div>
                    <div>
                      <input
                        name="societe"
                        id="societe"
                        type="text"
                        placeholder="Ma société"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input type="submit" value="Envoyer" />
                    <div
                      style="
                        text-indent: -99999px;
                        white-space: nowrap;
                        overflow: hiddendsqd;
                        position: absolute;
                      "
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="_gotcha"
                        tabindex="-1"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </ContenuAltLayout>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import ContenuAltLayout from "@/layouts/ContenuRealisations.vue";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import PageLoader from "@/components/PageLoader.vue";
const swiperContainer = ref(null);
let swiperInstance;
let isMainFull = ref(true);
let isSidebarOpen = ref(false);
let toClose = ref(false);
let closeBlack = ref(false);
const windowWidth = ref(0);
const state = reactive({
  realisations: null,
  isLoading: true,
});
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", updateWindowWidth);
});
onMounted(async () => {
  try {
    state.isLoading = true;
    //recuperer les realisations
    const response = await axios.get("/api/clients.json");
    state.realisations = response.data;

    // Initialisation du swiper seulement après que state.realisations a été rempli et si windowWidth.value est supérieur à 1024
    if (windowWidth.value > 1024) {
      swiperInstance = new Swiper(swiperContainer.value, {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        keyboard: true,
        rewind: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 5000, // delay between transitions in ms
          disableOnInteraction: true, // enable/disable autoplay on user interaction
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    state.isLoading = false;
  } catch (error) {
    state.isLoading = false;
  }
});
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  background: linear-gradient(to bottom, #80368c, #2c348b);
  height: auto;
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
}

.realisationwrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
}

.cartouche {
  position: absolute;
  padding: 1em;

  span {
    font-family: "new-order", sans-serif;
    font-size: 50px;
    line-height: 52px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
  }

  h3 {
    font-family: "new-order", sans-serif;
    font-size: 112px;
    line-height: 110px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
  }

  a {
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "new-order", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    font-weight: 600;
    border: 2px solid white;
    border-radius: 20px;
    top: 30px;
  }
}

.realisationwrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-horizontal {
  width: 100%;
  height: 100vh;
}

.fullpage-wrapper {
  position: relative;
}

.swiper-slide {
  height: 100vh;
}
@media screen and (max-width: 1024px) {
  .cartouche {
    padding: 2em !important;
    width: auto !important;
    display: block !important;
    max-width: 83vw !important;
    a {
      border: 1px solid white !important;
      font-size: 11px !important;
      height: 32px !important;
      width: 100px !important;
      line-height: 20px !important;
    }
  }
  .swiper-slide {
    height: 230px !important;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
  }
  .swiper-wrapper {
    flex-direction: column;
    overflow: scroll;
    height: 100vh;
  }
  .swiper-slide {
    background-position: center !important;
    background-size: cover !important;
  }
}

@media screen and (min-width: 1024px) {
  .cartouche {
    padding: 0em !important;
  }
  .swiper-slide {
    height: 100vh;
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
  }
}
.swiper-slide {
  img {
    width: auto;
    height: 100vh;
  }

  .cartouche {
    width: 100vw !important;
    max-width: 86vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .realisationwrapper {
    min-height: 100vh !important;
    height: 100% !important;
    margin: 0;
    padding: 0;
  }
}

body,
html {
  height: 100%;
}

body.slider__body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.slider__container {
  position: fixed;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform 500ms ease-in-out;
  transition: -webkit-transform 500ms ease-in-out;
  -o-transition: transform 500ms ease-in-out;
  transition: transform 500ms ease-in-out;
}

.slider__page {
  position: relative;
  width: 100%;
  height: 100%;
}

.slider__indicators {
  position: fixed;
  left: 18px;
  top: 50%;
  z-index: 2;
  margin: 0;
  padding: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.slider__indicator {
  display: block;
  width: 10px;
  height: 10px;
  margin: 10px 0;
  border-radius: 100px;
  background-color: #fff;
  cursor: default;
}

.slider__indicator--active {
  opacity: 0.3;
}
</style>
