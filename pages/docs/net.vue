<script setup>
const simple = `
;; взяти пак інтернет.отримати

чекати книги = отримати("пі.книги.укр/за_автором/Леся+Українка")

друк(книги)
`.trim();

const simple2 = `
;; взяти пак інтернет.передати

лісова_пісня = Книга(
  назва="Лісова пісня",
  автор=Автор("Леся Українка"),
  рік=1911
)

чекати передати("пі.книги.укр/зберегти", лісова_пісня)
`.trim();

const simple3 = `
;; взяти пак інтернет.приєднатись

кімната_книг = чекати приєднатись("кімната.книги.укр")

кімната_книг.слухати(
  (подія): друк(подія)
)

чекати кімната_книг.передати("привіт!")

чекати кімната_книг.вийти()
`.trim();

useHead({
  title: "Інтернет | Документація | Мавка",
});
</script>

<template>
  <UiDocsWrapper prev="/docs/maps" next="/docs/extensions">
    <h1 class="docs-content-title">Інтернет</h1>

    <p>
      <span class="diia-word">Мавка</span> надає дуже високорівневий програмний
      інтерфейс (ПІ) для взаємодії з мережею інтернет. Передача даних
      відбувається по протоколу HTTP та у форматі
      <span class="diia-word">Дід</span>.
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
    <p>Також є підтримка WebSockets.</p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple3" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
