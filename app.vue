<script setup>
onBeforeMount(() => {
  if (window.location.hostname !== 'localhost' && window.location.hostname !== 'мавка.укр') {
    window.location.href = 'https://мавка.укр';
  }
});
</script>

<template>
  <NuxtPage />
</template>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
