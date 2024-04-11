<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const state = reactive({
  logo: [],
});

onMounted(async () => {
  try {
    const response = await axios.get("/api/graphiques.json");
    state.logo = response.data;
  } catch (error) {
    console.log(error);
  }
});

const selectedLogo = computed(() => {
  return state.logo.find((logo) => logo.id === props.id);
});
</script>
<template>
  <div class="logocontainer">
    <nuxt-link to="/">
      <!--     <img
        v-if="selectedLogo"
        :src="selectedLogo.src"
        alt="Big Five Solutions"
        class="img-fluid"
      /> -->
      <img
        v-if="selectedLogo"
        :src="selectedLogo.src"
        alt="Big Five Solutions"
        class="img-fluid"
      />
    </nuxt-link>
  </div>
</template>
