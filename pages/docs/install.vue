<script setup>
const npmInstall = `
npm install -g diia
`.trim();

const diiaRun = `
дія
`.trim();

const helloWorldFile = `
дія привіт_світ()
  друк("привіт, світ!")
кінець

привіт_світ()
`.trim();

const runHelloWorldFile = `
дія привіт_світ.дія
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Встановлення
    </h1>

    <p>
      <b>Вимоги:</b>
    </p>
    <ul>
      <li>Linux або MacOS</li>
      <li>NodeJS 18+</li>
      <li>NPM</li>
    </ul>
    <p>
      <b>Встановлення:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            lang="bash"
            :autodetect="false"
            :code="npmInstall"
        />
      </ClientOnly>
    </div>
    <p>
      <b>Запуск:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="bash"
            :autodetect="false"
            :code="diiaRun"
        />
      </ClientOnly>
    </div>
    <p>
      <b>Приклад:</b>
    </p>
    <p>
      Створіть файл <code>привіт_світ.дія</code>:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="helloWorldFile"
        />
      </ClientOnly>
    </div>
    <p>
      Запустіть за допомогою наступної команди:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="bash"
            :autodetect="false"
            :code="runHelloWorldFile"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
