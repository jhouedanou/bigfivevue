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
  } catch (error) {
    console.error(error);
  }
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
        class="col-2">
        <Menu />

      </div>
      <div class="col-10 primary-bg vh-100">
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
