<script setup>
const dict = `
(
  "гроші"="кров",
  "влада"="мозок",
  "бізнес"="серце",
  "культура"="душа"
)
`.trim();

const dictStructure = `
структура словник<В, З>
  розмір число
кінець
`.trim();

const dictStructureKeysMethod = `дія словник.визначення() список<В>`;
const dictStructureValuesMethod = `дія словник.значення() список<З>`;
const dictStructureDeleteMethod = `дія словник.видалити(визначення В) логічне`;
const dictStructureClearMethod = `дія словник.очистити() словник<В, З>`;
const dictStructureMagicContainsMethod = `дія словник.чародія_містить(визначення В) логічне`;
const dictStructureMagicGetMethod = `дія словник.чародія_отримати(визначення В) З`;
const dictStructureMagicSetMethod = `дія словник.чародія_покласти(визначення В, значення З) З`;
const dictStructureMagicIteratorMethod = `дія словник.чародія_перебір() перебір<В>`;
const dictStructureMagicIteratorWithKeyMethod = `дія словник.чародія_перебір_з_визначенням() перебір_з_визначення<В, З>`;
const dictStructureMagicTextMethod = `дія словник.чародія_текст() текст`;

useHead({
  title: "Словник | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/список" next="/документація/модуль">
    <h1 class="docs-content-title">Словник</h1>
    <p>
      Словник
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, що зберігає звʼязані
      обʼєкти у вигляді списку.
    </p>
    <p>
      Словник описано
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>словник</code>.
    </p>
    <hr />
    <h3>Створення словника</h3>
    <p>
      Словник записується між круглими дужками, де кожен елемент розділений
      комою
      <span style="font-weight: 500" class="hljs-keyword">і </span>
      його обʼєкти звʼязані символом <code>=</code>.
    </p>
    <UiCodeBlock :files="dict" />
    <hr />
    <h3>Структура словника</h3>
    <UiCodeBlock :files="dictStructure" />
    <hr />
    <h3>Дії словника</h3>
    <p>
      <code>визначення</code>
      <span style="font-weight: 500" class="hljs-keyword"> це дія</span> для
      отримання списку визначень цього словника.
    </p>
    <UiCodeBlock :files="dictStructureKeysMethod" />

    <p>
      <code>значення</code>
      <span style="font-weight: 500" class="hljs-keyword"> це дія</span> для
      отримання списку значень цього словника.
    </p>
    <UiCodeBlock :files="dictStructureValuesMethod" />

    <p>
      <code>видалити</code>
      <span style="font-weight: 500" class="hljs-keyword"> це дія</span> для
      видалення елемента зі словника за певним визначення.
    </p>
    <UiCodeBlock :files="dictStructureDeleteMethod" />

    <p>
      <code>очистити</code>
      <span style="font-weight: 500" class="hljs-keyword"> це дія</span> для
      видалення всіх елементів словника. Вертає той самий словник.
    </p>
    <UiCodeBlock :files="dictStructureClearMethod" />

    <p>
      <code>чародія_містить</code>
      <span style="font-weight: 500" class="hljs-keyword"> це дія</span> для
      перевірки чи словник містить елемент за певним визначенням.
    </p>
    <UiCodeBlock :files="dictStructureMagicContainsMethod" />

    <p>
      <code>чародія_отримати</code>
      <span style="font-weight: 500" class="hljs-keyword"> це дія</span> для
      отримання значення зі словника.
    </p>
    <UiCodeBlock :files="dictStructureMagicGetMethod" />

    <p>
      <code>чародія_покласти</code>
      <span style="font-weight: 500" class="hljs-keyword"> це дія</span> для
      зміни значення в словнику за певним визначенням.
    </p>
    <UiCodeBlock :files="dictStructureMagicSetMethod" />

    <p>
      <code>чародія_перебір</code>
      <span style="font-weight: 500" class="hljs-keyword"> це дія</span> для
      отримання
      <span style="font-weight: 500" class="hljs-keyword">перебору</span>
      визначень цього словника.
    </p>
    <UiCodeBlock :files="dictStructureMagicIteratorMethod" />

    <!--    <p><code>чародія_перебір_з_ключем</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для-->
    <!--      отримання-->
    <!--      <span style="font-weight: 500" class="hljs-keyword">перебору</span> елементів цього словника.</p>-->
    <!--    <UiCodeBlock :files="dictStructureMagicIteratorWithKeyMethod" />-->

    <!--    <p><code>чародія_текст</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перетворення-->
    <!--      словника на текст.</p>-->
    <!--    <UiCodeBlock :files="dictStructureMagicTextMethod" />-->
  </UiDocsWrapper>
</template>
