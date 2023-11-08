<script setup>
const list = `
[1, 2, 3, 4]
`.trim();

const list2 = `
[1, -2, 3.14, Людина(), так, [], ()]
`.trim();

const listStructure = `
структура список
  довжина число
кінець
`.trim();

useHead({
  title: "Список | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/логічне" next="/документація/словник">
    <h1 class="docs-content-title">Список</h1>

    <p>
      Список
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, що зберігає обʼєкти у
      певній послідовності.
    </p>
    <p>
      Список описано спеціальною
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>список</code>.
    </p>
    <hr />
    <h3>Створення списку</h3>
    <p>
      Список записується між квадратними дужками, де кожен елемент розділений
      комою.
    </p>
    <UiCodeBlock :files="list" />
    <br />
    <UiCodeBlock :files="list2" />
    <hr />
    <h3>Структура списку</h3>
    <UiCodeBlock :files="listStructure" />
  </UiDocsWrapper>
</template>
