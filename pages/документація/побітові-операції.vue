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
  title: "Побітові операції | Документація | Мавка",
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
    <h1 class="docs-content-title">Побітові операції</h1>
    <p>
      <span class="diia-word">Мавка</span> надає можливість виконувати різні
      побітові операції.
    </p>
    <p>Кожна побітова операція має свою вказівку.</p>
    <p>
      Логіку виконання побітових операції для обʼєктів можна перезаписати через
      <NuxtLink :href="encodeURI('/документація/чародія')" class="link external"
        >чародії</NuxtLink
      >.
    </p>
    <hr />
    <h4>Зсув вліво</h4>
    <UiCodeBlock :files="shiftLeft" />
    <p><code>чародія_зсунути_вліво</code></p>
    <h4>Зсув вправо</h4>
    <UiCodeBlock :files="shiftRight" />
    <p><code>чародія_зсунути_вправо</code></p>
    <h4>І</h4>
    <UiCodeBlock :files="and" />
    <p><code>чародія_побітове_і</code></p>
    <h4>Або</h4>
    <UiCodeBlock :files="or" />
    <p><code>чародія_побітове_або</code></p>
    <h4>Не</h4>
    <UiCodeBlock :files="not" />
    <p><code>чародія_побітове_не</code></p>
    <h4>Виключне або</h4>
    <UiCodeBlock :files="xor" />
    <p><code>чародія_побітове_виключне_або</code></p>
  </UiDocsWrapper>
</template>
