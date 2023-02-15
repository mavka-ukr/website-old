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
      <span class="diia-word">Мавка</span> є простою, зручною та динамічною мовою програмування на основі кирилічної
      абетки.
    </p>
    <p>
      Причиною створення <span class="diia-word">Мавки</span> є <a href="https://github.com/kohutd">моє</a> бажання до
      написання комп'ютерних команд українською мовою.
    </p>
    <p>
      <span class="diia-word">Мавка</span> цілком та повністю присвячується <span class="diia-word">Лесі Українці</span>.
    </p>
    <p>
      Я вірю, що кожен українець має право використовувати звичні йому інструменти в щоденному житті.
    </p>
    <p>
      Так, я знаю, що це лише мрія в моїй голові. Тим не менше, ви навіть не спробували цього досягнути.
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
