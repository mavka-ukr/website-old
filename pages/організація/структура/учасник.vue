<script setup>
useHead({
  title: "Учасник | Структура | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper
    prev="/організація/структура/проект"
    next="/організація/структура/центр"
  >
    <h1 class="docs-content-title">Учасник</h1>

    <p>
      <span class="diia-word">Учасник</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      <span style="font-weight: 500" class="hljs-keyword"> структурою </span>
      <span class="diia-word"> Органом</span>, що вказує на живу
      <span style="font-weight: 500" class="hljs-keyword"> або </span>
      віртуальну особу.
    </p>
    <p>
      Лише <span class="diia-word">Голова</span> має право реєструвати
      <span style="font-weight: 500" class="hljs-keyword"> та</span>
      вилучати <span class="diia-word">Учасників</span>.
    </p>
    <p>
      Кожен <span class="diia-word">Учасник</span> має рівне право голосу під
      час голосувань в <span class="diia-word">ОМ</span>.
    </p>
    <p>
      Кожен <span class="diia-word">Учасник</span> може бути в декількох
      <span class="diia-word">Центрах</span>
      <span style="font-weight: 500" class="hljs-keyword"> та </span>
      <span class="diia-word">Проектах</span>.
    </p>
    <p>
      Кожен <span class="diia-word">Учасник</span> має право бути обраним
      <span class="diia-word">Головою</span>.
    </p>
    <p>
      Кожен <span class="diia-word">Учасник</span> має право бути призначеним
      <span class="diia-word">Секретарем</span> в одному
      <span style="font-weight: 500" class="hljs-keyword"> або </span>
      декількох
      <span class="diia-word">Центрах</span>.
    </p>
  </UiDocsWrapper>
</template>
