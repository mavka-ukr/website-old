<script setup>
const fetchJs = `
const fetchAndParseJson = new diia.JsFunctionVal((url) => {
    url = url.asString().asJsString();

    return new diia.AsyncVal(async () => {
       const response = await fetch(url);
       const json = await response.json();

       return diia.toVal(json);
    });
});

diia.moduleContext.set('отримати_жсон', fetchAndParseJson);
`.trim();

const mainDiia = `
підключити_файл_розширення("fetchAndParseJson.js")

галерея_кави = чекати отримати_жсон("https://api.storinka.menu/invoke/4/getCafe?id=kava-gallery")

друк(галерея_кави)
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      JS-модулі
    </h1>

    <p>
      JS-модулі дозволяють розширювати можливості мови за допомогою JavaScript. Ви можете написати скрипт на JS-і та
      підключити його до Дії.
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
