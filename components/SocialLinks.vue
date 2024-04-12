<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const state = reactive({
  socialLinks: [],
});

onMounted(async () => {
  try {
    const socialResponse = await axios.get("/api/social.json");
    state.socialLinks = socialResponse.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div id="menureso" class="rest">
    <ul id="lesros" class="d-flex flex-row soc">
      <li>
        <a
          href="https://selectivecity.co.za/selective-live/"
          target="_blank"
          class="selectivebn"
        >
          <img loading="lazy" src="/img/selectivelive.svg" alt="" />
        </a>
      </li>
      <li v-for="link in state.socialLinks" :key="link.id">
        <a :href="link.url" target="_blank">
          <img loading="lazy" :src="link.icon" :alt="link.platform" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
