<script setup>
const simple = `
структура Гриб
  ;; опис гриба
кінець

структура Голова
  ;; опис голови
кінець

структура Шия
  ;; опис шиї
кінець

структура Тулуб
  ;; опис тулуба
кінець

структура Кінцівки
  ;; опис кінцівок
кінець

структура Тварина
  голова Голова
  шия Шия
  тулуб Тулуб
  кінцівки Кінцівки
кінець

структура Людина є Тварина
  імʼя текст
  свідомість логічне
кінець

адам = Людина("Давид", ні)
;; єва = Людина("Діана", так)

друк(адам є Людина) ;; так
друк(адам є Тварина) ;; так
друк(адам є Гриб) ;; ні
`.trim();

useHead({
  title: "ООП | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/структури" next="/документація/модулі">
    <h1 class="docs-content-title">ООП</h1>

    <p><span class="diia-word">Мавка</span> підтримує ООП.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <br />
  </UiDocsWrapper>
</template>
