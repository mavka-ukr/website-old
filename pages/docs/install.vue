<script setup>
const npmInstall = `
npm i -g mavka

// наразі рекомендується встановлювати останню версію вручну:
// npm i -g mavka@x.y.z
`.trim();

const diiaRun = `
мавка
`.trim();

const helloWorldFile = `
дія привіт()
  друк("привіт від Лесі!")
кінець

привіт()
`.trim();

const runHelloWorldFile = `
мавка привіт
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
      <li>Linux, MacOS або Windows</li>
      <li><a class="link" href="https://nodejs.org" target="_blank">NodeJS 18+</a></li>
    </ul>
    <p>
      <b>Рекомендації:</b>
    </p>
    <ul>
      <li><a class="link" href="https://r2u.org.ua/wiki/keyboard/UkrainianUnicode" target="_blank">Ukrainian Unicode</a></li>
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
      Створіть файл <code>привіт.м</code>:
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
