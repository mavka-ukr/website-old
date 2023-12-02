<script setup>
const takePak = `
взяти "привіт/1.0.0"

привіт.привіт()
`.trim();

const takePak2 = `
взяти "привіт/1.0.0" як суперпривіт

суперпривіт.привіт()
`.trim();

const takePak3 = `
взяти "привіт/1.0.0" привіт

привіт()
`.trim();

const takePak4 = `
взяти "привіт/1.0.0" привіт як суперпривіт

суперпривіт()
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
взяти привіт привіт

привіт()
`.trim();

const takeModule4 = `
взяти привіт привіт як суперпривіт

суперпривіт()
`.trim();

const takeModule5 = `
взяти назва_підпапки.інший_модуль

друк(інший_модуль)
`.trim();

useHead({
  title: "Взяти | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/порівняння" next="/документація/тестування">
    <h1 class="docs-content-title">Взяти</h1>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Взяти</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> вказівка <span class="diia-word">Мавки</span>,
      що дозволяє підключити пак <span style="font-weight: 500" class="hljs-keyword"> або</span>
      інший модуль до вашого модуля.
    </p>
    <hr>
    <h3>Взяти пак</h3>
    <UiCodeBlock :files="takePak" />
    <br>
    <UiCodeBlock :files="takePak2" />
<!--    <br>-->
<!--    <UiCodeBlock :files="takePak3" />-->
<!--    <br>-->
<!--    <UiCodeBlock :files="takePak4" />-->
    <hr>
    <h3>Взяти модуль</h3>
    <UiCodeBlock :files="takeModule" />
    <br>
    <UiCodeBlock :files="takeModule2" />
<!--    <br>-->
<!--    <UiCodeBlock :files="takeModule3" />-->
<!--    <br>-->
<!--    <UiCodeBlock :files="takeModule4" />-->
    <br>
    <UiCodeBlock :files="takeModule5" />
  </UiDocsWrapper>
</template>
