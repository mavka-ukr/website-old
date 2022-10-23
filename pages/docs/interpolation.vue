<script setup>
const basic = `
документ як "document"
документ.знайти_елемент як "document.querySelector"
документ.знайти_всі_елементи як "document.querySelectorAll"
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Інтерполяція
    </h1>

    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="basic"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
