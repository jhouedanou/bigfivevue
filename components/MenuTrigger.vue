<script setup>
let toClose = ref(false);
</script>

<template>
  <div id="menumobile">
    <Logo :id="3" v-if="!isSidebarOpen" />
    <button
      id="menutrigger"
      @click="
        isSidebarOpen = !isSidebarOpen;
        isMainFull = !isMainFull;
        toClose = !toClose;
      "
      :class="{ dana: closeBlack }"
    >
      <NuxtImg v-if="toClose" src="/img/btn-close.png" alt="" />
      <NuxtImg v-if="!toClose" src="/img/btn-menu.png" alt="" />
    </button>
  </div>
</template>

<style scoped></style>
