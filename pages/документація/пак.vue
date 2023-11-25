<script setup>
const files = [
  {
    name: "привіт.м",
    text: `
взяти "привіт/0.0.1"

привіт.привіт()
`.trim(),
  },
  {
    name: "результат",
    text: "Привіт від Лесі!",
    plaintext: true,
  },
];
const files2 = [
  {
    name: "програма.м",
    text: `
взяти "дід"

друк(дід)
`.trim(),
  },
  {
    name: "результат",
    text: "<модуль дід[розібрати, зібрати]>",
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
    <p>Є два типи паків: вбудовані та зовнішні.</p>
    <p>
      Вбудовані паки це паки, що надаються
      <span class="diia-word">Мавкою</span>. Такі паки не мають версії.
    </p>
    <p>
      Зовнішні паки це паки, що створені користувачами і завантажуються з
      <a href="https://пак.укр" target="_blank" class="link external">пак.укр</a
      >. Такі паки мають версії.
    </p>
    <hr />
    <UiCodeBlock :files="files2" />
    <br />
    <UiCodeBlock :files="files" />
    <hr />
    <p>
      Версіонування зовнішніх паків відбувається строго через
      <a
        href="https://semver.org/lang/uk/"
        target="_blank"
        class="link external"
        >semver</a
      >.
    </p>
    <hr />
    <blockquote>Сторінка доповнюється.</blockquote>
  </UiDocsWrapper>
</template>
