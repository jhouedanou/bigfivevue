<script setup>
let toClose = ref(false);

</script>

<template>
	<button id="menutrigger"
		@click="isSidebarOpen = !isSidebarOpen; isMainFull = !isMainFull; toClose = !toClose">
		<span v-if="!toClose"
			class="material-symbols-rounded">menu</span>
		<span v-if="toClose"
			class="material-symbols-rounded">close</span>
	</button>
</template>

<style scoped></style>