<script setup>
const simple = `
дія знайти_суму_та_надрукувати_результат(а, б)
  результат = а + б

  друк("сума = %(результат)")
кінець
`.trim();

const anon = `
додати = дія(а число, б число) число
  вернути а + б
кінець
`.trim();

const func = `
відняти = (а, б): а - б
`.trim();

const call = `
знайти_суму_та_надрукувати_результат(2, 2)
`.trim();

const callAnon = `
сума = додати(2, 2)
`.trim();

const funcAnon = `
різниця = відняти(2, 2)
`.trim();

useHead({
  title: "Дія | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/субʼєкт" next="/документація/структура">
    <h1 class="docs-content-title">Дія</h1>

    <p>
      <span style="font-weight: 500" class="hljs-keyword">Дія</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      елементарним обʼєктом <span class="diia-word">Мавки</span>, що зберігає
      вказівки.
    </p>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Дія</span> виконується
      через <span style="font-weight: 500" class="hljs-keyword">субʼєкт</span>.
    </p>
    <p>
      Метою виконання
      <span style="font-weight: 500" class="hljs-keyword">дії</span> може бути
      створення нових обʼєктів або зміна властивостей існуючих.
    </p>
    <p>
      Допитливим:
      <span style="font-weight: 500" class="hljs-keyword">дія</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> присудок.
    </p>
    <hr />
    <h3>Створення дій</h3>
    <p>
      Існує три способи створити
      <span style="font-weight: 500" class="hljs-keyword">дію</span>.
    </p>
    <h4>Звичайна дія</h4>
    <p>
      Звичайна
      <span style="font-weight: 500" class="hljs-keyword">дія</span> може бути
      створена за допомогою ключового слова <code>дія</code>. Також необхідно
      вказати назву
      <span style="font-weight: 500" class="hljs-keyword">дії</span>, визначення
      <span style="font-weight: 500" class="hljs-keyword">субʼєктів</span>, до
      яких можна додатково звертатись,
      <span style="font-weight: 500" class="hljs-keyword">та</span> її тіло у
      вигляді вказівок.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <p>
      Вказівка виконання
      <span style="font-weight: 500" class="hljs-keyword">дії</span>:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="call" />
      </ClientOnly>
    </div>
    <h4>Анонімна дія</h4>
    <p>
      Анонімна <span style="font-weight: 500" class="hljs-keyword">дія</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> звичайна
      <span style="font-weight: 500" class="hljs-keyword">дія</span>, що
      <span style="font-weight: 500" class="hljs-keyword">не містить</span>
      назви.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="anon" />
      </ClientOnly>
    </div>
    <p>
      Виконання <span style="font-weight: 500" class="hljs-keyword">дії</span>:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="callAnon" />
      </ClientOnly>
    </div>
    <h4>Функція</h4>
    <p>
      Функція
      <span style="font-weight: 500" class="hljs-keyword"> це</span> скорочений
      запис анонімної
      <span style="font-weight: 500" class="hljs-keyword">дії</span>.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="func" />
      </ClientOnly>
    </div>
    <p>
      Виконання <span style="font-weight: 500" class="hljs-keyword">дії</span>:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="funcAnon" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
