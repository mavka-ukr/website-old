<script setup>
const simple = `
структура Громадянин
  прізвище
  ім'я
  по_батькові
  дата_народження
  стать
кінець
`.trim();

const diia = `
дія для Громадянина г змінити_ім'я(нове_ім'я)
  г.ім'я = нове_ім'я
кінець
`.trim();

const instance = `
давид = Громадянин(прізвище: "Когут",
                   ім'я: "Давид",
                   по_батькові: "Богданович",
                   дата_народження: "10.02.2001",
                   стать: "чоловіча")
`.trim();

const call = `
давид.змінити_ім'я("David")
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
