<script setup>
const eachStructure = `
структура перебір<З>
  завершено логічне
  значення З
кінець
`.trim();

const eachStructureSpecCreateMethod = `спец дія перебір.створити<З>(завершено логічне, значення З, далі Дія) перебір<З>`;
const eachStructureNextMethod = `дія перебір.далі()`;

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

const each2_5files = [
  {
    name: "діапазон_чисел_3.м",
    text: `
перебрати 0..0.5..5 як х
  друк(х)
кінець
`.trim(),
  },
  {
    name: "результат",
    text: `
0
0.5
1
1.5
2
2.5
3
3.5
4
4.5
5
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
  <UiDocsWrapper prev="/документація/умова" next="/документація/цикл">
    <h1 class="docs-content-title">Перебір</h1>

    <p>
      Перебір
      <span style="font-weight: 500" class="hljs-keyword">є</span> обʼєктом
      <span class="diia-word">Мавки</span>, що використовується вказівкою
      <span style="font-weight: 500" class="hljs-keyword">перебрати</span>.
    </p>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Перебрати </span>
      <span style="font-weight: 500" class="hljs-keyword">є</span> вказівкою
      <span class="diia-word">Мавки</span>, що виконує
      <span style="font-weight: 500" class="hljs-keyword">дію </span>
      <code>далі</code> якогось перебіру, допоки значення його властивості
      <code>завершено</code>
      <span style="font-weight: 500" class="hljs-keyword">рівно </span>
      <code>ні</code>.
    </p>
    <p>
      До прикладу,
      <NuxtLink class="link external" :href="encodeURI('/документація/список')"
        >список</NuxtLink
      >
      має чародію <code>чародія_перебір</code> яка вертає перебір кожного
      елементу цього списку.
    </p>
    <hr />
    <h3>Структура перебору</h3>
    <UiCodeBlock :files="eachStructure" />
    <hr />
    <h3>Дії перебору</h3>
    <p>
      <code>далі</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> переходу
      до наступного значення перебору.
    </p>
    <UiCodeBlock :files="eachStructureNextMethod" />
    <p>
      <code>створити</code>
      <span style="font-weight: 500" class="hljs-keyword">це спец дія</span> для
      створення нового перебору.
    </p>
    <UiCodeBlock :files="eachStructureSpecCreateMethod" />
    <hr />
    <h3>Приклад вказівки перебрати</h3>
    <h4>Перебрати список</h4>
    <UiCodeBlock :files="each3files" />
    <h4>Перебрати словник</h4>
    <UiCodeBlock :files="each4files" />
    <hr />
    <h3>Діапазон</h3>
    <p>
      Діапазон
      <span style="font-weight: 500" class="hljs-keyword">це</span> вказівка
      <span class="diia-word">Мавки</span>, що створює перебір чисел в
      конкретному діапазоні.
    </p>
    <UiCodeBlock :files="each1files" />
  </UiDocsWrapper>
</template>
