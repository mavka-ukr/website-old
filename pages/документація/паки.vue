<script setup>
const files2 = [
  {
    name: "паки/привіт/привіт.м",
    text: `
дія привіт()
  друк("Привіт від Лесі!")
кінець

дати привіт
`.trim(),
  },
  {
    name: "старт.м",
    text: `
взяти пак привіт

друк(привіт)
`.trim(),
  },
  {
    name: "результат",
    text: "<модуль привіт[привіт]>",
    plaintext: true,
  },
];

useHead({
  title: "Паки | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/тестування" next="/документація/діалог">
    <h1 class="docs-content-title">Паки</h1>
    <p>
      Пак <span style="font-weight: 500" class="hljs-keyword">це</span> один
      <span style="font-weight: 500" class="hljs-keyword">або</span>
      декілька модулів, що зберігаються поза програмою
      <span style="font-weight: 500" class="hljs-keyword">і</span> можуть бути
      підключені за потреби.
    </p>
    <p>
      Паки завантажуються з
      <a href="https://пак.укр" target="_blank" class="link external"
        >пак.укр</a
      >
      <span style="font-weight: 500" class="hljs-keyword"> та</span>
      зберігаються в папці <code>паки</code> на рівні з головним
      <span style="font-weight: 500" class="hljs-keyword">модулем</span>
      проекту.
    </p>
    <hr />
    <h3>Приклад взяття модуля з паку</h3>
    <UiCodeBlock :files="files2" />
  </UiDocsWrapper>
</template>
