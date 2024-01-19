<script setup>
import { useState } from "nuxt/app";

const version = useState("version", () => "x.y.z");

onMounted(() => {
  if (process.client) {
    fetch(`https://запуск.мавка.укр/список.txt?t=${new Date().getTime()}`)
      .then((r) => r.text())
      .then((t) => t.split("\n")[1])
      .then((v) => version.value = v);
  }
});

const npmInstall = `
npm i -g mavka
`.trim();

const npmInstall2 = computed(() => {
  return `
npm i -g mavka@${version.value}
`.trim();
});

useHead({
  title: "Встановлення | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація" next="/документація/розкладка">
    <h1 class="docs-content-title">Встановлення</h1>

    <p><span class="diia-word">Мавка</span> існує в двох варіантах:</p>
    <ul>
      <li>
        <NuxtLink class="link external diia-word" :href="encodeURI('/документація/мама')">
          МаМа
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link external diia-word" :href="encodeURI('/документація/джеджалик')">
          Джеджалик
        </NuxtLink>
      </li>
    </ul>
    <p>
      Наразі для встановлення доступним <span style="font-weight: 500" class="hljs-keyword">є</span> лише
      <NuxtLink class="link external diia-word" :href="encodeURI('/документація/джеджалик')">Джеджалик</NuxtLink>.
    </p>
  </UiDocsWrapper>
</template>
