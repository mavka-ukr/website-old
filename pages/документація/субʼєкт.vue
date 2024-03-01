<script setup>
const simple = `
кіт_моєї_сестри = Кіт(імʼя="Тимофій")
`.trim();

const simpleX = `
число_пі = 3.14
дві_третини = 2 / 3
`.trim();

const simpleY = `
нептун це Ракета(...)
паспорт це Документ(...)
лисичка це Гриб(...)
`.trim();

const simpleZ = `
;; визначення субʼєкту
субʼєкт кіт_моєї_сестри = Кіт(імʼя="Тимофій")

;; перевизначення субʼєкту
кіт_моєї_сестри = Кіт(імʼя="Тимофій Молодший")
`.trim();

const simpleM = `
субʼєкт мавка = МашинаВказівок()
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
      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      фундаментальним поняттям у <span class="diia-word">Мавці</span>.
    </p>
    <p>
      Сам по собі обʼєкт
      <span style="font-weight: 500" class="hljs-keyword">є</span> пасивним.
    </p>
    <p>
      По цій причині існує
      <span style="font-weight: 500" class="hljs-keyword">субʼєкт</span>.
    </p>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span> тим, хто
      визначає роль обʼєкта
      <span style="font-weight: 500" class="hljs-keyword">та</span> дозволяє
      керувати ним.
    </p>
    <p>
      Головним
      <span style="font-weight: 500" class="hljs-keyword">субʼєктом</span>
      <span style="font-weight: 500" class="hljs-keyword"> є </span>
      <span class="diia-word">Мавка</span>.
    </p>
    <!--    <p>Субʼєкт завжди визначає якийсь обʼєкт.</p>-->
    <!--    <p>Субʼєкт є активним елементом.</p>-->
    <!--    <p>-->
    <!--      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span> також-->
    <!--      може бути обʼєктом.-->
    <!--    </p>-->
    <p>
      Допитливим:
      <span style="font-weight: 500" class="hljs-keyword">cубʼєкт</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> підмет.
    </p>

    <hr />

    <h3 id="створення">Визначення субʼєктів</h3>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span>
      визначається відносно
      <span style="font-weight: 500" class="hljs-keyword"> модуля</span>
      <span style="font-weight: 500" class="hljs-keyword"> або</span>
      <span style="font-weight: 500" class="hljs-keyword"> дії</span>.
    </p>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span>
      визначається через символ <code>=</code> або ключове слово
      <code>це</code>. Спочатку необхідно вказати назву
      <span style="font-weight: 500" class="hljs-keyword">субʼєкта</span>
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
      Також існує допоміжне ключове слово <code>субʼєкт</code>, яке можна
      поставити перед назвою
      <span style="font-weight: 500" class="hljs-keyword">субʼєкта</span>. Воно
      <span style="font-weight: 500" class="hljs-keyword"> не є</span>
      обовʼязковим
      <span style="font-weight: 500" class="hljs-keyword"> та не</span> впливає
      на виконання вказівки.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleM" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
