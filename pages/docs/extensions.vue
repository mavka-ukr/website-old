<script setup>
const fetchJs = `
const mavka = getMavka();
const context = getContext();

const fetchAndParseJson = mavka.makeWrappedAsyncProxyFunction(async ([url]) => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
});

context.set("отримати_джсон", fetchAndParseJson);
`.trim();

const mainDiia = `
взяти файл "fetchAndParseJson.js" як fetchAndParseJson

js fetchAndParseJson

чекати відповідь = отримати_джсон("https://api.storinka.menu/invoke/4/getCafe?id=kava-gallery")

друк(відповідь)
`.trim();

const tools = `
// логічне "так"
mavka.yes;

// логічне "ні"
mavka.no;

// "пусто"
mavka.empty;

// перевіряє чи значення Мавки є число
mavka.isNumber(mavka.makeNumber(2));

// перевіряє чи значення Мавки є текст
mavka.isText(mavka.makeText("ого..."));

// перевіряє чи значення Мавки є пусто
mavka.isEmpty(mavka.empty);

// перетвоює будь-яке js-значення на значення Мавки
mavka.toCell(someValue);

// виконує падіння з певним значенням
mavka.fall(context, mavka.makeText("Помилка!"));

// перетворює js-функцію на дію Мавки (з доступом до контексту виконання)
mavka.makeProxyFunction((args, context) => {
  //
});
// mavka.makeWrappedProxyFunction для автоматичного конвернування вхідних і вихідних значень

// перетворює асинхронну js-функцію на тривалу дію Мавки (з доступом до контексту виконання)
mavka.makeAsyncProxyFunction(async (args, context) => {
  //
});
// mavka.makeWrappedAsyncProxyFunction для автоматичного конвернування вхідних і вихідних значень

// створює текстове значення
mavka.makeText("Привіт!");

// створює числове значення
mavka.makeNumber(123);

// створює список
mavka.makeList([mavka.makeNumber(1), mavka.makeText("123")]);

// створює словник (поки недоступно)
mavka.makeDictionary(null);

// створює дію (поки недоступно)
mavka.makeDiia(null);

// створює модуль
mavka.makeModule(name, giveContext);

// створює портал до js-обʼєкта
mavka.makePortal({
  a: 1,
  b: "some text"
});

// створює портал до js-функції
mavka.makePortalFunction((...args) => {
  //
});

// створює портал до js-масиву
mavka.makePortalList([1, 2, 3]);

// створює метод для структури (поки недоступно)
mavka.makeMethod(null);
`.trim();

useHead({
  title: "Розширення | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/net" next="/docs/showcase">
    <h1 class="docs-content-title">Розширення</h1>

    <p>
      Розширення дозволяють доповнювати можливості мови за допомогою JavaScript.
      По-суті, ви можете написати скрипт на JS-і та підключити його до
      <span class="diia-word">Мавки</span>.
    </p>
    <p>
      <code>fetchAndParseJson.js</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="javascript" :code="fetchJs" />
      </ClientOnly>
    </div>
    <p>
      <code>галерея_кави.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="mainDiia" />
      </ClientOnly>
    </div>
    <p>Список інструментів для розробки розширень:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="js" :autodetect="false" :code="tools" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
