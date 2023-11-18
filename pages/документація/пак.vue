<script setup>
const files = [
  {
    name: "привіт.м",
    text: `
взяти "хмарний.пак.укр/привіт/0.0.1"

привіт.привіт()
`.trim(),
  },
  {
    name: "результат",
    text: "Привіт від Лесі!",
    plaintext: true,
  },
];

const fullUrlExample = `https://{домен}/{?шлях}/{назва}/{версія}/{назва}.м`;

const example1 = "https://хмарний.пак.укр/привіт/0.0.1/привіт.м";
const example2 = "хмарний.пак.укр/привіт/0.0.1";
const example3 = "хмарний.пак.укр/привіт";
const example4 = "привіт/0.0.1";
const example5 = "привіт";

useHead({
  title: "Пак | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/чародія" next="/документація/розширення">
    <h1 class="docs-content-title">Пак</h1>
    <p>
      Пак <span style="font-weight: 500" class="hljs-keyword">це</span> один
      <span style="font-weight: 500" class="hljs-keyword">або</span>
      декілька модулів, що зберігаються поза програмою
      <span style="font-weight: 500" class="hljs-keyword">і</span> можуть бути
      підключені за потреби.
    </p>
    <hr />
    <UiCodeBlock :files="files" />
    <hr />
    <UiCodeBlock :files="fullUrlExample" plaintext />
    <br />
    <UiCodeBlock :files="example1" plaintext />
    <br />
    <UiCodeBlock :files="example2" plaintext />
    <br />
    <UiCodeBlock :files="example4" plaintext />
    <hr />
    <p>
      Версіонування відбувається строго через
      <a
        href="https://semver.org/lang/uk/"
        target="_blank"
        class="link external"
        >semver</a
      >.
    </p>
    <hr />
    <blockquote>Сторінка доповнюється.</blockquote>
  </UiDocsWrapper>
</template>
