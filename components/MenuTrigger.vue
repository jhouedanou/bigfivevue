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
      <img v-if="toClose" src="/img/btn-close.svg" alt="" />
      <img v-if="!toClose" src="/img/btn-menu.svg" alt="" />
    </button>
  </div>
</template>

<style scoped></style>
