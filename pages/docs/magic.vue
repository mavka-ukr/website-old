<script setup>
const simple1 = `
виконати_виклик ;; перезаписує оператор виклику

виконати_додавання ;; перезаписує оператор додавання
виконати_множення ;; перезаписує оператор множення
виконати_ділення ;; перезаписує оператор ділення
виконати_віднімання ;; перезаписує оператор віднімання
`.trim();

const simple2 = `
структура МіфічнаІстота
  назва текст
кінець

дія МіфічнаІстота.виконати_виклик()
  друк("%(я.назва) вже на шляху до вас...")
кінець

лісовик = МіфічнаІстота(назва="Лісовик")

лісовик()
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Магічні дії
    </h1>

    <p>
      <span class="diia-word">Мавка</span> надає можливість перезаписувати деякі вбудовані операції для структур через
      дії. Ці дії
      називаються магічними.
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
    <p>Приклад:</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            lang="diia"
            :autodetect="false"
            :code="simple2"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
