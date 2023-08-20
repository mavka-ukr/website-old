<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";

defineProps({
  prev: String,
  next: String,
  title: String,
  loading: Boolean,
});

const sidebarShown = useState("sidebarShown", () => false);

addRouteMiddleware(() => {
  sidebarShown.value = false;
  window.scrollTo({
    top: 0,
  });
});
</script>

<template>
  <template v-if="title">
    <h1 class="docs-content-title">
      {{ title }}
    </h1>
  </template>

  <template v-if="loading">
    <div class="docs-loading">
      <img class="logo-light" src="@/assets/images/logo-light.png" alt="" />
      <img class="logo-dark" src="@/assets/images/logo-dark.png" alt="" />
    </div>
  </template>
  <template v-else>
    <slot />

    <div class="docs-buttons">
      <template v-if="prev">
        <NuxtLink :href="encodeURI(prev)" class="button button-outline">
          Відступ
        </NuxtLink>
      </template>
      <template v-if="next">
        <NuxtLink
          :href="encodeURI(next)"
          class="button button-outline next-button"
        >
          Наступ
        </NuxtLink>
      </template>
    </div>
  </template>
</template>
