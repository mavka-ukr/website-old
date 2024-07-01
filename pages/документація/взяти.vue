<script setup>
const takePak = `
взяти пак привіт

привіт.привіт()
`.trim();

const takeBib = `
взяти біб читати

читати("Введіть ваші ПІБ: ")
`.trim();

const takeModule = `
взяти привіт

привіт.привіт()
`.trim();

const takeModule2 = `
взяти привіт як суперпривіт

суперпривіт.привіт()
`.trim();

const takeModule3 = `
взяти привіт [привіт]

привіт()
`.trim();

const takeModule4 = `
взяти привіт [привіт як суперпривіт]

суперпривіт()
`.trim();

const takeModule5 = `
взяти назва_підпапки.інший_модуль

друк(інший_модуль)
`.trim();

useHead({
  title: "Взяти | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/порівняння"
    next="/документація/тестування"
  >
    <h1 class="docs-content-title">Взяти</h1>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Взяти</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> інструкція
      <span class="diia-word">Мавки</span>, що дозволяє підключити
      <span style="font-weight: 500" class="hljs-keyword">модуль</span>.
    </p>
    <hr />
    <h3>Взяти з паків</h3>
    <UiCodeBlock :files="takePak" />
    <hr />
    <h3>Взяти з бібліотеки</h3>
    <UiCodeBlock :files="takeBib" />
    <hr />
    <h3>Взяти з проекту</h3>
    <UiCodeBlock :files="takeModule" />
    <br />
    <UiCodeBlock :files="takeModule2" />
    <br />
    <UiCodeBlock :files="takeModule3" />
    <br />
    <UiCodeBlock :files="takeModule4" />
    <br />
    <UiCodeBlock :files="takeModule5" />
  </UiDocsWrapper>
</template>
