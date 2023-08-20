<script setup>
const simple = `
спробувати
  друк("крок 1...")
  друк("крок 2...")
  друк("крок 3...")
  впасти "помилка крок 3!"
  друк("крок 4...")
  друк("крок 3...")
зловити п
  друк("не вдалось виконати запуск: %(п)")
кінець
`.trim();

const simple2 = `
спробувати
  впасти 0
зловити п
  спробувати
    впасти 1
  зловити п
    друк(":(")
  кінець
кінець
`.trim();

useHead({
  title: "Спроби | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/коментарі" next="/документація/магія">
    <h1 class="docs-content-title">Спроби</h1>

    <p>
      Програма може впасти в будь-який момент виконання. Щоб запобігати таким
      падінням існують "Спроби". Спроба дозволяє обгорнути код в певну
      конструкцію, і якщо під час виконання цього коду станеться помилка, ви
      можете зловити цю помилку та якось її обробити.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <br />
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple2" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
