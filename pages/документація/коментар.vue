<script setup>
const simple = `
;; однорядковий коментар
сум = (а, б): а + б

;;;
коментар з декількома рядками

а
б
в
;;;
дія привіт()
  друк("привіт") ;; надрукує привіт
кінець
`.trim();

useHead({
  title: "Коментар | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/спроба" next="/документація/чародія">
    <h1 class="docs-content-title">Коментар</h1>
    <blockquote class="success">
      Ця частина <span class="diia-word">Мавки </span>
      <span style="font-weight: 500" class="hljs-keyword">є </span>
      стабільною.
    </blockquote>
    <p>
      Коментар
      <span style="font-weight: 500" class="hljs-keyword">є</span> вказівкою
      <span class="diia-word">Мавки</span>, що дозволяє вказувати додаткову
      інформацію до інструкцій.
    </p>
    <p>Коментар жодним чином не впливає на застосування інструкцій.</p>
    <hr />
    <h3>Запис коментаря</h3>
    <p>Однорядковий коментар записується після двох символів крапкикоми.</p>
    <p>Багаторядковий коментар записується між трьох символів крапкикоми.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <br />
  </UiDocsWrapper>
</template>
