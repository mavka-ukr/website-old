<script setup>
useHead({
  title: "Оригінальна Мавка | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper>
    <h1 class="docs-content-title">Оригінальна Мавка</h1>
    <p>
      <span class="diia-word">Оригінальна Мавка</span> написана JavaScript-ом
      <span style="font-weight: 500" class="hljs-keyword"> і</span>
      встановлюється через NPM.
    </p>
    <UiCodeBlock files="npm i -g mavka@0.12.3" plaintext />
    <p>
      <span class="diia-word">Оригінальна Мавка</span> більше не підтримується.
      Натомість ведеться робота над
      <NuxtLink class="link external diia-word" :href="encodeURI('/мама')">
        Машиною Мавки</NuxtLink
      >.
    </p>
  </UiDocsWrapper>
</template>
