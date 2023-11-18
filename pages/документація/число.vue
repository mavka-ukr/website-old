<script setup>
const decNum = `
1
`.trim();

const decNum2 = `
-2
`.trim();

const decNum3 = `
3.14
`.trim();

const hexNum = `
0ш11А53А
`.trim();

const hexNum2 = `
-0шА1А9А
`.trim();

const binNum = `
0д0
`.trim();

const binNum2 = `
-0д1000101
`.trim();

const ex = `
2 + 2
`.trim();

const ex2 = `
3 - 1
`.trim();

const ex3 = `
2 + 2 * 2
`.trim();

const ex4 = `
0 / 100
`.trim();

const ex5 = `
0шА1А9А << 0ш11А53А
`.trim();

const ex6 = `
2 ** 32
`.trim();

const ex7 = `
100 % 2
`.trim();

const numberStructure = `
структура число
кінець
`.trim();

useHead({
  title: "Число | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/структура" next="/документація/текст">
    <h1 class="docs-content-title">Число</h1>

    <p>
      Число
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>.
    </p>
    <p>
      Число описано спеціальною
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>число</code>.
    </p>
    <p>
      Число
      <span style="font-weight: 500" class="hljs-keyword">містить</span>
      властивості з більшістю
      <NuxtLink class="link external" :href="encodeURI(`/документація/чародія`)"
        >чародій
      </NuxtLink>
      .
    </p>
    <hr />
    <h3>Створення числа</h3>
    <p>
      Число записується символами двійкової, десяткової
      <span style="font-weight: 500" class="hljs-keyword">або</span>
      шіснадцякової систем числення.
    </p>
    <h4>Десяткова</h4>
    <UiCodeBlock :files="decNum" />
    <br />
    <UiCodeBlock :files="decNum2" />
    <br />
    <UiCodeBlock :files="decNum3" />
    <h4>Шіснадцяткова</h4>
    <UiCodeBlock :files="hexNum" />
    <br />
    <UiCodeBlock :files="hexNum2" />
    <h4>Двійкова</h4>
    <UiCodeBlock :files="binNum" />
    <br />
    <UiCodeBlock :files="binNum2" />
    <hr />
    <h3>Приклади</h3>
    <UiCodeBlock :files="ex" />
    <br />
    <UiCodeBlock :files="ex2" />
    <br />
    <UiCodeBlock :files="ex3" />
    <br />
    <UiCodeBlock :files="ex4" />
    <br />
    <UiCodeBlock :files="ex5" />
    <br />
    <UiCodeBlock :files="ex6" />
    <br />
    <UiCodeBlock :files="ex7" />
    <p>
      <span style="font-weight: 500" class="hljs-keyword">та</span> безліч
      інших...
    </p>
    <blockquote>
      Докладніше про
      <NuxtLink
        class="link external"
        :href="encodeURI(`/документація/чародія`)"
      >
        чародію
      </NuxtLink>
      читайте у
      <NuxtLink
        class="link external"
        :href="encodeURI(`/документація/чародія`)"
      >
        відповідному розділі
      </NuxtLink>
      .
    </blockquote>
    <hr />
    <h3>Структура числа</h3>
    <UiCodeBlock :files="numberStructure" />
  </UiDocsWrapper>
</template>
