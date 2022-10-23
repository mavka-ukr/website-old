<script setup>
const simpleEach = `
кожній х беручи діапазон(0, 10)
  друк(х)
кінець
`.trim();

const simpleWhile = `
а = 10

поки а != 0
  а = а - 1
кінець
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Цикли
    </h1>

    <p>
      Цикл є послідовним набором операцій, що повторюється визначену або
      невизначену кількість раз.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="simpleEach"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="simpleWhile"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
