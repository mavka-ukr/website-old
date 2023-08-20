<script setup>
const a = `
моя_перша_суперпрограма/
├─ .паки/
│  ├─ суперпак/
│  │  ├─ а.м
│  │  ├─ б.м
├─ запуск.м
`.trim();
const b = `
дія привітати()
  друк("Привіт від Лесі!")
кінець

дати привітати
`.trim();
const c = `
взяти пак суперпак
;; взяти пак суперпак як гіперпак
;; взяти пак суперпак.а
;; взяти пак суперпак.а як суперпак_а
;; взяти пак суперпак.а.привітати
;; взяти пак суперпак.а.привітати як п

суперпак.а.привітати()
`.trim();

const d = `
моя_перша_суперпрограма/
├─ .паки/
│  ├─ суперпак/
│  │  ├─ а.м
│  │  ├─ суперпак.м
├─ запуск.м
`.trim();

const e = `
взяти а

дія привітати_двічі()
  а.привітати()
  а.привітати()
кінець

дати привітати_двічі
`.trim();

const f = `
взяти пак суперпак

суперпак.привітати_двічі
`.trim();

useHead({
  title: "Паки | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/examples" next="/docs/cloud-paks">
    <h1 class="docs-content-title">Паки</h1>

    <p>
      Паки дозволяють виносити часто вживані модулі з програми і ділитись ними з
      іншими.
    </p>
    <p>
      Всі паки програми знаходяться у папці <code>.паки</code> в корені проєкту.
    </p>
    <p>Ось структура проєкту, де використовуються паки:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs :language="null" :autodetect="false" :code="a" />
      </ClientOnly>
    </div>
    <p>
      <code>.паки/суперпак/а.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="b" />
      </ClientOnly>
    </div>
    <p>
      <code>запуск.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="c" />
      </ClientOnly>
    </div>
    <hr />
    <p>
      Якщо в корені паку є файл з такою ж назвою як сам пак, то цей файл буде
      завантажено як основний модуль паку.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="d" />
      </ClientOnly>
    </div>
    <p>
      <code>.паки/суперпак/суперпак.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="e" />
      </ClientOnly>
    </div>
    <p>
      <code>запуск.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="f" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
