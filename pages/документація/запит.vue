<script setup>
const requestModuleMockup = `
макет модуль запит
  макет структура Відповідь
    код число
    заголовки словник
    дані байти
  кінець

  макет тривала дія надіслати(
    метод текст = "GET",
    урл текст = "",
    заголовки словник = (),
    дані байти або текст = ""
  ) Відповідь
кінець
`.trim();

const example = `
взяти біб запит

чекати відповідь = запит.надіслати(
  "GET",
  "https://мавка.укр/тачки"
)

друк(відповідь)
`.trim();

useHead({
  title: "Запит | Бібліотека | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/сервер" next="/документація/фс">
    <h1 class="docs-content-title">Запит</h1>
    <p>
      Запит
      <span style="font-weight: 500" class="hljs-keyword">це</span> вбудований
      модуль, що дозволяє зручно
      <span style="font-weight: 500" class="hljs-keyword">та</span> просто
      надсилати HTTP-запити.
    </p>
    <hr />
    <h3>Приклад</h3>
    <UiCodeBlock :files="example" />
    <hr />
    <UiCodeBlock :files="requestModuleMockup" />
  </UiDocsWrapper>
</template>
