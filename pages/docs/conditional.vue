<script setup>
const basic = `
якщо а == 2
  друк("а дорівнює 2")
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
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Умовні оператори
    </h1>

    <p>
      Умовні операції пишуться так:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :code="basic"
        />
      </ClientOnly>
    </div>
    <p>
      Інші приклади:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :code="other"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
