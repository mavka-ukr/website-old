<script setup>
const requestModuleMockup = `
макет модуль запит
  Відповідь Відповідь

  тривала надіслати(
    метод текст = "GET",
    урл текст = "",
    заголовки словник = (),
    дані байти або текст = ""
  ) Відповідь
кінець
`.trim();

const requestResponseStructure = `
структура Відповідь
  код число
  заголовки словник
  дані байти
кінець
`.trim();

const example = `
взяти "запит"

чекати відповідь = запит.надіслати(
  "GET",
  "https://мавка.укр/тачки"
)

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
  <UiDocsWrapper prev="/документація/сервер" next="/документація/фс">
    <h1 class="docs-content-title">Запит</h1>
    <p>
      Запит <span style="font-weight: 500" class="hljs-keyword">це</span> вбудований пак, що дозволяє зручно <span
      style="font-weight: 500" class="hljs-keyword">та</span> просто
      надсилати HTTP-запити.
    </p>
    <hr />
    <h3>Приклад</h3>
    <UiCodeBlock :files="example" />
    <hr>
    <UiCodeBlock :files="requestModuleMockup" />
    <br>
    <UiCodeBlock :files="requestResponseStructure" />
  </UiDocsWrapper>
</template>
