<script setup>
const mainDiia = `
js """
console.log("Вуху! Ми в JavaScript!");
"""
`.trim();

useHead({
  title: "Розширення | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/джеджалик" next="/документація/мрм">
    <h1 class="docs-content-title">Розширення</h1>

    <p>
      Розширення дозволяють доповнювати можливості мови під час запуску в браузері за допомогою JavaScript.
    </p>
    <p>
      Розширення записуються спеціальною вказівкою <code>js</code>.
    </p>
    <p>
      Щоб ця вказівка працювала перед запуском <span style="font-weight: 500" class="hljs-keyword"> або</span>
      компіляцією необхідно додати опцію <code>--розширення=1</code>.
    </p>
    <UiCodeBlock :files="`мавка --розширення=1 старт.м
# або
джеджалик --розширення=1 старт.м старт.js`" language="bash" />
    <hr />
    <h3>Приклад</h3>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="mainDiia" />
      </ClientOnly>
    </div>
    <hr />
    <blockquote>Сторінка доповнюється.</blockquote>
  </UiDocsWrapper>
</template>
