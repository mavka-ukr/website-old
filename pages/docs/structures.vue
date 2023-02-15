<script setup>
const simple = `
структура Паспорт
  прізвище
  ім'я
  по_батькові
  дата_народження
  стать
кінець
`.trim();

const diia = `
дія Паспорт.змінити_ім'я(нове_ім'я)
  я.ім'я = нове_ім'я
кінець
`.trim();

const instance = `
мій_паспорт = Паспорт(прізвище="Когут",
                      ім'я="David",
                      по_батькові="Богданович",
                      дата_народження="10.02.2001",
                      стать="чоловіча")
`.trim();

const call = `
мій_паспорт.змінити_ім'я("Давид")
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Структури
    </h1>

    <p>
      Структура є способом опису даних для поміщення їх в одне місце.
      Структура має назву, може мати властивості (опис даних) та дії (операції над даними).
      Дані, поміщені в одне місце, називаються об'єктом.
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
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="diia"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="instance"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="call"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
