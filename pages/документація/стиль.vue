<script setup>
const a = `
книга_лісова_пісня = Книга("Лісова Пісня")
`.trim();

const b = `
структура ІоннийДвигун
кінець
`.trim();

const c = `
модуль двигуни
кінець
`.trim();

const d = `
дія запустити_двигун()
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
  <UiDocsWrapper prev="/документація/приклади" next="/документація/арифметика">
    <h1 class="docs-content-title">Стиль</h1>

    <p>Назви субʼєктів з маленької у snake_case.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="a" />
      </ClientOnly>
    </div>
    <p>
      Назви
      <span style="font-weight: 500" class="hljs-keyword"> структур</span> з
      великої у PascalCase.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="b" />
      </ClientOnly>
    </div>
    <p>
      Назви
      <span style="font-weight: 500" class="hljs-keyword"> модулів</span> з
      маленької у snake_case.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="c" />
      </ClientOnly>
    </div>
    <p>
      Назви <span style="font-weight: 500" class="hljs-keyword"> дій</span> з
      маленької у snake_case.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="d" />
      </ClientOnly>
    </div>
    <p>Назви сталих субʼєктів великими літерами у SCREAMING_SNAKE_CASE.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="e" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
