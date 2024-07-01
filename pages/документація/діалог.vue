<script setup>
import { useState } from "nuxt/app";

const version = useState("version", () => "а.б.в");

onMounted(() => {
  if (process.client) {
    fetch("/завантажити/версії.json", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        version.value = data[0].назва;
      });
  }
});

const example = computed(() =>
  `
Діалог Мавки ${version.value}
— життя = (а, б, в, г): життя(а(г), б(г), в(г), г)
пусто
— життя є Дія
так
`.trim(),
);

useHead({
  title: "Діалог | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/паки" next="/документація/мрм">
    <h1 class="docs-content-title">Діалог</h1>
    <p>
      <span class="diia-word">Діалог Мавки</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> інструмент
      для виконання вказівок в режимі діалогу. Ви пишете вказівку,
      <span class="diia-word">Мавка</span> її виконує
      <span style="font-weight: 500" class="hljs-keyword"> і</span> відповідає.
    </p>
    <p>
      Для цього потрібно запускати <span class="diia-word">Мавку</span> в
      терміналі без аргументів.
    </p>
    <UiCodeBlock files="мавка" />
    <br />
    <UiCodeBlock :files="example" plaintext />
  </UiDocsWrapper>
</template>
