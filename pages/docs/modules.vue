<script setup>
const modA = `
дія знайти_добуток(а, б)
  а + б
кінець

структура Багатокутник
  кутів = 3
кінець

дати знайти_добуток
дати Багатокутник
`.trim();
const modB = `
взяти а.знайти_добуток
взяти а.Багатокутник

добуток = знайти_добуток(2, 2)
друк(добуток)

чотирикутник = Багатокутник(кутів: 4)
друк(чотирикутник)
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Модулі
    </h1>

    <p>
      Модуль є способом організації коду. Модуль може брати код з іншого модуля і віддавати свій.
    </p>
    <p>
      <code>а.дія</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="modA"
        />
      </ClientOnly>
    </div>
    <p>
      <code>б.дія</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="modB"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
