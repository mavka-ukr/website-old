<script setup>
const a = `
книга_лісова_пісня = Книга("Лісова Пісня")
`.trim();

const b = `
структура ІоннийДвигун
кінець
`.trim();

const c = `
модуль математичні_операції
кінець
`.trim();

const d = `
дія виконати_тривалу_операцію()
кінець
`.trim();

const e = `
ЧИСЛО_ПІ = 3.14
`.trim();

useHead({
  title: "Стиль | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/математика" next="/документація/розбір">
    <h1 class="docs-content-title">Стиль</h1>

    <p>Назви змінних з маленької у snake_case.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="a" />
      </ClientOnly>
    </div>
    <p>Назви структур з великої у PascalCase.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="b" />
      </ClientOnly>
    </div>
    <p>Назви модулів з маленької у snake_case.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="c" />
      </ClientOnly>
    </div>
    <p>Назви дій з маленької у snake_case.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="d" />
      </ClientOnly>
    </div>
    <p>Назви констант великими літерами у SCREAMING_SNAKE_CASE.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="e" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
