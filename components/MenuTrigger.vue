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
      <img v-if="toClose" src="@/assets/img/btn-close.png" alt="" />
      <img v-if="!toClose" src="@/assets/img/btn-menu.png" alt="" />
    </button>
  </div>
</template>

<style scoped></style>
