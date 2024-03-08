<script setup>
useHead({
  title: "Вступ | Джеджалик | Мавка",
});

definePageMeta({
  layout: "jj",
});
</script>

<template>
  <UiDocsWrapper next="/джеджалик/встановлення">
    <h1 class="docs-content-title">Джеджалик</h1>

    <p>
      <span class="diia-word">Джеджалик</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> швидкий
      компілятор <span class="diia-word">Мавки</span>
      в JavaScript.
    </p>
    <p>
      <span class="diia-word">Джеджалик</span> можна використовувати для
      створення веб-аплікацій <span class="diia-word">Мавкою</span>
      <span style="font-weight: 500" class="hljs-keyword"> або</span> для інших
      задач, де необхідно використовувати JavaScript.
    </p>
    <p>
      <span class="diia-word">Джеджалик</span> запускається командою
      <code>джеджалик</code> після встановлення.
    </p>
    <UiCodeBlock files="джеджалик привіт.м привіт.js" plaintext />
  </UiDocsWrapper>
</template>
