<script setup>
const magicAdd = `дія [назва].чародія_додати(значення [тип]) [тип]`;
const magicSub = `дія [назва].чародія_відняти(значення [тип]) [тип]`;
const magicMul = `дія [назва].чародія_помножити(значення [тип]) [тип]`;
const magicDiv = `дія [назва].чародія_поділити(значення [тип]) [тип]`;
const magicMod = `дія [назва].чародія_остача(значення [тип]) [тип]`;
const magicDivDiv = `дія [назва].чародія_частка(значення [тип]) [тип]`;
const magicPow = `дія [назва].чародія_степінь(значення [тип]) [тип]`;
const magicXor = `дія [назва].чародія_вабо(значення [тип]) [тип]`;
const magicBor = `дія [назва].чародія_дабо(значення [тип]) [тип]`;
const magicBand = `дія [назва].чародія_ді(значення [тип]) [тип]`;
const magicShl = `дія [назва].чародія_вліво(значення [тип]) [тип]`;
const magicShr = `дія [назва].чародія_вправо(значення [тип]) [тип]`;
const magicPositive = `дія [назва].чародія_додатнє() [тип]`;
const magicNegative = `дія [назва].чародія_відʼємне() [тип]`;
const magicBnot = `дія [назва].чародія_дні() [тип]`;
const magicGt = `дія [назва].чародія_більше(значення [тип]) [тип]`;
const magicLt = `дія [назва].чародія_менше(значення [тип]) [тип]`;
const magicGe = `дія [назва].чародія_не_менше(значення [тип]) [тип]`;
const magicLe = `дія [назва].чародія_не_більше(значення [тип]) [тип]`;
const magicContains = `дія [назва].чародія_містить(значення [тип]) [тип]`;
const magicGet = `дія [назва].чародія_отримати(ключ [тип]) [тип]`;
const magicSet = `дія [назва].чародія_покласти(ключ [тип], значення [тип]) [тип]`;
const magicCall = `дія [назва].чародія_викликати([параметри]) [тип]`;
const magicIterator = `дія [назва].чародія_перебір() перебір<[тип]>`;
const magicNumber = `дія [назва].чародія_число() число`;
const magicText = `дія [назва].чародія_текст() текст`;
const magicList = `дія [назва].чародія_список() список<[тип]>`;
const magicDict = `дія [назва].чародія_словник() словник<[тип]>`;
const magicBytes = `дія [назва].чародія_байти() байти`;

const simple2 = `
структура МіфічнаІстота
  назва текст
кінець

дія МіфічнаІстота.чародія_викликати()
  друк("%(я.назва) вже на шляху до вас...")
кінець

лісовик = МіфічнаІстота("Лісовик")

лісовик()
`.trim();

useHead({
  title: "Чародія | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/коментар" next="/документація/бог">
    <h1 class="docs-content-title">Чародія</h1>
    <blockquote class="success">
      Ця частина <span class="diia-word">Мавки </span>
      <span style="font-weight: 500" class="hljs-keyword">є </span>
      стабільною.
    </blockquote>
    <p>
      <span class="diia-word">Мавка</span> надає можливість перезаписувати
      логіку деяких вказівок для обʼєктів через
      <span style="font-weight: 500" class="hljs-keyword">дії</span>. Ці
      <span style="font-weight: 500" class="hljs-keyword">дії</span>
      називаються чародіями.
    </p>
    <hr />
    <h3>Список чародій</h3>
    <p><code>чародія_додати</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що перезаписує
      логіку вказівки <code>+</code>.</p>
    <UiCodeBlock :files="magicAdd" />

    <p><code>чародія_відняти</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>-</code>.</p>
    <UiCodeBlock :files="magicSub" />

    <p><code>чародія_помножити</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>*</code>.</p>
    <UiCodeBlock :files="magicMul" />

    <p><code>чародія_поділити</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>/</code>.</p>
    <UiCodeBlock :files="magicDiv" />

    <p><code>чародія_остача</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>%</code>.</p>
    <UiCodeBlock :files="magicMod" />

    <p><code>чародія_частка</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>//</code>.</p>
    <UiCodeBlock :files="magicDivDiv" />

    <p><code>чародія_степінь</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>**</code>.</p>
    <UiCodeBlock :files="magicPow" />

    <p><code>чародія_вабо</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що перезаписує
      логіку вказівки <code>^</code>.</p>
    <UiCodeBlock :files="magicXor" />

    <p><code>чародія_дабо</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що перезаписує
      логіку вказівки <code>|</code>.</p>
    <UiCodeBlock :files="magicBor" />

    <p><code>чародія_ді</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що перезаписує
      логіку вказівки <code>&</code>.</p>
    <UiCodeBlock :files="magicBand" />

    <p><code>чародія_вліво</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що перезаписує
      логіку вказівки <code>&lt;&lt;</code>.</p>
    <UiCodeBlock :files="magicShl" />

    <p><code>чародія_вправо</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що перезаписує
      логіку вказівки <code>>></code>.</p>
    <UiCodeBlock :files="magicShr" />

    <p><code>чародія_дне</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що перезаписує
      логіку вказівки <code>~</code>.</p>
    <UiCodeBlock :files="magicBnot" />

    <p><code>чародія_більше</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>></code>.</p>
    <UiCodeBlock :files="magicGt" />

    <p><code>чародія_менше</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>&lt;</code>.</p>
    <UiCodeBlock :files="magicLt" />

    <p><code>чародія_не_менше</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>>=</code>.</p>
    <UiCodeBlock :files="magicGe" />

    <p><code>чародія_не_більше</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>&lt;=</code>.</p>
    <UiCodeBlock :files="magicLe" />

    <p><code>чародія_додатнє</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує логіку префікс-вказівки <code>+</code>.</p>
    <UiCodeBlock :files="magicPositive" />

    <p><code>чародія_відʼємне</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує логіку префікс-вказівки <code>-</code>.</p>
    <UiCodeBlock :files="magicNegative" />

    <p><code>чародія_містить</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>містить</code>.</p>
    <UiCodeBlock :files="magicContains" />

    <p><code>чародія_отримати</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>[]</code> для отримання.</p>
    <UiCodeBlock :files="magicGet" />

    <p><code>чародія_покласти</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>[]</code> для зміни.</p>
    <UiCodeBlock :files="magicSet" />

    <p><code>чародія_викликати</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      перезаписує
      логіку вказівки <code>()</code>.</p>
    <UiCodeBlock :files="magicCall" />

    <p><code>чародія_перебір</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      виконується при спробі перебрати обʼєкт.
      <span style="font-weight: 500" class="hljs-keyword">Повертає</span> обʼєкт типу <code>перебір</code>.</p>
    <UiCodeBlock :files="magicIterator" />

    <p><code>чародія_число</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що виконується
      при спробі перетворити обʼєкт на число.
      <span style="font-weight: 500" class="hljs-keyword">Повертає</span> число.</p>
    <UiCodeBlock :files="magicNumber" />

    <p><code>чародія_текст</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що виконується
      при спробі перетворити обʼєкт на текст.
      <span style="font-weight: 500" class="hljs-keyword">Повертає</span> текст.</p>
    <UiCodeBlock :files="magicText" />

    <p><code>чародія_список</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що виконується
      при спробі перетворити обʼєкт на список.
      <span style="font-weight: 500" class="hljs-keyword">Повертає</span> список.</p>
    <UiCodeBlock :files="magicList" />

    <p><code>чародія_словник</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що
      виконується
      при спробі перетворити обʼєкт на словник.
      <span style="font-weight: 500" class="hljs-keyword">Повертає</span> словник.</p>
    <UiCodeBlock :files="magicDict" />

    <p><code>чародія_байти</code> <span style="font-weight: 500" class="hljs-keyword">це</span> чародія, що виконується
      при спробі перетворити обʼєкт на байти.
      <span style="font-weight: 500" class="hljs-keyword">Повертає</span> байти.</p>
    <UiCodeBlock :files="magicBytes" />

    <hr />
    <h3>Приклад</h3>
    <UiCodeBlock :files="simple2" />
  </UiDocsWrapper>
</template>
