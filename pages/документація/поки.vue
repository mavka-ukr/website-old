<script setup>
const while1files = [
  {
    name: "поки_умова.м",
    text: `
а = 0

поки а < 10
  друк(а)
  а = а + 1
кінець
`.trim()
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
    plaintext: true
  }
];

useHead({
  title: "Поки | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/перебір" next="/документація/спроба">
    <h1 class="docs-content-title">Поки</h1>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Поки</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span> вказівкою
      <span class="diia-word">Мавки</span>, що виконує вказівки допоки
      результат вказаної вказівки
      <span style="font-weight: 500" class="hljs-keyword">є</span> логічним
      <code>так</code>.
    </p>
    <hr />
    <h3>Запис поки</h3>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Поки</span>
      записується через ключове слово <code>поки</code>. Після нього необхідно
      вказати вказівку
      <span style="font-weight: 500" class="hljs-keyword">та</span> тіло.
    </p>
    <h4>Друкувати <code>а</code>, поки <code>а</code> менше 10</h4>
    <UiCodeBlock :files="while1files" />
  </UiDocsWrapper>
</template>
