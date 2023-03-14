<script setup>
const simple1 = `
числа = Список(1, 1, 2, 3, 5, 8, 13, 21)
`.trim();

const simple2 = `
перебрати числа як ч
  друк(ч)
кінець
`.trim();

const simple3 = `
перше = числа.отримати(0) ;; 1

шосте = числа(5) ;; 8
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Списки
    </h1>

    <p>
      <code>Список</code> є спеціальною структурою, що дозволяє зберегти послідовність даних.
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
      Отримати певний елемент зі списку можна завдяки дії <code>отримати</code> або оператора виклику:
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
