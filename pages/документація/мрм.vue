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

const examplediia = `
блок_суми = (
  <блок>
    2 + 2 = <дія>2 + 2</дія>
  </блок>
)

друк(блок_суми)
`.trim();

useHead({
  title: "МРМ | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/старт-паки" next="/документація/вступ-до-теорії">
    <h1 class="docs-content-title">Мова розмітки Мавки</h1>
    <p>
      <span class="diia-word">МРМ</span> <span style="font-weight: 500" class="hljs-keyword"> це</span> вбудована в
      <span
        class="diia-word">Мавку</span> спеціальна мова розмітки.
    </p>
    <p>
      Кожен тег <span class="diia-word">МРМ</span><span style="font-weight: 500" class="hljs-keyword"> це</span>
      виконання <span style="font-weight: 500" class="hljs-keyword">дії</span>. Дочірні теги передаються через
      параметр <code>дочірні</code>. Ви також можете передавати значення параметрів <span
      style="font-weight: 500" class="hljs-keyword">як</span> у звичайній вказівці виконання
      <span
        style="font-weight: 500" class="hljs-keyword">дії</span>.
    </p>
    <hr>
    <UiCodeBlock :files="exampledef" />
    <br>
    <UiCodeBlock :files="example" language="html" />
    <p>
      Ви можете виконувати код <span class="diia-word">Мавки</span> всередині <span class="diia-word">МРМ</span> за
      допомогою тегу <code>дія</code>.
    </p>
    <UiCodeBlock :files="examplediia" language="html" />
  </UiDocsWrapper>
</template>
