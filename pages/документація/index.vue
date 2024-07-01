<script setup>
const life = `
дія життя(а, б, в, г)
  життя(а(г), б(г), в(г), г)
кінець
`.trim();

useHead({
  title: "Вступ | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper next="/документація/встановлення">
    <h1 class="docs-content-title">Вступ</h1>

    <p>
      <span class="diia-word">Мавка</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span> простою,
      зручною
      <span style="font-weight: 500" class="hljs-keyword"> та</span> динамічною
      мовою програмування на основі кириличної абетки, української мови
      <span style="font-weight: 500" class="hljs-keyword"> та</span> моєї
      свідомості.
    </p>
    <p>
      Причиною створення <span class="diia-word">Мавки</span>
      <span style="font-weight: 500" class="hljs-keyword"> є </span>
      моє бажання до написання компʼютерних команд українською мовою.
    </p>
    <p>
      <span class="diia-word">Мавка</span> цілком
      <span style="font-weight: 500" class="hljs-keyword"> та </span>
      повністю присвячується
      <span class="diia-word">Лесі Українці</span>.
    </p>
    <p>
      <span style="font-weight: 500" class="hljs-keyword"> Я</span> вірю, що
      кожен українець має право використовувати звичні йому інструменти в
      щоденному житті.
    </p>

    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="life" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
