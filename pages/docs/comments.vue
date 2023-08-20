<script setup>
const simple = `
;; однорядковий коментар
сум = (а, б): а + б

;--
коментар з декількома рядками

а
б
в
--;
дія привіт()
  друк("привіт") ;; надрукує привіт
кінець
`.trim();

useHead({
  title: "Коментарі | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/modules" next="/docs/tries">
    <h1 class="docs-content-title">Коментарі</h1>

    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <br />
  </UiDocsWrapper>
</template>
