<script setup>
const simple = `
дія знайти_суму_та_надрукувати_результат(а, б)
  результат = а + б

  друк("сума = $(результат)")
кінець
`.trim();

const call = `
знайти_суму_та_надрукувати_результат(2, 2)
`.trim();

const return_1 = `
дія знайти_добуток(а, б)
  вернути а * б
кінець

добуток = знайти_добуток(2, 2)
`.trim();

const return_2 = `
дія знайти_добуток(а, б)
  а * б
кінець

добуток = знайти_добуток(2, 2)
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Дії
    </h1>

    <p>
      Дія є послідовним набором операцій, що має назву.
      Дія може приймати вхідні параметри та вертати значення.
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
      Приклад застосування (виклику) дії:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="call"
        />
      </ClientOnly>
    </div>
    <p>
      Приклад дії, що вертає значення:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="return_1"
        />
      </ClientOnly>
    </div>
    <p>
      Ключове слово "вернути" не є обов'язковим:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="return_2"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
