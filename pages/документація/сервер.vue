<script setup>
const serverModuleMockup = `
макет модуль сервер
  Запит Запит
  Відповідь Відповідь
  Опції Опції

  запустити(
    обробник Дія, ;; дія(запит Запит) Відповідь або текст
    опції Опції = (),
    зворот Дія або пусто = пусто
  )
кінець
`.trim();

const severRequestStructure = `
структура Запит
  метод текст
  шлях текст
  заголовки словник
  тіло щось
кінець
`.trim();

const severResponseStructure = `
структура Відповідь
  код число = 200
  заголовки словник = ()
  тіло текст = ""
кінець
`.trim();

const severOptionsStructure = `
структура Опції
  порт число = 80
кінець
`.trim();

const example = `
взяти "сервер"

сервер.запустити(
  дія(запит)
    якщо запит.шлях == "/"
      вернути "Привіт!"
    кінець

    вернути сервер.Відповідь(404)
  кінець,
  (порт=8080),
  (): друк("Сервер запущено на порті 8080.")
)
`.trim();

useHead({
  title: "Сервер | Бібліотека | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/інтернет" next="/документація/автор">
    <h1 class="docs-content-title">Сервер</h1>
    <UiCodeBlock :files="serverModuleMockup" />
    <br>
    <UiCodeBlock :files="severRequestStructure" />
    <br>
    <UiCodeBlock :files="severResponseStructure" />
    <br>
    <UiCodeBlock :files="severOptionsStructure" />
    <hr />
    <h3>Приклад</h3>
    <UiCodeBlock :files="example" />
  </UiDocsWrapper>
</template>
