<script setup>
const example = `
взяти "фс"

чекати фс.записати("./привіт.txt", "Привіт!")

чекати привіт = фс.прочитати("./привіт.txt", "текст")

друк(привіт)
`.trim();

const fsModuleMockup = `
макет модуль фс
  прочитати(шлях текст, тип текст = "байти") байти або текст
  записати(шлях текст, дані байти або текст) ніщо
  дописати(шлях текст, дані байти або текст) ніщо
  перейменувати(шлях текст, новий_шлях текст) ніщо
  видалити(шлях текст) ніщо
кінець
`.trim();

useHead({
  title: "Файлова система | Бібліотека | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/запит" next="/документація/автор">
    <h1 class="docs-content-title">Файлова система</h1>
    <p>
      Файлова система <span style="font-weight: 500" class="hljs-keyword">це</span> вбудований пак, що дозволяє зручно
      <span
        style="font-weight: 500" class="hljs-keyword">та</span> просто
      працювати з файлами на вашому компʼютері.
    </p>
    <hr />
    <h3>Приклад</h3>
    <UiCodeBlock :files="example" />
    <hr>
    <UiCodeBlock :files="fsModuleMockup" />
  </UiDocsWrapper>
</template>
