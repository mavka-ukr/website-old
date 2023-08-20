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
  довжина() число
  додати(значення щось) число
  забрати() щось
  отримати(позиція число) щось
  сортувати(функція_порівняння Дія) список_м
  фільтрувати(функція_перевірки Дія) список_м
  знайти(функція_перевірки Дія) щось
  знайти_позицію(функція_перевірки Дія) число
  перетворити(функція_перетворення Дія) список_м
  заповнити(значення щось) список_м
  злити(інший_список список_м) список_м
  зʼєднати(розділювач текст = "") текст
  обернути() список_м
  зрізати(позиція_від число, позиція_до число = пусто) список_м
  скоротити(функція_скорочення Дія, початкове_значення щось = пусто) щось
кінець
`.trim();

useHead({
  title: "Списки | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/магія" next="/документація/словники">
    <h1 class="docs-content-title">Списки</h1>

    <p>
      <code>список</code> є спеціальною структурою, що дозволяє зберігати дані
      послідовно.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs lang="diia" :autodetect="false" :code="simple1" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs lang="diia" :autodetect="false" :code="simple2" />
      </ClientOnly>
    </div>
    <p>
      Отримати певний елемент зі списку можна завдяки дії
      <code>отримати</code> або оператора отримання елемента:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs lang="diia" :autodetect="false" :code="simple3" />
      </ClientOnly>
    </div>
    <blockquote>
      Доступ до елементів відбувається через індекс, який починається з нуля.
    </blockquote>
    <p>Макет списку:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs lang="diia" :autodetect="false" :code="simple4" />
      </ClientOnly>
    </div>
    <blockquote>Документація доповнюється.</blockquote>
  </UiDocsWrapper>
</template>
