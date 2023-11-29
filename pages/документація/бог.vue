<script setup>
const x = `
бог це Отець() та Син() та Дух("Святий")
`.trim();

useHead({
  title: "Бог | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/розширення" next="/документація/математика">
    <h1 class="docs-content-title">Бог</h1>
    <UiCodeBlock :files="x" />
  </UiDocsWrapper>
</template>
