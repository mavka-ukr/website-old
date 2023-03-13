<script setup>
const fetchJs = `
const mavka = getMavka();
const context = getContext();

const fetchAndParseJson = mavka.tools.asyncFn(async ([url]) => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
});

context.set("отримати_джсон", fetchAndParseJson);
`.trim();

const mainDiia = `
підключити_розширення_з_файлу("fetchAndParseJson.js")
;; підключити_розширення_з_мережі("https://...")
;; підключити_розширення("console.log('hello from js')")

чекати відповідь = отримати_джсон("https://api.storinka.menu/invoke/4/getCafe?id=kava-gallery")

друк(відповідь)
`.trim();

const tools = `
// перетворює js-функцію на дію Мавки (з доступом до контексту виконання)
mavka.tools.fn((args, context) => {
  //
});

// перетворює асинхронну js-функцію на тривалу дію Мавки (з доступом до контексту виконання)
mavka.tools.asyncFn((args, context) => {
  //
});

// перетворює будь-яку js-функцію на дію Мавки (без доступу до контексту виконання)
mavka.tools.convertFnToDiia((...args) => {
  //
});
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Розширення
    </h1>

    <p>
      Розширення дозволяють доповнювати можливості мови за допомогою JavaScript. По-суті, ви можете написати скрипт на
      JS-і та
      підключити його до <span class="diia-word">Мавки</span>.
    </p>
    <p>
      <code>fetchAndParseJson.js</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="javascript"
            :code="fetchJs"
        />
      </ClientOnly>
    </div>
    <p>
      <code>галерея_кави.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="mainDiia"
        />
      </ClientOnly>
    </div>
    <p>
      Список функцій які доступні через <code>mavka.tools</code>:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="js"
            :autodetect="false"
            :code="tools"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
