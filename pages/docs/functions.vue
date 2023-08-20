<script setup>
const simple = `
сум = (а, б): а + б

друк(сум(2, 2))
`.trim();

const simple2 = `
коли_температура_вище(30, (): кондиціонер.увімкнути())
`.trim();

useHead({
  title: "Функції | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/dii" next="/docs/loops">
    <h1 class="docs-content-title">Функції</h1>

    <p>Функція є однорядковою дією.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <p>Інші приклади:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple2" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
