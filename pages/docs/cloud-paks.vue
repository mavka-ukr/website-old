<script setup>
const a = `
взяти "хмарний.пак.укр/привіт"

привіт()
`.trim();

const b = `
дія привіт()
  друк("Привіт від Лесі!")
кінець

дати привіт
`.trim();
</script>

<template>
  <DocsWrapper prev="/docs/paks" next="/docs/data">
    <h1 class="docs-content-title">
      Хмарні паки
    </h1>

    <p>
      Хмарні паки дозволяють підключати модулі напряму з мережі прямо в коді без додаткових дій.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            :language="null"
            :autodetect="false"
            :code="a"
        />
      </ClientOnly>
    </div>
    <p>
      У прикладі вище дані підтягуються з файлу привіт, що знаходиться за адресою <code>хмарний.пак.укр/привіт</code>.
    </p>
    <p>
      А ось що знаходиться в самому файлі:
    </p>
    <p>
      <code>хмарний.пак.укр/привіт</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            :language="null"
            :autodetect="false"
            :code="b"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
