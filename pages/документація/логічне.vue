<script setup>
const logicYes = `
так
`.trim();

const logicNo = `
ні
`.trim();

const logicStructure = `
структура логічне
кінець
`.trim();

useHead({
  title: "Логічне | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/текст" next="/документація/список">
    <h1 class="docs-content-title">Логічне</h1>

    <p>
      Логічне
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>.
    </p>
    <p>
      Логічне описано спеціальною
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>логічне</code>.
    </p>
    <hr />
    <h3>Створення логічного</h3>
    <p>
      Логічне записується
      <span style="font-weight: 500" class="hljs-keyword">як </span>
      <code>так</code>
      <span style="font-weight: 500" class="hljs-keyword"> або </span>
      <code>ні</code>.
    </p>
    <UiCodeBlock :files="logicYes" />
    <br />
    <UiCodeBlock :files="logicNo" />
    <hr />
    <h3>Структура логічного</h3>
    <UiCodeBlock :files="logicStructure" />
  </UiDocsWrapper>
</template>
