<script setup>
useHead({
  title: "Інструкція | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/вказівка" next="/документація/обʼєкт">
    <h1 class="docs-content-title">Інструкція</h1>
    <p>
      Інструкція <span style="font-weight: 500" class="hljs-keyword"> це </span>
      набір вказівок.
    </p>
    <p>Існують такі інструкції:</p>
    <ul>
      <li>
        <code>створити дію та визначити субʼєкт</code>
      </li>
      <li>
        <code>створити структуру та визначити субʼєкт</code>
      </li>
      <li>
        <code>створити модуль та визначити субʼєкт</code>
      </li>
    </ul>
  </UiDocsWrapper>
</template>
