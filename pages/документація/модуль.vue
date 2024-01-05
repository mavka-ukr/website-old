<script setup>
const module = `
модуль двигуни
  структура ІоннийДвигун
    ;; властивості
  кінець

  структура РеактивнийДвигун
    ;; властивості
  кінець

  дати ІоннийДвигун
  дати РеактивнийДвигун
кінець
`.trim();

const moduleStructure = `
структура Модуль
кінець
`.trim();

useHead({
  title: "Модуль | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/словник" next="/документація/умова">
    <h1 class="docs-content-title">Модуль</h1>

    <p>
      Модуль
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, в якому виконуються
      інструкції.
    </p>
    <p>
      Властивостями модуля
      <span style="font-weight: 500" class="hljs-keyword">є</span> видані
      <span style="font-weight: 500" class="hljs-keyword">субʼєкти</span>.
    </p>
    <p>
      Модуль описано спеціальною
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>Модуль</code>.
    </p>
    <hr />
    <h3>Визначення модуля</h3>
    <p>
      Модуль може бути визначений за допомогою ключового слова
      <code>модуль</code>. Також необхідно вказати назву модуля
      <span style="font-weight: 500" class="hljs-keyword">та</span> його тіло у
      вигляді інструкцій.
    </p>
    <UiCodeBlock :files="module" />
    <hr />
    <h3>Структура модуля</h3>
    <UiCodeBlock :files="moduleStructure" />
  </UiDocsWrapper>
</template>
