<script setup>
const simple1 = `
словотвір = (
  лайк="вподобайка",
  лінк="посилання",
  кавер="переспів",
  баг="вада"
)
`.trim();

const simple2 = `
якщо словотвір містить "лайк"
  друк("словник суржиків містить лайк")
кінець
`.trim();

const simple3 = `
слово = словотвір.отримати("баг") ;; вада

слово = словотвір["кавер"] ;; переспів

слово = словотвір.лайк ;; вподобайка
`.trim();

const simple4 = `
макет словник_м
  покласти(ключ щось, значення щось) словник_м
  отримати(ключ щось) щось
  вилучити(ключ щось) логічне
  очистити() ніщо
  ключі() список
  значення() список
  розмір() число
кінець
`.trim();

useHead({
  title: "Словники | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/списки" next="/документація/інтернет">
    <h1 class="docs-content-title">Словники</h1>

    <p>
      <code>словник</code> є спеціальною структурою, що дозволяє зберігати дані
      з привʼязкою до певних ключів.
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
      Отримати певний елемент зі словника можна через дію <code>отримати</code>,
      оператор отримання елемента або як звичайну властивість обʼєкту:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs lang="diia" :autodetect="false" :code="simple3" />
      </ClientOnly>
    </div>
    <p>Макет словника:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs lang="diia" :autodetect="false" :code="simple4" />
      </ClientOnly>
    </div>
    <blockquote>Документація доповнюється.</blockquote>
  </UiDocsWrapper>
</template>
