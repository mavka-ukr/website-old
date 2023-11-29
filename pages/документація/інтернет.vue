<script setup>
useHead({
  title: "Інтернет | Бібліотека | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/математика" next="/документація/сервер">
    <h1 class="docs-content-title">Інтернет</h1>
    <blockquote>
      Офіційний модуль в процесі написання. Тимчасове рішення: використання
      <NuxtLink
        class="link external"
        :href="encodeURI('/документація/розширення')"
        >розширень</NuxtLink
      >.
    </blockquote>
  </UiDocsWrapper>
</template>
