<script setup>
const basic = `
якщо а рівно 2
  друк("а = 2")
кінець
`.trim();

const other = `
якщо (а == 2 або б != так) і (в == "їхав козак за дунай...")
  друк("пройшло!")
кінець

якщо бути
  друк("йой, най буде")
інакше
  друк("чи не бути...")
кінець

якщо !гарно
  друк("тоді погано...")
кінець

якщо а є число
  друк("а є число")
якщо а є текст
  друк("а є текст")
інакше
  друк("а не є текст і не є число")
кінець
`.trim();

const ternary = `
чи_а_рівно_2 = а рівно 2 ? так : ні

;; синтаксис:
;; [умова] ? [вірно] : [не вірно]
`.trim();

const operators = `
== ;; рівно
!= ;; не рівно
> ;; більше
< ;; менше
>= ;; більше або рівно
<= ;; менше або рівно

є ;; чи є певного типу
не є ;; чи не є певного типу

рівно ;; ==
не рівно ;; !=
більше ;; >
менше ;; <
не менше ;; >=
не більше ;; <=

містить ;; чи містить ключ (словник) або елемент (список)
не містить ;; чи не містить ключ (словник) або елемент (список)

! ;; вивернути значення
`.trim();

useHead({
  title: "Умовні оператори | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/types" next="/docs/operations">
    <h1 class="docs-content-title">Умовні оператори</h1>

    <p>Умовні операції пишуться так:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="basic" />
      </ClientOnly>
    </div>
    <p>Інші приклади:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="other" />
      </ClientOnly>
    </div>
    <p>Скорочений вигляд операції порівняння:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="ternary" />
      </ClientOnly>
    </div>
    <p>Список доступних операторів порівняння:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="operators" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
