<template>
  <audio style="position: fixed; display: none; z-index: -9999; opacity: 0; width: 0; height: 0; visibility: hidden"
         id="pluto"
         src="/interstellar.mp3"></audio>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>