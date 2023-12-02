<script setup>
const helloDirStructure = `
привіт/
└── 1.0.0/
    ├── запуск.м
    └── привіт.м
`.trim();

const helloFiles = [
  {
    name: "запуск.м",
    text: `
взяти привіт

привіт.привіт()
`.trim()
  },
  {
    name: "привіт.м",
    text: `
дія привіт()
  друк("Привіт від Лесі!")
кінець

дати привіт
`.trim()
  }
];

useHead({
  title: "Запуск-паки | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/тестування" next="/документація/приклади">
    <h1 class="docs-content-title">Запуск-паки</h1>

    <p>
      Запуск-паки
      <span style="font-weight: 500" class="hljs-keyword">це</span> паки
      <span class="diia-word">Мавки</span>, які можна запускати прямо у вашому терміналі.
    </p>
    <p>
      Запуск-паки завантажуються з <a href="https://пак.укр" target="_blank" class="link external">пак.укр</a>
      <span style="font-weight: 500" class="hljs-keyword"> та</span> зберігаються в папці <code>.паки</code> в домашній
      папці.
    </p>
    <p>
      Запуск-паки запускаються командою <code>пак</code>.
    </p>
    <UiCodeBlock :files="'пак привіт/1.0.0'" plaintext />
    <hr />
    <h3>Створення запуск-паку</h3>
    <p>
      Запуск-пак нічим не відрізняється від звичайного паку, окрім того, що в ньому
      <span style="font-weight: 500" class="hljs-keyword"> є</span> файл <code>запуск.м</code>.
      Цей файл <span style="font-weight: 500" class="hljs-keyword">і</span> виконується при запуску паку.
    </p>
    <hr>
    <h3>Приклад</h3>
    <p>Приклад паку <a href="https://пак.укр/привіт" target="_blank" class="link external">пак.укр/привіт</a>.</p>
    <h4>Структура</h4>
    <UiCodeBlock :files="helloDirStructure" plaintext />
    <h4>Файли</h4>
    <UiCodeBlock :files="helloFiles" />
  </UiDocsWrapper>
</template>
