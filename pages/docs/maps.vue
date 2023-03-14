<script setup>
const simple1 = `
словотвір = Словник()

словотвір.встановити("лайк", "вподобайка")
словотвір.встановити("лінк", "посилання")
словотвір.встановити("кавер", "переспів")
словотвір.встановити("баг", "вада")
`.trim();

const simple3 = `
слово = словотвір.отримати("баг") ;; вада

слово = словотвір("кавер") ;; переспів

слово = словотвір.лайк ;; вподобайка
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Словники
    </h1>

    <p>
      <code>Словник</code> є спеціальною структурою, що дозволяє зберегти дані з прив'язкою до певних ключів.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            lang="diia"
            :autodetect="false"
            :code="simple1"
        />
      </ClientOnly>
    </div>
    <p>
      Отримати певний елемент зі словника можна завдяки дії <code>отримати</code>, оператора виклику або як звичайну
      властивість об'єкту:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            lang="diia"
            :autodetect="false"
            :code="simple3"
        />
      </ClientOnly>
    </div>
    <blockquote>
      Документація доповнюється.
    </blockquote>
  </DocsWrapper>
</template>
