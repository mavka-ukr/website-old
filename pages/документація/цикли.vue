<script setup>
const simpleEach = `
перебрати діапазон(0, 10) як х
  друк(х)
кінець

перебрати 0..10 як х
  друк(х)
кінець
`.trim();

const simpleWhile = `
а = 10

поки а не рівно 0
  а = а - 1
кінець
`.trim();

const simple3 = `
границя = число(читати("границя = "))

парні_числа = []

перебрати діапазон(0, границя) як ч
  ;; перебираємо лише до 50
  якщо ч більше 50
    зупинити
  кінець

  ;; якщо число не парне
  якщо ч % 2 не рівно 0
    пропустити
  кінець

  парні_числа.додати(ч)
кінець

друк(парні_числа)
`.trim();

useHead({
  title: "Цикли | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/функції" next="/документація/структури">
    <h1 class="docs-content-title">Цикли</h1>

    <p>
      Цикл є послідовним набором операцій, що повторюється визначену або
      невизначену кількість раз.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleEach" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleWhile" />
      </ClientOnly>
    </div>
    <p>Знаходження парних чисел в певному діапазоні який не перевищує 50:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple3" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
