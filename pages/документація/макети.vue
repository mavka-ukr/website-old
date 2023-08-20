<script setup>
const simple = `
макет Бот
  дія відповісти(запит текст) Відповідь
  дія відповісти(запит текст) Відповідь
кінець
`.trim();

const diia = `
структура Автомобіль є ТранспортнийЗасіб
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
  title: "Макети | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs" next="/документація/змінні">
    <h1 class="docs-content-title">Макети</h1>

    <p>
      Макет є способом опису певної структури без надання конктретної реалізації
      її дій та властивостей.
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
