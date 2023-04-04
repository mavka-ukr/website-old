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
</script>

<template>
  <DocsWrapper prev="/docs/data" next="/docs/v1">
    <h1 class="docs-content-title">
      Стиль
    </h1>

    <p>
      Назви змінних з маленької у snake-case.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="a"
        />
      </ClientOnly>
    </div>
    <p>
      Назви структур з великої у camel-case.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="b"
        />
      </ClientOnly>
    </div>
    <p>
      Назви модулів з маленької у snake-case.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="c"
        />
      </ClientOnly>
    </div>
    <p>
      Назви дій з маленької у snake-case.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="d"
        />
      </ClientOnly>
    </div>
    <p>
      Назви констант великими літерами у snake-case.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="e"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
