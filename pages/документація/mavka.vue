<script setup>
useHead({
  title: "Застаріле встановлення | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper>
    <h1 class="docs-content-title">Встановлення через NPM</h1>
    <p>
      Раніше <span class="diia-word">Мавку</span> можна було встановити через NPM.
    </p>
    <UiCodeBlock files="npm i -g mavka" plaintext />
    <p>
      Цей спосіб наразі вважається
      застарілим. Натомість рекомендується
      використовувати <span class="diia-word">Джеджалик</span>.
    </p>
  </UiDocsWrapper>
</template>
