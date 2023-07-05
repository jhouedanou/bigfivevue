<script setup>
import { reactive } from 'vue';
import ContenuLayout from '@/layouts/contenu.vue';

const state = reactive({
  // define reactive state properties here
});

// perform async operations when the component is mounted
(async () => {
  try {
    // make API requests or perform other async operations here
  } catch (error) {
    console.error(error);
  }
})();
const layout = 'contenu';
</script>

<template>
  <div>
    <ContenuLayout>
      Contenu de la page

    </ContenuLayout>
  </div>
</template>

<style scoped></style>
