<script setup>
import SocialLinks from "./SocialLinks.vue";
</script>
<template>
  <div id="leblablamarketing" class="mobile">
    <h4>Parlez nous de votre projet<br />nous allons le rendre réel</h4>
    <NuxtLink class="michou" id="michou" :to="`/contact`"
      >Contactez-nous</NuxtLink
    >
    <SocialLinks />
    <div id="muthaf">
      <a href="#">Mentions légales</a>
      <a href="#">Gestion des cookies</a>
    </div>
  </div>
</template>

<style scoped>
/* Add your component-specific styles here */
</style>
