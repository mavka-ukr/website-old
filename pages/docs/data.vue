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
макет модуль Дід
  зібрати(значення щось) текст
  розібрати(значення текст) щось
кінець
`.trim();

const simple5 = `
Дід.зібрати((імʼя="Леся", вік=20))
Дід.розібрати("(імʼя=\\"Леся\\", вік=20)")
`.trim();

useHead({
  title: "Дід | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/cloud-paks" next="/docs/math">
    <h1 class="docs-content-title">Дід</h1>

    <p>
      <code>Дід</code> - це формат для зручного збереження та передачі даних. За
      виглядом ідентичний до обʼєкта.
    </p>
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
    <blockquote>
      Значення може бути числом, текстом, логічним, списком, словником, обʼєктом
      або пусто.
    </blockquote>
    <hr />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple4" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple5" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
