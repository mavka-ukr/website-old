<script setup>
const each1files = [
  {
    name: "діапазон_чисел.м",
    text: `
перебрати 0..10 як х
  друк(х)
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
10
`.trim(),
    plaintext: true,
  },
];

const each2files = [
  {
    name: "діапазон_чисел_2.м",
    text: `
а = 0
б = 10

перебрати а..<б як х
  друк(х)
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

const each3files = [
  {
    name: "список.м",
    text: `
перебрати [2.2, "привіт", так] як х
  друк(х)
кінець
`.trim(),
  },
  {
    name: "результат",
    text: `
2.2
привіт
так
`.trim(),
    plaintext: true,
  },
];

const each4files = [
  {
    name: "словник.м",
    text: `
структури = (
  "пусто"=пусто,
  "текст"=текст,
  "число"=число,
  "логічне"=логічне
)

перебрати структури як назва, значення
  друк(назва, значення)
кінець
`.trim(),
  },
  {
    name: "результат",
    text: `
пусто пусто
текст <структура текст>
число <структура число>
логічне <структура логічне>
`.trim(),
    plaintext: true,
  },
];

useHead({
  title: "Перебір | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/умова" next="/документація/поки">
    <h1 class="docs-content-title">Перебір</h1>

    <p>
      Перебір
      <span style="font-weight: 500" class="hljs-keyword">є</span> вказівкою
      <span class="diia-word">Мавки</span>, що виконує перебір діапазону
      <span style="font-weight: 500" class="hljs-keyword">або</span> списку
      <span style="font-weight: 500" class="hljs-keyword">й</span>
      застосовує необхідні інструкції кожному елементу.
    </p>
    <hr />
    <h3>Запис перебору</h3>
    <p>
      Пербір записується через ключове слово <code>перебрати</code>. Після нього
      необхідно вказати обʼєкт перебору, визначення субʼєкта елемента
      <span style="font-weight: 500" class="hljs-keyword">та</span> тіло.
    </p>
    <h4>Перебрати діапазон чисел</h4>
    <UiCodeBlock :files="each1files" />
    <br />
    <UiCodeBlock :files="each2files" />
    <h4>Перебрати список</h4>
    <UiCodeBlock :files="each3files" />
    <h4>Перебрати словник</h4>
    <UiCodeBlock :files="each4files" />
  </UiDocsWrapper>
</template>
