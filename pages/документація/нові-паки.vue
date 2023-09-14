<script setup>
const a = `
моя_перша_суперпрограма/
├─ .паки/
│  ├─ суперпак/
│  │  ├─ суперпак.м
├─ програма.м
`.trim();
const b = `
дія привітати()
  друк("Привіт від Лесі!")
кінець

дати привітати
`.trim();
const c = `
взяти "суперпак"

а.привітати()
`.trim();

const d = `
моя_перша_суперпрограма/
├─ .паки/
│  ├─ суперпак/
│  │  ├─ а.м
│  │  ├─ суперпак.м
├─ програма.м
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
  title: "Паки 2.0 | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/приклади" next="/документація/хмарні-паки">
    <h1 class="docs-content-title">Паки 2.0</h1>

    <p>Оновлені паки обʼєднують звичайні паки та хмарні паки.</p>
    <p>
      Всі паки і далі знаходяться у папці <code>.паки</code> в корені проєкту.
    </p>
    <p>Проте структура папки паку змінюється:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs :language="null" :autodetect="false" :code="a" />
      </ClientOnly>
    </div>
    <p>
      Для локальних паків тепер обовʼязковим є однакова назва папки паку і
      стартового файлу паку.
    </p>
    <p>
      <code>.паки/суперпак/суперпак.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="b" />
      </ClientOnly>
    </div>
    <p>
      <code>програма.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="c" />
      </ClientOnly>
    </div>
    <p>
      Якщо пак не знайдено локально, Мавка спробує завантажити його з
      <code>пак.укр</code>.
    </p>
    <p>
      Якщо паку не буде знайдено на <code>пак.укр</code> й буде вказано URL в
      назві паку (напр. <code>взяти "пак.тачки.укр"</code>), Мавка спробує
      завантажити його звідти.
    </p>
    <p>В іншому випадку буде помилка.</p>
  </UiDocsWrapper>
</template>
