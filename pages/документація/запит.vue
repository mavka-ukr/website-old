<script setup>
const requestModuleMockup = `
макет модуль запит
  Відповідь Відповідь

  тривала надіслати(
    метод текст = "GET",
    урл текст = "",
    заголовки словник = (),
    тіло байти або текст = ""
  ) Відповідь
кінець
`.trim();

const requestResponseStructure = `
структура Відповідь
  код число
  заголовки словник
  тіло байти
кінець
`.trim();

const example = `
взяти "запит"

чекати відповідь = запит.надіслати("GET", "http://localhost:8080")

друк(відповідь)
`.trim();

useHead({
  title: "Запит | Бібліотека | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/сервер" next="/документація/автор">
    <h1 class="docs-content-title">Запит</h1>
    <UiCodeBlock :files="requestModuleMockup" />
    <br>
    <UiCodeBlock :files="requestResponseStructure" />
    <hr />
    <h3>Приклад</h3>
    <UiCodeBlock :files="example" />
  </UiDocsWrapper>
</template>
