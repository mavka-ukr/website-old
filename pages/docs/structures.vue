<script setup>
const simple = `
структура Паспорт
  прізвище текст
  імʼя текст
  по_батькові текст
  дата_народження текст
  стать текст
кінець
`.trim();

const diia = `
дія Паспорт.змінити_імʼя(нове_імʼя)
  я.імʼя = нове_імʼя
кінець
`.trim();

const instance = `
мій_паспорт = Паспорт(прізвище="Когут",
                      імʼя="David",
                      по_батькові="Богданович",
                      дата_народження="10.02.2001",
                      стать="чоловіча")
`.trim();

const call = `
мій_паспорт.змінити_імʼя("Давид")
`.trim();

useHead({
  title: "Структури | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/loops" next="/docs/oop">
    <h1 class="docs-content-title">Структури</h1>

    <p>
      Структура є способом опису даних для поміщення їх в одне місце. Структура
      має назву, може мати властивості (опис даних) та дії (операції над
      даними). Дані, поміщені в одне місце, називаються обʼєктом.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="diia" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="instance" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="call" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
