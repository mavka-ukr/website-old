<script setup>
const fetchJs = `
const diia = getDiia();

const fetchAndParseJson = new diia.JsFunctionCell(diia, (args) => {
  const url = diia.toCell(args[0]).asString().asJsString();

  return new diia.AsyncCell(diia, async () => {
    const response = await fetch(url);
    const json = await response.json();

    return diia.toCell(json);
  });
});

diia.context.set("отримати_жсон", fetchAndParseJson);
`.trim();

const mainDiia = `
підключити_розширення_з_файлу("fetchAndParseJson.js")

галерея_кави = чекати отримати_джсон("https://api.storinka.menu/invoke/4/getCafe?id=kava-gallery")

друк(галерея_кави)
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
      <code>головна.дія</code>
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
  </DocsWrapper>
</template>
