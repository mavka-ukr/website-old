<script setup>
const number = `
1

3.14

0шААББВВ

0д0110101

-2
`.trim();

const string = `
"я ю є"

"Гетьте, думи, ви хмари осінні!"
`.trim();

const logical = `
так

ні
`.trim();

const list = `
[1, 3.14, -2, Людина(), так, "ого!"]
`.trim();

const map = `
(лайк="вподобка", баг="вада")
`.trim();

const voidity = `
пусто
`.trim();

const obj = `
Ракета(назва="Нептун")

Паспорт(прізвище="Когут",
        імʼя="Давид",
        по_батькові="Богданович")
`.trim();

const diia = `
дія привіт()
  друк("привіт!")
кінець

ще_привіт = дія()
  друк("ще привіт!")
кінець

і_ще_привіт = (): друк("і ще привіт!")
`.trim();

const structure = `
структура Атом
  ядро Ядро
  електрони список<Електрон>
кінець
`.trim();

const module = `
модуль двигуни
  структура ІоннийДвигун
    ;; властивості
  кінець

  структура РеактивнийДвигун
    ;; властивості
  кінець

  дати ІоннийДвигун
  дати РеактивнийДвигун
кінець
`.trim();

const atom = `
Атом(ядро=Ядро(...), електрони=[...])
`.trim();

const book = `
Книжка(
  назва="Лісова пісня",
  автор=Автор(псевдо="Леся Українка"),
  рік=1911,
  жанр="драма"
)
`.trim();

const animal = `
Тварина(
  вид="кіт",
  імʼя="Тимофій",
  вік=2,
  стать="чоловіча"
)
`.trim();

const is = `
друк(2 є пусто) ;; ні
друк(2 є логічне) ;; ні
друк(2 є число) ;; так
друк(2 є текст) ;; ні
друк(2 є список) ;; ні
друк(2 є словник) ;; ні
друк(2 є Дія) ;; ні
друк(2 є Структура) ;; ні
друк(2 є Атом) ;; ні
`.trim();

const isGet = `
друк(Структура.дізнатись(пусто)) ;; пусто
друк(Структура.дізнатись(так)) ;; <структура логічне>
друк(Структура.дізнатись(2)) ;; <структура число>
друк(Структура.дізнатись("йой...")) ;; <структура текст>
друк(Структура.дізнатись([1, "а", ні])) ;; <структура список>
друк(Структура.дізнатись((
  "структура"="Елементарний обʼєкт Мавки для опису обʼєктів.")
)) ;; <структура словник>
друк(Структура.дізнатись((): друк("привіт"))) ;; <структура Дія>
`.trim();

const applyDiias = `
Кіт(імʼя="Тимофій").мавкнути()

Атом(...).розчепити()

Ракета(...).запустити()

2 * 10
`.trim();

useHead({
  title: "Обʼєкт | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/вказівка" next="/документація/субʼєкт">
    <h1 class="docs-content-title">Обʼєкт</h1>

    <p>
      Обʼєкт
      <span style="font-weight: 500" class="hljs-keyword">є</span>
      фундаментальним поняттям у <span class="diia-word">Мавці</span>.
    </p>
    <p>
      Будь-що у <span class="diia-word">Мавці</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span> обʼєктом.
    </p>
    <p>
      Кожен обʼєкт
      <span style="font-weight: 500" class="hljs-keyword">містить</span> набір
      властивостей.
    </p>
    <p>
      Над кожним обʼєктом можна виконувати
      <span style="font-weight: 500" class="hljs-keyword"> дії</span>.
    </p>
    <!--    <p>Обʼєкт є пасивним елементом.</p>-->
    <!--    <p>Обʼєкт завжди, явно або неявно, оперується субʼєктом.</p>-->
    <!--    <p>Обʼєкт є субʼєктом самому собі.</p>-->
    <p>
      Допитливим: обʼєкт
      <span style="font-weight: 500" class="hljs-keyword"> це</span> додаток.
    </p>
    <hr />
    <h3>Елементарні обʼєкти</h3>
    <p>
      Елементарні обʼєкти надаються <span class="diia-word">Мавкою</span> для
      можливості існування інших обʼєктів.
    </p>
    <p>
      Властивості елементарних обʼєктів може змінювати лише сама
      <span class="diia-word">Мавка</span>.
    </p>
    <p>
      Над елементарними обʼєктами можна виконувати
      <span style="font-weight: 500" class="hljs-keyword"> дії</span>
      <span style="font-weight: 500" class="hljs-keyword"> як</span>
      <span style="font-weight: 500" class="hljs-keyword"> і</span> над
      звичайними.
    </p>
    <h4 id="елементарні-приклади">
      Назви структур елементарних обʼєктів Мавки та приклади:
    </h4>
    <ul>
      <li>
        <p><code>пусто</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="voidity" />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/пусто`)"
          >
            пусто
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/пусто`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
      <li>
        <p><code>логічне</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="logical" />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/логічне`)"
          >
            логічне
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/логічне`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
      <li>
        <p><code>число</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="number" />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/число`)"
          >
            число
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/число`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
      <li>
        <p><code>текст</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="string" />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/текст`)"
          >
            текст
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/текст`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
      <li>
        <p><code>список</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="list" />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/список`)"
          >
            список
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/список`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
      <li>
        <p><code>словник</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="map" />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/словник`)"
          >
            словник
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/словник`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
      <li>
        <p><code>Дія</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="diia" />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/дія`)"
          >
            дію
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/дія`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
      <li>
        <p><code>Структура</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs
              language="diia"
              :autodetect="false"
              :code="structure"
            />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/структура`)"
          >
            структуру
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/структура`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
      <li>
        <p><code>Модуль</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="module" />
          </ClientOnly>
        </div>
        <blockquote>
          Докладніше про
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/модуль`)"
          >
            модуль
          </NuxtLink>
          читайте у
          <NuxtLink
            class="link external"
            :href="encodeURI(`/документація/модуль`)"
          >
            відповідному розділі
          </NuxtLink>
          .
        </blockquote>
      </li>
    </ul>
    <hr />
    <h3>Складені обʼєкти</h3>
    <p>
      Складеними обʼєктами
      <span style="font-weight: 500" class="hljs-keyword"> є</span> ті обʼєкти,
      <span style="font-weight: 500" class="hljs-keyword"> структури</span> яких
      описані вами.
    </p>
    <p>
      Кожен складений обʼєкт спочатку описується за допомогою
      <span style="font-weight: 500" class="hljs-keyword"> структури</span>.
    </p>
    <h4>Приклади складених обʼєктів</h4>
    <ul>
      <li>
        <p><code>Атом</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="atom" />
          </ClientOnly>
        </div>
      </li>
      <li>
        <p><code>Книжка</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="book" />
          </ClientOnly>
        </div>
      </li>
      <li>
        <p><code>Тварина</code></p>
        <div class="code-window code-window-full">
          <ClientOnly>
            <highlightjs language="diia" :autodetect="false" :code="animal" />
          </ClientOnly>
        </div>
      </li>
    </ul>
    <hr />
    <h3 id="дії">Дії обʼєкта</h3>
    <p>
      Над кожним обʼєктом можна виконувати
      <span style="font-weight: 500" class="hljs-keyword"> дії</span>. Так-як
      дуже часто певні
      <span style="font-weight: 500" class="hljs-keyword"> дії</span> можна
      виконувати лише над конкретним обʼєктом, то їх можна причепити до самого
      обʼєкта
      <span style="font-weight: 500" class="hljs-keyword"> як</span>
      властивості. Ці
      <span style="font-weight: 500" class="hljs-keyword"> дії</span> можна
      отримати з обʼєкта
      <span style="font-weight: 500" class="hljs-keyword"> та</span> виконати.
      При виконанні таких
      <span style="font-weight: 500" class="hljs-keyword"> дій</span>, субʼєктом
      обʼєкта <span style="font-weight: 500" class="hljs-keyword"> є</span> сам
      обʼєкт. В
      <span style="font-weight: 500" class="hljs-keyword"> дії</span> звертатись
      до нього можна через <code>я</code>.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="applyDiias" />
      </ClientOnly>
    </div>
    <blockquote>
      Докладніше про
      <NuxtLink class="link external" :href="encodeURI(`/документація/дія`)">
        дії
      </NuxtLink>
      читайте у
      <NuxtLink class="link external" :href="encodeURI(`/документація/дія`)">
        відповідному розділі
      </NuxtLink>
      .
    </blockquote>
    <blockquote>
      Докладніше про
      <NuxtLink
        class="link external"
        :href="encodeURI(`/документація/структура`)"
      >
        структури
      </NuxtLink>
      читайте у
      <NuxtLink
        class="link external"
        :href="encodeURI(`/документація/структура`)"
      >
        відповідному розділі
      </NuxtLink>
      .
    </blockquote>
    <hr />
    <h3 id="отримання-стуктури">Отримання структури обʼєкта</h3>
    <p>
      Так-як кожен обʼєкт створюється за певною
      <span style="font-weight: 500" class="hljs-keyword"> структурою</span>,
      часто
      <span style="font-weight: 500" class="hljs-keyword"> є</span> потреба
      дізнатись що
      <span style="font-weight: 500" class="hljs-keyword"> це</span> за
      <span style="font-weight: 500" class="hljs-keyword"> структура</span>.
    </p>
    <p>
      Для цього <span class="diia-word">Мавка</span> має спеціальну допоміжну
      <span style="font-weight: 500" class="hljs-keyword"> дію </span>
      <code>Структура.дізнатись</code>.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="isGet" />
      </ClientOnly>
    </div>
    <hr />
    <h3 id="перевірка-структури">Перевірка структури обʼєкта</h3>
    <p>
      Часто необхідно перевірити
      <span style="font-weight: 500" class="hljs-keyword"> структуру</span>
      обʼєкта.
    </p>
    <p>
      Для цього <span class="diia-word">Мавка</span> має оператор
      <code>є</code>.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="is" />
      </ClientOnly>
    </div>
    <blockquote>
      Докладніше про
      <NuxtLink
        class="link external"
        :href="encodeURI(`/документація/структура`)"
      >
        структури
      </NuxtLink>
      читайте у
      <NuxtLink
        class="link external"
        :href="encodeURI(`/документація/структура`)"
      >
        відповідному розділі
      </NuxtLink>
      .
    </blockquote>
  </UiDocsWrapper>
</template>
