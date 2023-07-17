
<template>
  <div id="lagence"
    class="container-fluid">
    <div class="row">
      <div id="sidebar"
        class="sidebar"
        :class="{ flipit: state.isSlide1Active }">
        <Logo :id="2" />
        <Menu :page="'/agence'" />
      </div>
      <div id="lemain"
        class="main primary-bg vh-100">
        <div class="swiper"
          ref="swiperContainer">
          <div class="swiper-wrapper">
            <div id="slide1"
              class="swiper-slide">
              <!-- presentation de l'agence -->
              <h3>{{ state.agence?.slide1?.title ?? '' }}</h3>
              <p v-html="state.agence?.slide1?.soustitre ?? ''"></p>
              <h3 v-html="state.agence?.slide1?.contenu ?? ''"></h3>
            </div>
            <div id="slide2"
              class="swiper-slide">
              <div class="row slide-inner">
                <div class="col-4"
                  v-for="slide in state.agence?.slide2 ?? []"
                  :key="slide.id ?? ''">
                  <img :src="slide.img ?? ''"
                    alt="">
                  <h3>{{ slide.title ?? '' }}</h3>
                  <p v-html="slide.content ?? ''"></p>
                </div>
              </div>
            </div>
            <div id="slide3"
              class="swiper-slide">
              <p v-html="state.agence?.introslide3 ?? ''"></p>
              <div id="swide">
                <div v-for="item in state.agence?.slide3 ?? []"
                  :key="item.Id">

                  <h3>{{ item.Id }}. {{ item.titre }}</h3>
                  <h4>{{ item.nom }}</h4>
                </div>
              </div>
            </div>
            <div id="slide4"
              class="swiper-slide">
              <ul>
                <li v-for="item in state.agence?.slide4 ?? []"
                  :key="item.id">
                  {{ item.content }}
                </li>
              </ul>
            </div>
            <div id="slide5"
              class="swiper-slide">
              <div id="mouf"
                v-html="state.agence?.slide5 ?? ''"></div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div id="kpaflotage">

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiperContainer = ref(null);
const slide3Content = ref([]);
let swiperInstance;
const state = reactive({
  metadesc: '',
  pageTitle: '',
  agence: null,
  isSlide1Active: '',
});

onMounted(async () => {
  try {
    //recupération des textes de la page
    const textesGlobal = await axios.get('/api/agence.json');
    state.metadesc = textesGlobal.data.metadesc;
    state.pageTitle = textesGlobal.data.title;
    state.agence = textesGlobal.data;

    // Initialisation du swiper
    swiperInstance = new Swiper(swiperContainer.value, {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      keyboard: true,
      parallax: true,
      //observer: true,
      //observeParents: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    //gestion de la disposition de la sidebar 
    swiperInstance.on('slideChange', () => {
      console.log(swiperInstance.activeIndex);
      if (swiperInstance.activeIndex == 0) {
        state.isSlide1Active = true;
      } else {
        state.isSlide1Active = false;
      }
    })
  } catch (error) {
    console.error(error);
  }
});

watchEffect(() => {
  useHead({
    title: state.pageTitle,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: state.metadesc,
      },
      {
        property: 'og:title',
        content: state.pageTitle,
      },
      {
        property: 'og:description',
        content: state.metadesc,
      },
    ],
  });
});
</script>
<style lang="scss" scoped>
#lagence {
  .sidebar {
    &.flipit {}
  }
}

.main {
  padding: 0;
  margin: 0;
}

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
</style>
