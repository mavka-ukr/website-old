<script setup>
const example = `
взяти "json"

друк(json.parse("""{"a": 2, "b": [1, 2, 3]}"""))

друк(json.stringify((а=2, б=[1, 2, 3])))
`.trim();

const jsonModuleMockup   = `
макет модуль json
  макет дія parse(значення текст) обʼєкт
  макет дія stringify(значення обʼєкт) текст
кінець
`.trim();

useHead({
  title: "JSON | Бібліотека | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/фс" next="/документація/автор">
    <h1 class="docs-content-title">JSON</h1>
    <p>
      JSON <span style="font-weight: 500" class="hljs-keyword">це</span> вбудований пак, що дозволяє зручно
      <span
        style="font-weight: 500" class="hljs-keyword">та</span> просто
      збирати та розбирати формат JSON.
    </p>
    <hr />
    <h3>Приклад</h3>
    <UiCodeBlock :files="example" />
    <hr>
    <UiCodeBlock :files="jsonModuleMockup" />
  </UiDocsWrapper>
</template>
