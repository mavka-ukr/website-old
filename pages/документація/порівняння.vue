<script setup>
const equals = `
друк(1 рівно 1)
`.trim();

const equals2 = `
друк(1 == 1)
`.trim();

const notEquals = `
друк(1 не рівно 2)
`.trim();

const notEquals2 = `
друк(1 != 2)
`.trim();

const greater = `
друк(2 більше 1)
`.trim();

const greater2 = `
друк(2 > 1)
`.trim();

const lesser = `
друк(1 менше 2)
`.trim();

const lesser2 = `
друк(1 < 2)
`.trim();

const notGreater = `
друк(1 не більше 2)
`.trim();

const notGreater2 = `
друк(1 <= 2)
`.trim();

const notLesser = `
друк(2 не менше 1)
`.trim();

const notLesser2 = `
друк(2 >= 1)
`.trim();

useHead({
  title: "Порівняння | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/побітові-операції"
    next="/документація/взяти"
  >
    <h1 class="docs-content-title">Порівняння</h1>
    <p>
      <span class="diia-word">Мавка</span> надає можливість виконувати різні
      операції порівняння.
    </p>
    <p>Кожна операція порівняння має свою вказівку.</p>
    <p>
      Логіку виконання більшості операцій порівняння для обʼєктів можна перезаписати через
      <NuxtLink :href="encodeURI('/документація/чародія')" class="link external"
        >чародії</NuxtLink
      >.
    </p>
    <hr />
    <h4>Рівно</h4>
    <UiCodeBlock :files="equals2" />
    <br />
    <UiCodeBlock :files="equals" />
    <h4>Не рівно</h4>
    <UiCodeBlock :files="notEquals2" />
    <br />
    <UiCodeBlock :files="notEquals" />
    <h4>Більше</h4>
    <UiCodeBlock :files="greater2" />
    <br />
    <UiCodeBlock :files="greater" />
    <p><code>чародія_більше</code></p>
    <h4>Менше</h4>
    <UiCodeBlock :files="lesser2" />
    <br />
    <UiCodeBlock :files="lesser" />
    <p><code>чародія_менше</code></p>
    <h4>Не більше</h4>
    <UiCodeBlock :files="notGreater2" />
    <br />
    <UiCodeBlock :files="notGreater" />
    <p><code>чародія_не_більше</code></p>
    <h4>Не менше</h4>
    <UiCodeBlock :files="notLesser2" />
    <br />
    <UiCodeBlock :files="notLesser" />
    <p><code>чародія_не_менше</code></p>
  </UiDocsWrapper>
</template>
