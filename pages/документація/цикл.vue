<script setup>
const for1files = [
  {
    name: "поки_умова.м",
    text: `
цикл а = 0, а < 10, а += 1
  друк(а)
кінець
`.trim(),
  },
  {
    name: "результат",
    text: `
0
1
2
3
4
5
6
7
8
9
`.trim(),
    plaintext: true,
  },
];

useHead({
  title: "Цикл | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/перебір" next="/документація/поки">
    <h1 class="docs-content-title">Цикл</h1>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Цикл</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> зручніший
      запис вказівки
      <span style="font-weight: 500" class="hljs-keyword"> поки</span>.
    </p>
    <hr />
    <h3>Запис циклу</h3>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Цикл</span>
      записується через ключове слово <code>цикл</code>. Після нього необхідно
      вказати вказівки
      <span style="font-weight: 500" class="hljs-keyword">та</span> тіло.
    </p>
    <h4>Друкувати <code>а</code>, поки <code>а</code> менше 10</h4>
    <UiCodeBlock :files="for1files" />
  </UiDocsWrapper>
</template>
