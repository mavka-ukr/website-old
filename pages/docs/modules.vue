<script setup>
const modA = `
дія знайти_добуток(а, б)
  а * б
кінець

структура Багатокутник
  кутів = 3
кінець

модуль Операції
  дія відняти(а, б)
    а - б
  кінець

  дати відняти
кінець

дати знайти_добуток
дати Багатокутник
дати Операції
`.trim();
const modB = `
взяти а.знайти_добуток
взяти а.Багатокутник
взяти а.Операції.відняти

добуток = знайти_добуток(2, 2)
друк(добуток)

чотирикутник = Багатокутник(кутів=4)
друк(чотирикутник)

друк(відняти(4, 2))
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
      <code>а.м</code>
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
      <code>б.м</code>
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
