<script setup>
const simple = `
композиція Ракета
  внут запущено логічне
  зовн назва текст
  зовн швидкість число
  зовн вага число

  зовн дія Ракета(назва текст, швидкість число, вага число)
    я.запущено = ні
    я.назва = назва
    я.швидкість = швидкість
    я.вага = вага
  кінець

  зовн дія запустити()
    якщо я.запущено
      друк("Ракету вже запущено!")
      вернути
    кінець

    я.запущено = так
    друк("Ракету запущено!")
  кінець
кінець

нептун = Ракета("Нептун", 200, 100)
`.trim();

const simple2 = `
перелік Фрукт
  Ябко
  Грушка
  Ананас
  Сливка
кінець

абко = Фрукт.Ябко

друк(абко є Фрукт)
друк(абко == Фрукт.Ябко)
`.trim();

const simple3 = `
риса МожливістьЛітати
  зовн дія полетіти()
кінець

структура Апарат
кінець

композиція Літак є Апарат втілює МожливістьЛітати 
  зовн дія полетіти()
    друк("ок")
  кінець
кінець

л = Літак()
друк(л є Апарат)
друк(л втілює МожливістьЛітати)
`.trim();

useHead({
  title: "Композиція | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/json" next="/документація/автор">
    <blockquote>
      Заплановано на <span class="diia-word">Мавку 2</span>
    </blockquote>

    <hr />

    <h1 class="docs-content-title">Композиція</h1>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Композиція</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      вказівкою <span class="diia-word">Мавки</span>, що дозволяє створити
      <span style="font-weight: 500" class="hljs-keyword"> структуру</span>
      дуже комплексного обʼєкта.
    </p>
    <UiCodeBlock :files="simple" />

    <hr />

    <h1 class="docs-content-title">Перелік</h1>
    <UiCodeBlock :files="simple2" />

    <hr />

    <h1 class="docs-content-title">Риса</h1>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Риса</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      вказівкою <span class="diia-word">Мавки</span>, що дозволяє описати
      <span style="font-weight: 500" class="hljs-keyword"> дії</span>, які має
      <span style="font-weight: 500" class="hljs-keyword"> втілювати</span>
      обʼєкт.
    </p>
    <UiCodeBlock :files="simple3" />
  </UiDocsWrapper>
</template>
