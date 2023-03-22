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
</script>

<template>
  <DocsWrapper>
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
    <blockquote>
      Документація доповнюється.
    </blockquote>
  </DocsWrapper>
</template>
