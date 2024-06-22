<script setup>
const simple = `
кіт_моєї_сестри = Кіт(імʼя="Тимофій")
`.trim();

const simpleX = `
число_пі = 3.14
дві_третини = 2 / 3
Е = м * к ** 2
`.trim();

const simpleY = `
нептун це Ракета(...)
паспорт це Документ(...)
мавка це МашинаВказівок(...)
`.trim();

const simpleV = `
а = 2

дія ф()
  а = 3
  а := 5
кінець

ф()

друк(а) ;; 5
`.trim();

useHead({
  title: "Субʼєкт | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/обʼєкт" next="/документація/дія">
    <h1 class="docs-content-title">Субʼєкт</h1>

    <p>
      Субʼєкт
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      фундаментальним поняттям у <span class="diia-word">Мавці</span>.
    </p>
    <p>Сам по собі обʼєкт пасивний.</p>
    <p>По цій причині існує субʼєкт.</p>
    <p>
      Субʼєкт дозволяє визначати роль обʼєкта
      <span style="font-weight: 500" class="hljs-keyword">та</span>
      керувати ним.
    </p>
    <p>
      Допитливим: cубʼєкт
      <span style="font-weight: 500" class="hljs-keyword"> це</span> підмет.
    </p>

    <hr />

    <h3 id="створення">Визначення субʼєктів</h3>
    <p>
      Субʼєкт визначається в середовищі
      <span style="font-weight: 500" class="hljs-keyword"> модуля</span>
      <span style="font-weight: 500" class="hljs-keyword"> або</span>
      <span style="font-weight: 500" class="hljs-keyword"> дії</span>.
    </p>
    <p>
      Субʼєкт визначається через символ <code>=</code> або ключове слово
      <code>це</code>. Спочатку необхідно вказати назву субʼєкта
      <span style="font-weight: 500" class="hljs-keyword"> і</span>
      після неї обʼєкт.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleX" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleY" />
      </ClientOnly>
    </div>
    <p>
      Також існує можливість визначати субʼєкт у зовнішньому середовищі. Для
      цього треба використовувати символ
      <code>:=</code>.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleV" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
