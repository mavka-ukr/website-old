<script setup>
const simple = `
;; однострічковий коментар
сум = (а, б): а + б

;--
коментар з декількома стрічками

а
б
в
--;
дія привіт()
  друк("привіт") ;; надрукує привіт
кінець
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Коментарі
    </h1>

    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="simple"
        />
      </ClientOnly>
    </div>
    <br>
  </DocsWrapper>
</template>
