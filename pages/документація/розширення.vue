<script setup>
const fetchJs = `
var $отримати_джсон = async (p) => {
  var url = Array.isArray(p) ? p[0] : p['адреса'];

  var response = await fetch(url);
  var json = await response.json();

  return mavka.make(json);
};
`.trim();

const mainDiia = `
взяти файл "fetchAndParseJson.js" як fetchAndParseJson
js fetchAndParseJson
макет тривала дія отримати_джсон(адреса текст) щось

чекати відповідь = отримати_джсон("https://api.storinka.menu/invoke/4/getCafe?id=kava-gallery")

друк(відповідь)
`.trim();

const tools = `
mavka.make(value) // створити обʼєкт Мавки з JS-значення

mavka.unmake(object) // отримати JS-значення з обʼєкта Мавки

mavka.get(object, name) // отримати властивість з обʼєкта Мавки

mavka.set(object, name, value) // встановити властивість обʼєкта Мавки
`.trim();

useHead({
  title: "Розширення | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/пак" next="/документація/бог">
    <h1 class="docs-content-title">Розширення</h1>

    <p>
      Так історично склалось, що <span class="diia-word">Мавка</span> написана
      JavaScript-ом.
    </p>
    <p>Тому існує можливість розширення.</p>
    <p>
      Розширення дозволяє доповнювати можливості мови за допомогою JavaScript.
      По-суті, ви можете написати скрипт на JS-і
      <span style="font-weight: 500" class="hljs-keyword">та</span> підключити
      його до <span class="diia-word">Мавки</span>.
    </p>
    <hr />
    <h3>Приклад</h3>
    <p>
      У цьому прикладі ми створюємо розширення, що дозволяє отримати JSON за
      певною URL.
    </p>
    <p>
      <code>fetchAndParseJson.js</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="javascript" :code="fetchJs" />
      </ClientOnly>
    </div>
    <p>
      <code>галерея_кави.м</code>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="mainDiia" />
      </ClientOnly>
    </div>
    <hr />
    <blockquote>Часте прибігання до розширень є гріхом.</blockquote>
    <blockquote>Сторінка доповнюється.</blockquote>
  </UiDocsWrapper>
</template>
