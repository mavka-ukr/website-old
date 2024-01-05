<script setup>
const simple = `
спробувати
  друк("крок 1...")
  друк("крок 2...")
  друк("крок 3...")
  впасти "відмова двигуна!"
  друк("крок 4...")
  друк("крок 3...")
зловити п
  друк("ледве не впали: %(п)")
кінець
`.trim();

const simple2 = `
спробувати
  впасти "аййй..."
зловити п
  спробувати
    впасти "оййй..."
  зловити п
    друк("✝")
  кінець
кінець
`.trim();

useHead({
  title: "Спроба | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/поки" next="/документація/коментар">
    <h1 class="docs-content-title">Спроба</h1>
    <blockquote class="success">
      Ця частина <span class="diia-word">Мавки </span>
      <span style="font-weight: 500" class="hljs-keyword">є </span>
      стабільною.
    </blockquote>
    <p>
      Спроба
      <span style="font-weight: 500" class="hljs-keyword">є</span> вказівкою
      <span class="diia-word">Мавки</span>, що виконує інструкції
      <span style="font-weight: 500" class="hljs-keyword">і</span> в разі
      помилки виконує інші.
    </p>
    <hr />
    <h3>Запис спроби</h3>
    <p>
      Спроба записується ключовими словами <code>спробувати</code>
      <span style="font-weight: 500" class="hljs-keyword"> та </span>
      <code>зловити</code>.
    </p>
    <p>Падіння записується ключовим словом <code>впасти</code>.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple2" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
