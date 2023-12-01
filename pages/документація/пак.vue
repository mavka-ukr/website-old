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
взяти "дід"

друк(дід)
`.trim()
  },
  {
    name: "результат",
    text: "<модуль дід[розібрати, зібрати]>",
    plaintext: true
  }
];

useHead({
  title: "Пак | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
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
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Є</span> два типи
      паків: вбудовані
      <span style="font-weight: 500" class="hljs-keyword">та</span> звичайні.
    </p>
    <p>
      Вбудовані паки
      <span style="font-weight: 500" class="hljs-keyword">це</span> паки, що
      надаються <span class="diia-word">Мавкою</span>. Такі паки не мають
      версії.
    </p>
    <p>
      Звичайні паки
      <span style="font-weight: 500" class="hljs-keyword">це</span> паки, що
      створені користувачами
      <span style="font-weight: 500" class="hljs-keyword">і</span>
      завантажуються з
      <a href="https://пак.укр" target="_blank" class="link external">пак.укр</a
      >. Такі паки мають версії.
    </p>
    <p>
      Звичайні паки зберігаються в папці <code>.паки</code> в домашній папці.
    </p>
    <hr />
    <h3>Приклад підключення вбудованого паку</h3>
    <UiCodeBlock :files="files2" />
    <hr />
    <h3>Приклад підключення звичайного паку</h3>
    <UiCodeBlock :files="files" />
    <hr />
    <p>
      Версіонування звичайних паків відбувається строго через
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
