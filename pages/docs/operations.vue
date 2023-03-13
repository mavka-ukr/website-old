<script setup>
const simple = `
а = 2
б = 2

друк(а + б)
друк(а - б)
друк(а / б) ;; символ ще обговорюється
друк(а * б)
`.trim();

const simple2 = `
структура ІншеЧисло
  значення число
кінець

дія ІншеЧисло.виконати_додавання(б ІншеЧисло) ІншеЧисло
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
виконати_додавання
виконати_множення
виконати_ділення
виконати_віднімання
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Арифметика
    </h1>

    <p>
      Мавка надає можливість виконувати базові арифметичні операції.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="simple"
        />
      </ClientOnly>
    </div>
    <p>
      Також існує можливість перезаписати логіку цих операцій для структур:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="simple2"
        />
      </ClientOnly>
    </div>
    <p>
      Список операцій, що можна перезаписати:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="simple3"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
