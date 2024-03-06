<script setup>
const helloWorldFile = `
дія привітатись_від_імені(імʼя)
  друк("%(імʼя) вітає вас!")
кінець

привітатись_від_імені("Леся")
`.trim();

useHead({
  title: "Перша програма | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/розкладка" next="/документація/приклади">
    <h1 class="docs-content-title">Перша програма</h1>

    <p>Створіть файл <code>привіт.м</code>:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
          language="diia"
          :autodetect="false"
          :code="helloWorldFile"
        />
      </ClientOnly>
    </div>
    <p>
      Запустіть через <span class="diia-word">МаМа</span>, виконавши цю команду:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
          language="bash"
          :autodetect="false"
          code="мавка привіт.м"
        />
      </ClientOnly>
    </div>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Або</span> скомпілюйте
      через <span class="diia-word">Джеджалик</span>, виконавши цю команду:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
          language="bash"
          :autodetect="false"
          code="джеджалик привіт.м привіт.js"
        />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
