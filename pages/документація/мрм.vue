<script setup>
const exampledef = `
структура Елемент
  назва текст
  дочірні список
кінець

дія блок(дочірні список) Елемент
  вернути Елемент("div", дочірні)
кінець

дія строго(дочірні список) Елемент
  вернути Елемент("strong", дочірні)
кінець
`.trim();

const example = `
блок_привіт = (
  <мрм>
    <блок>
      Привіт, <строго>Людино</строго>!
    </блок>
  </мрм>
)

друк(блок_привіт)
`.trim();

useHead({
  title: "МРМ | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/розширення" next="/документація/вступ-до-теорії">
    <h1 class="docs-content-title">Мова розмітки Мавки</h1>
    <p>
      <span class="diia-word">МРМ</span> <span style="font-weight: 500" class="hljs-keyword"> це</span> вбудована в
      <span
        class="diia-word">Мавку</span> спеціальна мова розмітки. За
      синтаксисом схожа до HTML.
    </p>
    <blockquote>
      Функція в розробці. Сторінка доповнюється.
    </blockquote>
    <hr>
    <UiCodeBlock :files="exampledef" />
    <br>
    <UiCodeBlock :files="example" language="html" />
  </UiDocsWrapper>
</template>
