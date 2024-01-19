<script setup>
import { useState } from "nuxt/app";

const version = useState("version", () => "а.б.в");

onMounted(() => {
  if (process.client) {
    fetch(`https://запуск.мавка.укр/список.txt?t=${new Date().getTime()}`)
      .then((r) => r.text())
      .then((t) => t.split("\n")[1])
      .then((v) => version.value = v);
  }
});

const example = computed(() => {
  return [
    {
      name: "index.html",
      text: `
<script src="https://запуск.мавка.укр/${version.value}/веб.js" jejalyk="--розширення=1"><\/script>
<script type="mavka">
друк("Привіт від Лесі!")
<\/script>
`.trim(),
      language: "xml"
    }
  ];
});

const logoCode = `
<div id="mavkaLoader" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center;">
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="45.8995" width="14" height="42" transform="rotate(-45 0 45.8995)" fill="#B3271A" />
    <rect x="45.8995" y="99.598" width="14" height="42" transform="rotate(-135 45.8995 99.598)" fill="#F3D74B" />
    <rect x="99.598" y="53.6985" width="14" height="42" transform="rotate(135 99.598 53.6985)" fill="#375BB6" />
    <rect x="53.6985" width="14" height="42" transform="rotate(45 53.6985 0)" fill="black" />
  </svg>
</div>
`.trim();

const example2 = computed(() => {
  return [
    {
      name: "index.html",
      text: `
<script src="https://запуск.мавка.укр/${version.value}/веб.js" jejalyk="--розширення=1"><\/script>
<script src="старт.м" type="mavka"><\/script>
`.trim(),
      language: "xml"
    },
    {
      name: "старт.м",
      text: `
друк("Привіт від Лесі!")
`.trim()
    }
  ];
});

useHead({
  title: "Запуск в браузері | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/джеджалик"
    next="/документація/стиль"
  >
    <h1 class="docs-content-title">Запуск в браузері</h1>
    <p>
      Ви можете підключити <span class="diia-word">Мавку</span> завдяки <span class="diia-word">Джеджалику</span>
      відразу у ваш HTML-файл для запуску у веб-переглядачі.
    </p>
    <hr>
    <UiCodeBlock :files="example" />
    <p><span style="font-weight: 500" class="hljs-keyword">або</span></p>
    <UiCodeBlock :files="example2" />
    <hr>
    <p>
      Ви також можете додати логотип <span class="diia-word">Мавки</span>, який буде показано під час завантаження.
      <span style="font-weight: 500" class="hljs-keyword">Це</span> допоможе уникнути пустого екрану <span
      style="font-weight: 500" class="hljs-keyword">поки</span> ваша програма запускається.
    </p>
    <UiCodeBlock :files="logoCode" language="xml" />
  </UiDocsWrapper>
</template>
