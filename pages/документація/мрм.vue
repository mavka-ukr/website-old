<script setup>
const exampledef = `
структура Тег
  назва текст
  атрибути словник = ()
  дочірні список = []
кінець

дія блок(дочірні список) Тег
  вернути Тег("div", (), дочірні)
кінець

дія строго(колір текст = "", дочірні список) Тег
  вернути Тег("strong", ("колір"=колір), дочірні)
кінець
`.trim();

const example = `
блок_привіт = (
  <блок>
    Привіт, <строго колір="зелений">Людино</строго>!
  </блок>
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
    <hr>
    <UiCodeBlock :files="exampledef" />
    <br>
    <UiCodeBlock :files="example" language="html" />
  </UiDocsWrapper>
</template>
