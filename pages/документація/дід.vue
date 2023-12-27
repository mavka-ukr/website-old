<script setup>
const simple = `
Паспорт(
  прізвище="Когут",
  імʼя="Давид",
  по_батькові="Богданович",
  дата_народження=Дата(
    день=20,
    місяць=1,
    рік=2001
  ),
  застарілий=ні
)
`.trim();

const simple2 = `
Книжка(
  назва="Лісова пісня",
  жанри=["Пригоди", "Драма", "Романтика"],
  параметри=(
    сторінок=200,
    розмір=(
      довжина=15,
      ширина=10,
      висота=2
    )
  )
)
`.trim();

const simple3 = `
Конкурс(
  номер=1,
  завдання="Створити розбирач формату Дід",
  фонд=20000,
  реченець="12.04.2023"
)
`.trim();

const simple4 = `
макет модуль дід
  макет дія зібрати(значення щось) текст
  макет дія розібрати(значення текст, визначення словник<текст, Структура> = ()) щось
кінець
`.trim();

const simple5 = `
взяти "дід"

дід.зібрати((імʼя="Леся", вік=20))
`.trim();

const simple6 = `
взяти "дід"

дід.розібрати("""(імʼя="Леся", вік=20)""")
`.trim();

useHead({
  title: "Дід | Бібліотека | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/математика" next="/документація/сервер">
    <h1 class="docs-content-title">Дід</h1>

    <p>
      <span class="diia-word">Дід</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> формат для
      зручного збереження
      <span style="font-weight: 500" class="hljs-keyword">та</span> передачі
      обʼєктів <span class="diia-word">Мавки</span>.
    </p>
    <p>
      <span class="diia-word">Дід</span> дозволяє зберігати
      <span style="font-weight: 500" class="hljs-keyword">та</span> передавати
      лише такі обʼєкти:
    </p>
    <ul>
      <li><code>пусто</code></li>
      <li><code>логічне</code></li>
      <li><code>число</code></li>
      <li><code>текст</code></li>
      <li><code>список</code></li>
      <li><code>словник</code></li>
      <li><code>складений обʼєкт</code></li>
    </ul>
    <hr />
    <h3>Приклади обʼєктів Мавки, що підтримуються Дід-ом</h3>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple2" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple3" />
      </ClientOnly>
    </div>
    <hr />
    <h3>Макет модуля дід</h3>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple4" />
      </ClientOnly>
    </div>
    <hr />
    <h3>Приклади використання</h3>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple5" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple6" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
