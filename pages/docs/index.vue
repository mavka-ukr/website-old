<script setup>
const life = `
дія життя(а, б, в, г)
  життя(а(г), б(г), в(г), г)
кінець
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Вступ
    </h1>

    <p>
      <span class="diia-word">Дія</span> є простою, зручною та динамічною мовою програмування на основі кирилічної
      абетки.
    </p>
    <p>
      Метою створення <span class="diia-word">Дії</span> є <a href="https://github.com/kohutd">моє</a> бажання до
      написання комп'ютерних команд українською мовою.
    </p>
    <p>
      Я вірю, що кожен українець має право використовувати зрозумілі йому інструменти в щоденному житті.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="life"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
