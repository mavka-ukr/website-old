<script setup>
const simple = `
а = 2
б = 2

друк(а + б)
друк(а - б)
друк(а * б)
друк(а / б)
друк(а % б)
друк(а // б)
друк(а ** б)
`.trim();

const simple2 = `
структура ІншеЧисло
  значення число
кінець

дія ІншеЧисло.виконати_додавання(б) ІншеЧисло
  якщо б є ІншеЧисло
    ІншеЧисло(я.значення + б.значення - 2)
  інакше
    впасти "б не є ІншеЧисло!"
  кінець
кінець

а = ІншеЧисло(2)
б = ІншеЧисло(2)

друк(а + б) ;; ІншеЧисло(значення=2)
`.trim();

const simple3 = `
виконати_додавання ;; +
виконати_віднімання ;; -
виконати_множення ;; *
виконати_ділення ;; /
виконати_ділення_за_модулем_остача ;; %
виконати_ділення_за_модулем_частка ;; //
виконати_піднесення_до_степеня ;; **
`.trim();

useHead({
  title: "Арифметика | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/conditional" next="/docs/dii">
    <h1 class="docs-content-title">Арифметика</h1>

    <p>
      <span class="diia-word">Мавка</span> надає можливість виконувати базові
      арифметичні операції.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <p>Також існує можливість перезаписати логіку цих операцій для структур:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple2" />
      </ClientOnly>
    </div>
    <p>Список операцій, що можна перезаписати:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple3" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
