<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const state = reactive({
  metadesc: ''
});
const getIconPath = (iconPath) => {
  return `/${iconPath}`;
};
onMounted(async () => {
  try {
    const textesGlobal = await axios.get('/assets/json/global.json');
    state.metadesc = textesGlobal.data.agence.metadesc;
    state.pageTitle = textesGlobal.data.agence.title;
    state.agence = textesGlobal.data.agence;
  } catch (error) {
    console.error(error);
  };
});
watchEffect(() => {
  useHead({
    title: state.pageTitle, // Use new variable
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: state.metadesc
      },
      // Open Graph Tags
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
        <div id="fullpage">
          <div id="presentationagence"
            class="section">
            <h3>{{ state.agence?.slide1title ?? '' }}</h3>
            <p v-html="state.agence?.slide1soustitre ?? ''"></p>
            <h3>{{ state.agence?.slide1fincontenu ?? '' }}</h3>
          </div>
          <div class="section">s2</div>
          <div class="section">3</div>
          <div class="section">4</div>
          <div class="section">5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
