<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperContainer = ref(null);
let swiperInstance;
const state = reactive({
  metadesc: '',
  pageTitle: '',
  agence: null,
});

onMounted(async () => {
  try {
    const textesGlobal = await axios.get('/assets/json/global.json');
    state.metadesc = textesGlobal.data.agence.metadesc;
    state.pageTitle = textesGlobal.data.agence.title;
    state.agence = textesGlobal.data.agence;

    swiperInstance = new Swiper(swiperContainer.value, {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      keyboard: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      /* navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
            scrollbar: {
              el: '.swiper-scrollbar',
            }, */
    });
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
<template>
  <div id="lagence"
    class="container-fluid">
    <div class="row">
      <div id="sidebar"
        class="col-3">
        <Menu />
        <Logo :id="2" />
      </div>
      <div class="col-9 primary-bg vh-100">
        <div class="swiper"
          ref="swiperContainer">
          <div class="swiper-wrapper">
            <div id="slide1"
              class="swiper-slide">
              <!-- presentation de l'agence -->
              <h3>{{ state.agence?.slide1?.title ?? '' }}</h3>
              <p v-html="state.agence?.slide1?.soustitre ?? ''"></p>
              <h3>{{ state.agence?.slide1?.contenu ?? '' }}</h3>
            </div>
            <div id="slide2"
              class="swiper-slide">
              <div class="row slide-inner">
                <div class="col-4"
                  v-for="slide in state.agence?.slide2 ?? []"
                  :key="slide.id ?? ''">
                  <img :src="getIconPath(slide.img ?? '')"
                    alt="">
                  <h3>{{ slide.title ?? '' }}</h3>
                  <p v-html="slide.content ?? ''"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">Slide 3</div>
            <!-- Ajoutez d'autres slides ici -->
          </div>
          <div class="swiper-pagination"></div><!-- 
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  /* Styles pour les slides */
}
</style>
