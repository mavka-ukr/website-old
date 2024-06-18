<script setup>
const shiftLeft = `
друк(100 << 2)
`.trim();

const shiftRight = `
друк(100 >> 2)
`.trim();

const and = `
друк(0 & 1)
`.trim();

const or = `
друк(0 | 1)
`.trim();

const not = `
друк(~0)
`.trim();

const xor = `
друк(10 ^ 2)
`.trim();

useHead({
  title: "Двійкові операції | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/арифметика"
    next="/документація/порівняння"
  >
    <h1 class="docs-content-title">Двійкові операції</h1>
    <p>
      <span class="diia-word">Мавка</span> надає можливість виконувати різні
      двійкові операції.
    </p>
    <p>Кожна двійкова операція має свою вказівку.</p>
    <p>
      Логіку виконання двійкових операцій для обʼєктів можна перезаписати через
      <NuxtLink :href="encodeURI('/документація/чародія')" class="link external"
        >чародії</NuxtLink
      >.
    </p>
    <hr />
    <h4>Зсув вліво</h4>
    <UiCodeBlock :files="shiftLeft" />
    <p><code>чародія_вліво</code></p>
    <h4>Зсув вправо</h4>
    <UiCodeBlock :files="shiftRight" />
    <p><code>чародія_вправо</code></p>
    <h4>І</h4>
    <UiCodeBlock :files="and" />
    <p><code>чародія_ді</code></p>
    <h4>Або</h4>
    <UiCodeBlock :files="or" />
    <p><code>чародія_дабо</code></p>
    <h4>Не</h4>
    <UiCodeBlock :files="not" />
    <p><code>чародія_дне</code></p>
    <h4>Виключне або</h4>
    <UiCodeBlock :files="xor" />
    <p><code>чародія_вабо</code></p>
  </UiDocsWrapper>
</template>
