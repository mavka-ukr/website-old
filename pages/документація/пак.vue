<script setup>
const files = [
  {
    name: "привіт.м",
    text: `
взяти "хмарний.пак.укр/привіт/0.0.1"

привіт()
`.trim(),
  },
  {
    name: "результат",
    text: "Привіт від Лесі!",
    plaintext: true,
  },
];

useHead({
  title: "Пак | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/чародія" next="/документація/розширення">
    <h1 class="docs-content-title">Пак</h1>
    <p>
      Пак <span style="font-weight: 500" class="hljs-keyword">це</span> один
      <span style="font-weight: 500" class="hljs-keyword">або</span>
      декілька модулів, що зберігаються поза програмою
      <span style="font-weight: 500" class="hljs-keyword">і</span> можуть бути
      підключені за потреби.
    </p>
    <hr />
    <UiCodeBlock :files="files" />
    <hr />
    <blockquote>Сторінка доповнюється.</blockquote>
  </UiDocsWrapper>
</template>
