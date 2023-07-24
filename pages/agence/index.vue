
<template>
  <div id="lagence"
    class="container-fluid">
    <PageLoader v-if="state.isLoading" />
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
                    <nuxt-img :src="slide.img ?? ''"
                      :lazy="true"
                      quality="80" /><!-- 
                    <img :src="slide.img ?? ''"
                      alt=""> -->
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
              <div id="moufmideh"
                ref="swiperContainer2">
                <div id="swide"
                  class="swiper-wrapper">
                  <div :index="item.Id"
                    class="swiper-slide"
                    v-for="item in state.agence?.slide3 ?? []"
                    :key="item.Id"
                    :peek-gutter=true
                    :slides-per-page="1">
                    <h3>{{ item.Id }}. {{ item.titre }}</h3>
                    <h4 v-html="item.nom"></h4>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide4"
              class="swiper-slide">
              <ul id="tipster"
                class="slide4 full-height">
                <li class="stack-up"
                  :id="`lestack${item.id - 1}`"
                  v-for="item in state.agence?.slide4.slice().reverse() ?? []"
                  :key="item.id">
                  <!-- <li class="stack-up"
                  v-for="item in state.agence?.slide4.slice(0, 3).reverse() ?? []"
                  :id="`lestack${item.id}`"
                  :key="item.id"> -->
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
import 'animate.css';

import PageLoader from '@/components/PageLoader.vue';
let swiperContainer = ref(null);
let swiperContainer2 = ref(null);
let slide3Content = ref([]);
let swiperInstance;
let swiperInstance2;
const state = reactive({
  metadesc: '',
  pageTitle: '',
  agence: null,
  isSlide1Active: '',
  isLoading: true
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
    // page loading
    state.isLoading = true;
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
      // parallax: true,
      autoplay: {
        delay: 5000, // delay between transitions in ms
        disableOnInteraction: true // enable/disable autoplay on user interaction
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
    //ajouter une classe animationslide1 une fois que swiperInstance a fini son initialisation

    //gestion de la disposition de la sidebar 
    swiperInstance.on('slideChange', () => {
      if (swiperInstance.activeIndex == 0) {
        state.isSlide1Active = true;
        document.querySelector('.slide1').classList.add('slide1-active');

      } else if (swiperInstance.activeIndex == 2) {
        state.isSlide1Active = false;
        // carousel horizontal
        swiperInstance2 = new Swiper(swiperContainer2.value, {
          direction: 'horizontal',
          slidesPerView: 1,
          spaceBetween: 10,
          //mousewheel: true,
          rewind: true,
          disabledOnInteraction: true,
          initialSlide: 0,
          speed: 2000,
          draggable: true,
          // keyboard: true,
          // parallax: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: true // enable/disable autoplay on user interaction
          },
        });

      } else if (swiperInstance.activeIndex === 3) {

        const tipster = document.querySelector('#tipster');
        const liste = tipster.querySelectorAll('li');
        const delai = 500;
        const increment = 1;
        const debutFadeOut = 19;
        let i = liste.length - increment; // 34
        let dernierElementdelaListe = liste.length - increment;
        const lEcart = liste.length - debutFadeOut; //34-15=19
        //pour les elements 34 à 15 de la liste, fadeInDownBig tous les 500ms
        //pour le 14e element de la liste, fadeOut du dernier element de la liste, le 34 et FadeInDownBig du 16e element. Supprimer le dernier element de la liste , de façon à ce que le 16e element devienne le 15e element de la liste
        //pour l'element 13 de la liste; fadeInDownBig et supprimer le dernier element de la liste. Supprimmer
        const interval = setInterval(() => {
          if (i >= debutFadeOut) {
            console.log('fadeIn' + i);
            liste[i].classList.add('animate__animated', 'animate__fadeInDownBig');
            i--;
          } else if (i < debutFadeOut && i >= 0) {
            console.log('fadeOut' + i);
            liste[i + lEcart].classList.remove('animate__fadeInDownBig');
            liste[i + lEcart].classList.add('animate__fadeOutDownBig', 'close');
            liste[i].classList.add('animate__animated', 'animate__fadeInDownBig');
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
    })

    //gestion de l'animation de la slide 5
    const slide5Element = document.getElementById('slide5');

    // Add event listener for mouse movement
    slide5Element.addEventListener('mousemove', (event) => {
      // Calculate the new background position based on the mouse coordinates
      const posX = event.clientX / slide5Element.offsetWidth * 200;
      const posY = event.clientY / slide5Element.offsetHeight * 200;

      // Set the new background position
      slide5Element.style.backgroundPosition = `${posX}% ${posY}%`;
    });
    // Set isLoading to false when everything is loaded
    state.isLoading = false;
  } catch (error) {
    console.error(error);
    state.isLoading = false;
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
