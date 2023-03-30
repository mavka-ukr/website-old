<script setup>
const simple1 = `
послідовність = [1, 1, 2, 3, 5, 8, 13, 21]
`.trim();

const simple2 = `
перебрати послідовність як ч
  друк(ч)
кінець

якщо послідовність містить 3
  друк("послідовність чисел містить 3")
кінець
`.trim();

const simple3 = `
перше = послідовність.отримати(0) ;; 1

шосте = послідовність[5] ;; 8
`.trim();

const simple4 = `
макет список_м
  розмір() число
  додати(значення щось) число
  забрати() щось
  сортувати(функція_порівняння Дія) список
  фільтрувати(функція_перевірки Дія) список
  знайти(функція_перевірки Дія) щось
  знайти_позицію(функція_перевірки Дія) число
  перетворити(функція_перетворення Дія) список
  заповнити(значення щось) список
  злити(інший_список список) список
  зʼєднати(розділювач текст = "") текст
  обернути() список
  зрізати(позиція_від число, позиція_до число = пусто) список
  скоротити(функція_скорочення Дія, початкове_значення щось = пусто) щось
кінець
`.trim();
</script>

<template>
  <DocsWrapper prev="/docs/magic" next="/docs/maps">
    <h1 class="docs-content-title">
      Списки
    </h1>

    <p>
      <code>список</code> є спеціальною структурою, що дозволяє зберігати дані послідовно.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            lang="diia"
            :autodetect="false"
            :code="simple1"
        />
      </ClientOnly>
    </div>
    <br>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            lang="diia"
            :autodetect="false"
            :code="simple2"
        />
      </ClientOnly>
    </div>
    <p>
      Отримати певний елемент зі списку можна завдяки дії <code>отримати</code> або оператора отримання елемента:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            lang="diia"
            :autodetect="false"
            :code="simple3"
        />
      </ClientOnly>
    </div>
    <blockquote>
      Доступ до елементів відбувається через індекс, який починається з нуля.
    </blockquote>
    <p>
      Макет списку:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            lang="diia"
            :autodetect="false"
            :code="simple4"
        />
      </ClientOnly>
    </div>
    <blockquote>
      Документація доповнюється.
    </blockquote>
  </DocsWrapper>
</template>
