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
дія для Паспорту п змінити_ім'я(нове_ім'я)
  п.ім'я = нове_ім'я
кінець
`.trim();

const instance = `
мій_паспорт = Паспорт(прізвище: "Когут",
                      ім'я: "Давид",
                      по_батькові: "Богданович",
                      дата_народження: "10.02.2001",
                      стать: "чоловіча")
`.trim();

const call = `
мій_паспорт.змінити_ім'я("David")
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Структури
    </h1>

    <p>
      Структура є способом поміщення даних в одне місце.
      Структура має назву, може мати властивості (опис даних) та дії (операції над даними).
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
