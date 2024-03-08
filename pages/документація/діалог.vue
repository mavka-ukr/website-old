<script setup>
const exampledef = `
структура блок
  дочірні список
кінець

структура строго
  колір текст
  дочірні список
кінець
`.trim();

const example = `
блок_привіт = (
  <блок>
    Привіт, <строго колір="зелений">Людино</строго>!
  </блок>
)

друк(блок_привіт)
`.trim();

const examplediia = `
блок_суми = (
  <блок>
    2 + 2 = <дія>2 + 2</дія>
  </блок>
)

друк(блок_суми)
`.trim();

useHead({
  title: "Діалог | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/старт-паки" next="/документація/мрм">
    <h1 class="docs-content-title">Діалог</h1>
    <p>
      <span class="diia-word">Діалог Мавки</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> інструмент
      для виконання вказівок в режимі діалогу. Ви пишете вказівку,
      <span class="diia-word">Мавка</span> її виконує
      <span style="font-weight: 500" class="hljs-keyword"> і</span>,
      <span style="font-weight: 500" class="hljs-keyword"> якщо</span>
      результат
      <span style="font-weight: 500" class="hljs-keyword"> не є</span>
      пусто, відповідає.
    </p>
    <p>
      Для цього потрібно запускати <span class="diia-word">Мавку</span> з ядром
      <span class="diia-word">МаМа</span> в терміналі без аргументів.
    </p>
    <UiCodeBlock files="мавка" />
  </UiDocsWrapper>
</template>
