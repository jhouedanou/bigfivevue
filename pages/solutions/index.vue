<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import SolutionsLayout from "@/layouts/SolutionsLayout.vue";
const solutions = ref([]);
onMounted(async () => {
  try {
    const listeDesSolutions = await axios.get("api/solutions.json");
    const data = listeDesSolutions.data;
    solutions.value = data.map((solution) => ({
      id: solution.id,
      homepageVisuel: solution.homepageVisuel,
      nomsolution: solution.nomsolution,
    }));
  } catch (error) {
    console.log("Pas de solutions Big Five à afficher");
  }
});
</script>

<template>
  <SolutionsLayout>
    <div id="listedessolutions">
      <ul class="d-flex flex-row">
        <li v-for="solution in solutions" :key="solution.id">
          <img :src="solution.homepageVisuel" alt="logo" />
          <p class="lecercell">{{ solution.nomsolution }}</p>
        </li>
      </ul>
    </div>
  </SolutionsLayout>
</template>

<style lang="scss" scoped>
#listedessolutions {
  ul {
    position: relative;
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      list-style: none;
      list-style-type: none;
      margin: 0;
      padding: 0;
      img {
        object-fit: contain;
      }
    }
  }
}
.lecercell {
  background: red;
  display: flex;
  width: 254px;
  height: 254px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 100%;
}
</style>
