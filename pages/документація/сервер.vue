<script setup>
const serverModuleMockup = `
макет модуль сервер
  Сервер Сервер
  Запит Запит
  Відповідь Відповідь
  Опції Опції

  запустити(
    обробник Дія,
    опції Опції = (),
    зворот Дія або пусто = пусто
  ) Сервер
кінець
`.trim();

const severStructure = `
структура Сервер
  обробник Дія
  опції Опції

  запустити(зворот Дія або пусто = пусто)
кінець
`.trim();

const severRequestStructure = `
структура Запит
  метод текст
  шлях текст
  заголовки словник
  тіло байти
кінець
`.trim();

const severResponseStructure = `
структура Відповідь
  код число = 200
  заголовки словник = ()
  тіло байти або текст = ""
кінець
`.trim();

const severOptionsStructure = `
структура Опції
  порт число = 80
кінець
`.trim();

const example = `
взяти "сервер"

дія обробити(запит)
  якщо запит.шлях == "/"
    вернути "Привіт!"
  кінець

  вернути сервер.Відповідь(404)
кінець

сервер.запустити(
  обробити,
  (порт=8080),
  (): друк("Сервер запущено на http://localhsot:8080.")
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
  <UiDocsWrapper prev="/документація/математика" next="/документація/запит">
    <h1 class="docs-content-title">Сервер</h1>
    <p>
      Сервер <span style="font-weight: 500" class="hljs-keyword">це</span> вбудований пак, що дозволяє зручно <span
      style="font-weight: 500" class="hljs-keyword">та</span> просто
      обробляти HTTP-запити.
    </p>
    <hr />
    <h3>Приклад</h3>
    <UiCodeBlock :files="example" />
    <hr>
    <UiCodeBlock :files="serverModuleMockup" />
    <br>
    <UiCodeBlock :files="severStructure" />
    <br>
    <UiCodeBlock :files="severRequestStructure" />
    <br>
    <UiCodeBlock :files="severResponseStructure" />
    <br>
    <UiCodeBlock :files="severOptionsStructure" />
  </UiDocsWrapper>
</template>
