<script setup>
const logicYes = `
так
`.trim();

const logicNo = `
ні
`.trim();

const logicStructure = `
структура логічне
кінець
`.trim();

const logicStructureMagicNumberMethod = `дія логічне.чародія_число() число`;
const logicStructureMagicTextMethod = `дія логічне.чародія_текст() текст`;

useHead({
  title: "Логічне | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/текст" next="/документація/список">
    <h1 class="docs-content-title">Логічне</h1>
    <p>
      Логічне
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>.
    </p>
    <p>
      Логічне має лише два значення: <code>так</code> <span style="font-weight: 500" class="hljs-keyword">або </span>
      <code>ні</code>.
    </p>
    <p>
      Логічне описано
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>логічне</code>.
    </p>
    <hr />
    <h3>Створення логічного</h3>
    <p>
      Логічне записується
      <span style="font-weight: 500" class="hljs-keyword">як </span>
      <code>так</code>
      <span style="font-weight: 500" class="hljs-keyword"> або </span>
      <code>ні</code>.
    </p>
    <UiCodeBlock :files="logicYes" />
    <br />
    <UiCodeBlock :files="logicNo" />
    <hr />
    <h3>Структура логічного</h3>
    <UiCodeBlock :files="logicStructure" />
    <hr>
    <h3>Дії логічного</h3>
    <p><code>чародія_число</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перетворення
      логічного на число.</p>
    <UiCodeBlock :files="logicStructureMagicNumberMethod" />

    <p><code>чародія_текст</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перетворення
      логічного на текст.</p>
    <UiCodeBlock :files="logicStructureMagicTextMethod" />
  </UiDocsWrapper>
</template>
