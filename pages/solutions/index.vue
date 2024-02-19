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
      logo: solution.logo,
      slug: solution.slug,
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
        <li
          :style="{ backgroundImage: 'url(' + solution.homepageVisuel + ')' }"
          v-for="solution in solutions"
          :key="solution.id"
        >
          <NuxtLink :to="`/solutions/${solution.slug}`">
            <i
              :style="{ backgroundImage: 'url(' + solution.logo + ')' }"
              alt="logo"
            ></i
          ></NuxtLink>
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
      overflow: hidden;
      height: 80vh;
      width: 20vw;
      background-position: 50% 50%;
      background-size: cover;
      transition: background-size 0.5s ease-in-out; /* durée augmentée à 0.5s */
      background-repeat: no-repeat;
      a {
        display: block !important;
        height: 100%;
        width: 100%;
      }
      i {
        width: 235px;
        height: 235px;
        transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
        background-position: 0 0;
        position: absolute;
        top: 0;
        margin: auto;
        right: 0;
        bottom: 0;
        left: 0;
      }
      &:hover {
        background-size: 125%;
        transition: background-size 0.5s ease-in-out; /* durée augmentée à 0.5s */
        i {
          background-position: 0 235px;
        }
        .img {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
        }
      }
      img {
        object-fit: contain;
      }
    }
  }
}
.lecercell {
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
