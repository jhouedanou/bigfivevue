
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
                <div class="col-md-4 col-sm-12"
                  v-for="slide in state.agence?.slide2 ?? []"
                  :key="slide.id ?? ''">
                  <div class="inner">

                    <img :src="slide.img ?? ''"
                      alt="">
                    <h3>{{ slide.title ?? '' }}</h3>
                    <div class="sabine">
                      <p v-html="slide.content ?? ''"></p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div id="slide3"
              class="swiper-slide">
              <div id="die">
                <div class="mongoue"
                  v-html="state.agence?.introslide3 ?? ''"></div>

              </div>
              <div id="moufmideh">
                <div id="swide">
                  <div :id="`outerswide-${item.Id}`"
                    class="lemoukouagne"
                    v-for="item in state.agence?.slide3 ?? []"
                    :key="item.Id">
                    <div :id="`swide-${item.Id}`">
                      <h3>{{ item.Id }}. {{ item.titre }}</h3>
                      <h4>{{ item.nom }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide4"
              class="swiper-slide">
              <ul class="slide4 full-height">
                <li v-for="item in state.agence?.slide4.slice().reverse() ?? []"
                  :key="item.id">
                  {{ item.content }}
                </li>
              </ul>
            </div>

            <div id="slide5"
              class="swiper-slide slide5-background">
              <div id="mouf"
                v-html="state.agence?.slide5 ?? ''"></div>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div id="kpaflotage"
          class="menuflottant">
          <SocialLinksAlt />
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
import VueSsrCarousel from 'vue-ssr-carousel';

import anime from 'animejs/lib/anime.es.js';

const swiperContainer = ref(null);
const slide3Content = ref([]);
let swiperInstance;
const state = reactive({
  metadesc: '',
  pageTitle: '',
  agence: null,
  isSlide1Active: '',
});

onMounted(() => {
  const slide1Element = document.getElementById('slide1');
  if (slide1Element) {
    setTimeout(() => {
      slide1Element.classList.add('slide1-active');
    }, 1000);
  } else {
    slide1Element.classList.remove('slide1-active');
  }
});

onMounted(async () => {
  try {
    //recupération des textes de la page
    const textesGlobal = await axios.get('/api/agence.json');
    state.metadesc = textesGlobal.data.metadesc;
    state.pageTitle = textesGlobal.data.title;
    state.agence = textesGlobal.data;
    //selection span



    // Initialisation du swiper
    swiperInstance = new Swiper(swiperContainer.value, {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      keyboard: true,
      parallax: true,
      // autoplay: {
      //   delay: 5000, // delay between transitions in ms
      //   disableOnInteraction: false, // enable/disable autoplay on user interaction
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
    //gestion des animations

    //ajouter une classe animationslide1 une fois que swiperInstance a fini son initialisation

    //gestion de la disposition de la sidebar 
    swiperInstance.on('slideChange', () => {
      if (swiperInstance.activeIndex == 0) {
        state.isSlide1Active = true;
        document.querySelector('.slide1').classList.add('slide1-active');

      } else if (swiperInstance.activeIndex === 3) {
        const slide4Items = document.querySelectorAll('#slide4 li');
        /* slide4Items.forEach((item, index) => {
          anime({
            targets: item,
            translateY: ['0vh', '100vh'],
            opacity: [0, 1],
            duration: 1000,
            delay: (slide4Items.length - index - 1) * 1000,
            easing: 'easeOutCubic',
          });
        }); */
      } else {
        state.isSlide1Active = false;
      }
    })

    //gestion de l'animation de la slide 5
    // Get the slide 5 element
    const slide5Element = document.getElementById('slide5');

    // Add event listener for mouse movement
    slide5Element.addEventListener('mousemove', (event) => {
      // Calculate the new background position based on the mouse coordinates
      const posX = event.clientX / slide5Element.offsetWidth * 200;
      const posY = event.clientY / slide5Element.offsetHeight * 200;

      // Set the new background position
      slide5Element.style.backgroundPosition = `${posX}% ${posY}%`;
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
<style lang="scss" scoped>
.slide5-background {
  background: url('/img/visages.jpg');
  background-position: 50% 50%;
  transition: background-position 0.3s ease-in-out;
}

.slide5-background:hover {
  background-position: 50% 70%;
  /* Adjust the background position as needed */
}

#lagence {
  .sidebar {
    &.flipit {}
  }
}

#mouf {

  background: linear-gradient(to bottom, #80368c, #2c348b);
  font-size: 78px;
  font-weight: bold;
  line-height: 78px;
  position: absolute;
  padding: 1em;
  transform: rotate(357deg);
  right: 7px;
  top: 278px;
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
