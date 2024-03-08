<script setup>
const mainDiia = `
js """
console.log("Вуху! Ми в JavaScript!");
"""
`.trim();

useHead({
  title: "Використання | Джеджалик | Мавка",
});

definePageMeta({
  layout: "jj",
});
</script>

<template>
  <UiDocsWrapper prev="/джеджалик/встановлення" next="/джеджалик/встановлення">
    <h1 class="docs-content-title">Використання</h1>

    <h4>Компіляція в JavaScript зі збереженням у файл</h4>
    <UiCodeBlock :files="'джеджалик <вхід.м> <вихід.js>'" plaintext />
    <h4>Компіляція в JavaScript з виводом в термінал (stdout)</h4>
    <UiCodeBlock :files="'джеджалик <вхід.м>'" plaintext />
    <h4>Компіляція в JavaScript з автоматичним запуском</h4>
    <UiCodeBlock :files="'джеджалик старт <вхід.м>'" plaintext />
    <hr />
    <h3>Розширення</h3>
    <p>
      Розширення <span class="diia-word">Джеджалика</span> дозволяють
      доповнювати можливості мови за допомогою JavaScript.
    </p>
    <p>Розширення записуються спеціальною вказівкою <code>js</code>.</p>
    <p>
      Щоб ця вказівка працювала перед компіляцією необхідно додати опцію
      <code>--розширення=1</code>.
    </p>
    <UiCodeBlock
      :files="`джеджалик --розширення=1 старт.м старт.js`"
      language="bash"
    />
    <h4>Приклад розширення</h4>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="mainDiia" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
