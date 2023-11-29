<script setup>
const x = `
автор це Богданович() та Давид() та Прихожденко()
`.trim();

useHead({
  title: "Автор | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/запит" next="/документація/подяка">
    <h1 class="docs-content-title">Автор</h1>
    <UiCodeBlock :files="x" />
  </UiDocsWrapper>
</template>
