<script setup>
const dict = `
(
  "Україна"="рай",
  "Росія"="рим",
  "США"="брехня",
  "Чайна"="орда",
  "Европа"="содом",
  "СССР"="вавилон",
  "Польща"="ворог",
  "Туркія"="злодій"
)
`.trim();

const dictStructure = `
структура словник
  розмір число
кінець
`.trim();

useHead({
  title: "Словник | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/список" next="/документація/модуль">
    <h1 class="docs-content-title">Словник</h1>

    <p>
      Словник
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, що зберігає звʼязані
      обʼєкти у вигляді списку.
    </p>
    <p>
      Словник описано спеціальною
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>словник</code>.
    </p>
    <hr />
    <h3>Створення словника</h3>
    <p>
      Список записується між круглими дужками, де кожен елемент розділений комою
      <span style="font-weight: 500" class="hljs-keyword">і </span>
      його обʼєкти звʼязані символом <code>=</code> або ключовим словом
      <code>це</code>.
    </p>
    <UiCodeBlock :files="dict" />
    <hr />
    <h3>Структура словника</h3>
    <UiCodeBlock :files="dictStructure" />
  </UiDocsWrapper>
</template>
