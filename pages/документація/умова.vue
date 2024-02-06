<script setup>
const basic = `
якщо а рівно 2
  друк("а це два")
кінець
`.trim();

const other = `
якщо (а == 2 або б != так) і (в == "їхав козак за дунай...")
  друк("пройшло!")
кінець

якщо бути
  друк("йой, най буде")
інакше
  друк("чи не бути...")
кінець

якщо !гарно
  друк("тоді погано...")
кінець

якщо а є число
  друк("а є число")
інакше якщо а є текст
  друк("а є текст")
інакше
  друк("а не є текст і не є число")
кінець
`.trim();

const ternary = `
настрій = овечка.стрибає ? "файний" : "сумний"
`.trim();

useHead({
  title: "Умова | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/модуль" next="/документація/перебір">
    <h1 class="docs-content-title">Умова</h1>
    <p>
      Умова
      <span style="font-weight: 500" class="hljs-keyword">є</span> вказівкою
      <span class="diia-word">Мавки</span>, що перевіряє чи результатом
      інструкції
      <span style="font-weight: 500" class="hljs-keyword">є</span>
      <span style="font-weight: 500" class="hljs-keyword"> логічне </span>
      <code>так</code>.
      <span style="font-weight: 500" class="hljs-keyword">Якщо </span>
      <code>так</code>, тоді виконуються відповідні інструкції.
      <span style="font-weight: 500" class="hljs-keyword">Якщо</span>
      <span style="font-weight: 500" class="hljs-keyword"> інакше</span>, тоді
      також можуть виконуватись відповідні інструкції.
    </p>
    <hr />
    <h3>Запис умови</h3>
    <p>
      Умова записується через ключове слово <code>якщо</code>. Після нього
      необхідно вказати інструкцію для перевірки, а також тіло.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="basic" />
      </ClientOnly>
    </div>
    <p>Інші приклади:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="other" />
      </ClientOnly>
    </div>
    <hr />
    <h3>Скорочений вигляд</h3>
    <p>Умову також можна записувати скорочено.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="ternary" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
