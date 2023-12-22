<script setup>
const addition = `
друк(2 + 2)
`.trim();

const subtraction = `
друк(10 - 5)
`.trim();

const multiplication = `
друк(2 * 2)
`.trim();

const division = `
друк(10 / 5)
`.trim();

const divisionMod = `
друк(10 % 5)
`.trim();

const divisionDiv = `
друк(10 // 5)
`.trim();

const pow = `
друк(2 ** 32)
`.trim();

useHead({
  title: "Арифметика | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/стиль"
    next="/документація/побітові-операції"
  >
    <h1 class="docs-content-title">Арифметика</h1>
    <p>
      <span class="diia-word">Мавка</span> надає можливість виконувати різні
      арифметичні операції.
    </p>
    <p>Кожна арифметична операція має свою вказівку.</p>
    <p>
      Логіку виконання арифметичних операції для обʼєктів можна перезаписати
      через
      <NuxtLink :href="encodeURI('/документація/чародія')" class="link external"
        >чародії</NuxtLink
      >.
    </p>
    <hr />
    <h4>Додавання</h4>
    <UiCodeBlock :files="addition" />
    <p><code>чародія_додати</code></p>
    <h4>Віднімання</h4>
    <UiCodeBlock :files="subtraction" />
    <p><code>чародія_відняти</code></p>
    <h4>Множення</h4>
    <UiCodeBlock :files="multiplication" />
    <p><code>чародія_помножити</code></p>
    <h4>Ділення</h4>
    <UiCodeBlock :files="division" />
    <p><code>чародія_поділити</code></p>
    <h4>Ділення за модулем з остачею</h4>
    <UiCodeBlock :files="divisionMod" />
    <p><code>чародія_остача</code></p>
    <h4>Ділення з часткою</h4>
    <UiCodeBlock :files="divisionDiv" />
    <p><code>чародія_частка</code></p>
    <h4>Піднесення до степеня</h4>
    <UiCodeBlock :files="pow" />
    <p><code>чародія_степінь</code></p>
  </UiDocsWrapper>
</template>
