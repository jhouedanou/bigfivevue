<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";
const state = reactive({
  menus: [],
});
const props = defineProps({
  page: {
    type: String,
    required: true,
  },
});
onMounted(async () => {
  try {
    const menuLinks = await axios.get("/api/menu.json");
    state.menuLinks = menuLinks.data;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div class="menucontainer">
    <ul id="menulinks">
      <li
        v-for="link in state.menuLinks"
        :key="link.id"
        :class="{ active: link.url === props.page }"
      >
        <nuxt-link :to="link.url">{{ link.nom }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>
