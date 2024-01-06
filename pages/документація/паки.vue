<script setup>
const files = [
  {
    name: "запуск.м",
    text: `
взяти "привіт/1.0.0"

привіт.привіт()
`.trim()
  },
  {
    name: "результат",
    text: "Привіт від Лесі!",
    plaintext: true
  }
];
const files2 = [
  {
    name: "запуск.м",
    text: `
взяти пак "привіт" "1.0.0"
взяти привіт

друк(привіт)
`.trim()
  },
  {
    name: "результат",
    text: "<модуль привіт[привіт]>",
    plaintext: true
  }
];

useHead({
  title: "Паки | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/тестування" next="/документація/старт-паки">
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
      <a href="https://пак.укр" target="_blank" class="link external">пак.укр</a
      > та зберігаються в папці <code>.паки</code> в домашній папці.
    </p>
    <hr />
    <h3>Приклад підключення паку і взяття модуля з нього</h3>
    <UiCodeBlock :files="files2" />
    <hr />
    <p>
      Версіонування паків відбувається строго через
      <a
        href="https://semver.org/lang/uk/"
        target="_blank"
        class="link external"
      >semver</a
      >.
    </p>
  </UiDocsWrapper>
</template>
