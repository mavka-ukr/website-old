<script setup>
const a = `
а число = 1

б текст = "сонце сяє, вітер віє"

в число або текст = (): друк(2) ;; неправильно, хоча інтерпретер не скаржитиметься

г число або текст або Дія = (): друк(2) ;; правильно
`.trim();

const b = `
дія привіт(а текст, б число, в Дія)
  друк("привіт")
кінець

сум = (а число, б число): а + б
`.trim();

const c = `
дія привіт(а текст, б число, в Дія) текст
  "привіт"
кінець

сум = (а число, б число) число: а + б
`.trim();

const obj = `
Ракета(назва="Нептун")

Паспорт(прізвище="Когут",
        імʼя="Давид",
        по_батькові="Богданович")
`.trim();

const d = `
структура А
  б число
  в текст
  г Дія або пусто
кінець

а = А(б=2, в="круто!", г=пусто)
`.trim();
</script>

<template>
  <DocsWrapper prev="/docs/data-types" next="/docs/conditional">
    <h1 class="docs-content-title">
      Підказки типів
    </h1>

    <p>
      <span class="diia-word">Мавка</span> надає можливість вказувати типи до певних конструкцій в мові.
      Ці типи не перевіряються під час виконання програми, а лише дозволяють надати додаткову інформацію для розробників.
      Ці підказки є аналогом до <a class="link external" target="_blank" href="https://docs.python.org/3/library/typing.html">Python type hints</a>.
    </p>
    <p>
      Конструкції, в яких можна вказати тип:
    </p>
    <ul>
      <li><code>присвоєння змінної</code></li>
      <li><code>параметр дії або функції</code></li>
      <li><code>результат дії або функції</code></li>
      <li><code>властивість структури</code></li>
    </ul>
    <p>
      <b>присвоєння змінної:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="a"
        />
      </ClientOnly>
    </div>
    <p>
      <b>параметр дії або функції:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="b"
        />
      </ClientOnly>
    </div>
    <p>
      <b>результат дії або функції:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="c"
        />
      </ClientOnly>
    </div>
    <p>
      <b>властивість структури:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="d"
        />
      </ClientOnly>
    </div>
    <h2 style="margin-top: 3rem">Доступні типи:</h2>
    <ul>
      <li><code>текст</code></li>
      <li><code>число</code></li>
      <li><code>логічне</code></li>
      <li><code>список</code></li>
      <li><code>словник</code></li>
      <li><code>обʼєкт</code></li>
      <li><code>пусто</code></li>
      <li><code>щось</code></li>
      <li><code>ніщо</code></li>
      <li><code>(назва макета)</code></li>
      <li><code>(назва структури)</code></li>
      <li><code>(тип) або (тип)</code></li>
    </ul>
  </DocsWrapper>
</template>

<style lang="scss">
code {
  padding: .2rem .5rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
}

ul {
  li {
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
