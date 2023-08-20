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
дія привітати()
  друк("Привіт від Лесі!")
кінець

привітати()
`.trim();

const runHelloWorldFile = `
мавка привіт
`.trim();

useHead({
  title: "Встановлення | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs" next="/docs/vars">
    <h1 class="docs-content-title">Встановлення</h1>

    <p>
      <b>Вимоги:</b>
    </p>
    <ul>
      <li>Linux, MacOS або Windows</li>
      <li>
        <a class="link" href="https://nodejs.org" target="_blank">NodeJS 18+</a>
      </li>
    </ul>
    <p>
      <b>Рекомендації:</b>
    </p>
    <ul>
      <li>
        <a
          class="link"
          href="https://r2u.org.ua/wiki/keyboard/UkrainianUnicode"
          target="_blank"
          >Ukrainian Unicode</a
        >
      </li>
    </ul>
    <p>
      <b>Встановлення:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs lang="bash" :autodetect="false" :code="npmInstall" />
      </ClientOnly>
    </div>
    <p>
      <b>Запуск:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="bash" :autodetect="false" :code="diiaRun" />
      </ClientOnly>
    </div>
    <p>
      <b>Приклад:</b>
    </p>
    <p>Створіть файл <code>привіт.м</code>:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
          language="diia"
          :autodetect="false"
          :code="helloWorldFile"
        />
      </ClientOnly>
    </div>
    <p>Запустіть за допомогою наступної команди:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
          language="bash"
          :autodetect="false"
          :code="runHelloWorldFile"
        />
      </ClientOnly>
    </div>

    <hr />

    <blockquote>
      Для апострофа використовується символ <code class="small-code">ʼ</code>.
      Також потрібні символи <code class="small-code">[</code
      ><code class="small-code">]</code>, <code class="small-code">&lt;</code
      ><code class="small-code">&gt;</code> які є доступними на розкладці
      <a
        class="link external"
        href="https://r2u.org.ua/wiki/keyboard/UkrainianUnicode"
        target="_blank"
      >
        Ukrainian Unicode.
      </a>

      <br />
      <br />

      Ця розкладка не відрізняється від стандартної за розташуванням клавіш, але
      має додаткові символи.

      <br />
      <br />

      Розкладку можна встановити на всі версії Windows, у т.ч. 10 та 11. Її
      можна встановити і на MacOS. Вона є доступною за замовчуванням на
      Linux-дистрибутивах.

      <br />
      <br />

      Після встановлення розкладки, апостроф
      <code class="small-code">ʼ</code> можна надрукувати через
      <code class="small-code">Shift+~</code>;
      <br />
      Сивмол <code class="small-code">[</code> через
      <code class="small-code">AltGr+9</code>;
      <br />
      Сивмол <code class="small-code">]</code> через
      <code class="small-code">AltGr+0</code>;
      <br />
      Сивмол <code class="small-code">&lt;</code> через
      <code class="small-code">AltGr+6</code>;
      <br />
      Сивмол <code class="small-code">&gt;</code> через
      <code class="small-code">AltGr+7</code>.
    </blockquote>
  </UiDocsWrapper>
</template>
