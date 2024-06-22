<script setup>
useHead({
  title: "Проект | Структура | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper
    prev="/організація/структура/орган"
    next="/організація/структура/учасник"
  >
    <h1 class="docs-content-title">Проект</h1>

    <p>
      <span class="diia-word">Проект</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      загальною
      <span style="font-weight: 500" class="hljs-keyword"> структурою</span> для
      багатьох субʼєктів <span class="diia-word"> ОМ</span>.
    </p>
    <p>
      <span class="diia-word">Проект</span>
      може бути лише в одному <span class="diia-word">Центрі</span>
      <span style="font-weight: 500" class="hljs-keyword"> та </span>
      мати декілька <span class="diia-word">Учасників</span>.
    </p>
  </UiDocsWrapper>
</template>
