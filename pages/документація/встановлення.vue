<script setup>
import { useState } from "nuxt/app";

const version = useState("version", () => "x.y.z");

onMounted(() => {
  if (process.client) {
    fetch(`https://запуск.мавка.укр/список.txt?t=${new Date().getTime()}`)
      .then((r) => r.text())
      .then((t) => t.split("\n")[1])
      .then((v) => version.value = v);
  }
});

const npmInstall = `
npm i -g mavka
`.trim();

const npmInstall2 = computed(() => {
  return `
npm i -g mavka@${version.value}
`.trim();
});

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
  title: "Встановлення | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація" next="/документація/перша-програма">
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
    <p><span style="font-weight: 500" class="hljs-keyword">або</span></p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs lang="bash" :autodetect="false" :code="npmInstall2" />
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
