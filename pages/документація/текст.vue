<script setup>
const text = `
"Привіт від Лесі!"
`.trim();

const text2 = `
"Стій, серце, стій! не бийся так шалено."
`.trim();

const textStructure = `
структура текст
  довжина число
кінець
`.trim();

useHead({
  title: "Текст | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/число" next="/документація/логічне">
    <h1 class="docs-content-title">Текст</h1>

    <p>
      Текст
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>.
    </p>
    <p>
      Текст описано спеціальною
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>текст</code>.
    </p>
    <hr />
    <h3>Створення тексту</h3>
    <p>Текст записується між символами подвійних лапок.</p>
    <UiCodeBlock :files="text2" />
    <hr />
    <h3>Структура тексту</h3>
    <UiCodeBlock :files="textStructure" />
  </UiDocsWrapper>
</template>
