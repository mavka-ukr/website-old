<script setup>
const simple = `
структура Паспорт
  прізвище текст
  імʼя текст
  по_батькові текст
  дата_народження текст
  стать текст
кінець
`.trim();

const simpleCreate = `
мій_паспорт = Паспорт(прізвище="Когут",
                      імʼя="David",
                      по_батькові="Богданович",
                      дата_народження="10.02.2001",
                      стать="чоловіча")
`.trim();

const simpleDiia = `
дія Паспорт.змінити_імʼя(нове_імʼя)
  я.імʼя = нове_імʼя
кінець
`.trim();

const simpleDiiaRun = `
мій_паспорт.змінити_імʼя("Давид")
`.trim();

const being = `
структура Гриб
  ;; опис гриба
кінець

структура Голова
  ;; опис голови
кінець

структура Шия
  ;; опис шиї
кінець

структура Тулуб
  ;; опис тулуба
кінець

структура Кінцівки
  ;; опис кінцівок
кінець

структура Тварина
  голова Голова
  шия Шия
  тулуб Тулуб
  кінцівки Кінцівки
кінець

структура Людина є Тварина
  імʼя текст
  свідомість логічне
кінець

адам = Людина("Давид", ні)
;; єва = Людина("Діана", так)

друк(адам є Людина) ;; так
друк(адам є Тварина) ;; так
друк(адам є Гриб) ;; ні
`.trim();

const structureStructure = `
структура Структура
кінець
`.trim();

useHead({
  title: "Структура | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/дія" next="/документація/число">
    <h1 class="docs-content-title">Структура</h1>

    <p>
      <span style="font-weight: 500" class="hljs-keyword">Структура</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      елементарним обʼєктом <span class="diia-word">Мавки</span>, що зберігає
      опис властивостей обʼєкта.
    </p>
    <p>
      Кожен обʼєкт в <span class="diia-word">Мавці</span> створений за певною
      <span style="font-weight: 500" class="hljs-keyword">структурою</span>.
    </p>
    <p>
      Кожен обʼєкт в <span class="diia-word">Мавці</span>
      <span style="font-weight: 500" class="hljs-keyword"> містить</span>
      ті властивості, які описані в його
      <span style="font-weight: 500" class="hljs-keyword">структурі</span>.
    </p>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Структура</span>
      <span style="font-weight: 500" class="hljs-keyword"> містить</span>
      властивість <code>чародія_викликати</code>, яка виконує створення обʼєкта.
    </p>
    <hr />
    <h3>Створення структур</h3>
    <p>
      Створення
      <span style="font-weight: 500" class="hljs-keyword">структури</span>
      відбувається через ключове слово <code>структура</code>. Після нього
      необхідно вказати її назву
      <span style="font-weight: 500" class="hljs-keyword">і</span> тіло у
      вигляді властивостей.
    </p>
    <h4>Приклад створення структури</h4>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <h4>Створення обʼєкта зі структури</h4>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleCreate" />
      </ClientOnly>
    </div>
    <hr />
    <h3>Створення дій обʼєкта через структуру</h3>
    <p>
      Над кожним обʼєктом можна виконувати
      <span style="font-weight: 500" class="hljs-keyword"> дії</span>. Часто
      буває, що якась
      <span style="font-weight: 500" class="hljs-keyword"> дія</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span> притаманною
      лише конкретному обʼєкту. В такому випадку існує можливість причепляти
      такі <span style="font-weight: 500" class="hljs-keyword"> дії</span> до
      обʼєкта
      <span style="font-weight: 500" class="hljs-keyword"> як</span>
      властивості.
    </p>
    <p>
      Які саме
      <span style="font-weight: 500" class="hljs-keyword"> дії</span> необхідно
      причепити визначається в
      <span style="font-weight: 500" class="hljs-keyword"> структурі</span>.
    </p>
    <p>
      <span style="font-weight: 500" class="hljs-keyword"> Дію</span> обʼєкта
      необхідно визначити після визначення
      <span style="font-weight: 500" class="hljs-keyword"> структури</span>
      <span style="font-weight: 500" class="hljs-keyword"> і</span> перед
      створенням обʼєкта.
    </p>
    <p>Причеплення відбувається під час створення обʼєкта.</p>
    <p>
      В такій <span style="font-weight: 500" class="hljs-keyword"> дії</span> є
      можливість керувати обʼєктом через субʼєкт <code>я</code>.
    </p>
    <h4>Приклад створення дії обʼєкта</h4>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleDiia" />
      </ClientOnly>
    </div>
    <h4>Приклад виконання дії обʼєкта</h4>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
          language="diia"
          :autodetect="false"
          :code="simpleDiiaRun"
        />
      </ClientOnly>
    </div>
    <hr />
    <h3>Батьківський обʼєкт</h3>
    <p>
      Кожен обʼєкт в <span class="diia-word">Мавці</span> наслідує властивості
      батьківського обʼєкта.
    </p>
    <p>
      <span class="diia-word">Мавка</span> надає можливість вказувати
      властивості якого саме обʼєкта необхідно наслідувати. Це робиться під час
      визначення
      <span style="font-weight: 500" class="hljs-keyword"> структури</span>.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="being" />
      </ClientOnly>
    </div>
    <hr />
    <h3>Структура структури</h3>
    <UiCodeBlock :files="structureStructure" />
  </UiDocsWrapper>
</template>
