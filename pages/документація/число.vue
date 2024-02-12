<script setup>
const decNum = `
1
`.trim();

const decNum2 = `
-2
`.trim();

const decNum3 = `
3.14
`.trim();

const hexNum = `
0ш11А53А
`.trim();

const hexNum2 = `
-0шА1А9А
`.trim();

const binNum = `
0д0
`.trim();

const binNum2 = `
-0д1000101
`.trim();

const ex = `
2 + 2
`.trim();

const ex2 = `
3 - 1
`.trim();

const ex3 = `
2 + 2 * 2
`.trim();

const ex4 = `
0 / 100
`.trim();

const ex5 = `
0шА1А9А << 0ш11А53А
`.trim();

const ex6 = `
2 ** 32
`.trim();

const ex7 = `
100 % 2
`.trim();

const numberStructure = `
структура число
кінець
`.trim();

const numberStructureMagicAddMethod = `дія число.чародія_додати(значення число) число`;
const numberStructureMagicSubMethod = `дія число.чародія_відняти(значення число) число`;
const numberStructureMagicMulMethod = `дія число.чародія_помножити(значення число) число`;
const numberStructureMagicDivMethod = `дія число.чародія_поділити(значення число) число`;
const numberStructureMagicModMethod = `дія число.чародія_остача(значення число) число`;
const numberStructureMagicDivDivMethod = `дія число.чародія_частка(значення число) число`;
const numberStructureMagicPowMethod = `дія число.чародія_степінь(значення число) число`;
const numberStructureMagicShLeftMethod = `дія число.чародія_вліво(значення число) число`;
const numberStructureMagicShRightMethod = `дія число.чародія_вправо(значення число) число`;
const numberStructureMagicXorMethod = `дія число.чародія_вабо(значення число) число`;
const numberStructureMagicBorMethod = `дія число.чародія_дабо(значення число) число`;
const numberStructureMagicBandMethod = `дія число.чародія_ді(значення число) число`;
const numberStructureMagicGreaterMethod = `дія число.чародія_більше(значення число) логічне`;
const numberStructureMagicLesserMethod = `дія число.чародія_менше(значення число) логічне`;
const numberStructureMagicEqLesserMethod = `дія число.чародія_не_більше(значення число) логічне`;
const numberStructureMagicEqGreaterMethod = `дія число.чародія_не_менше(значення число) логічне`;
const numberStructureMagicBnotGreaterMethod = `дія число.чародія_дні() число`;
const numberStructureMagicPositiveGreaterMethod = `дія число.чародія_додатнє() число`;
const numberStructureMagicNegativeGreaterMethod = `дія число.чародія_відʼємне() число`;
const numberStructureMagicTextGreaterMethod = `дія число.чародія_текст() текст`;

useHead({
  title: "Число | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/структура" next="/документація/текст">
    <h1 class="docs-content-title">Число</h1>
    <p>
      Число
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, що містить інформацію про
      дійсне число.
    </p>
    <p>
      Розмір числа
      <a
        target="_blank"
        class="link external"
        href="https://uk.wikipedia.org/wiki/64_%D0%B1%D1%96%D1%82%D0%B8"
        >64 біти.</a
      >
    </p>
    <p>
      Число описано
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>число</code>.
    </p>
    <hr />
    <h3>Створення числа</h3>
    <p>
      Число записується символами двійкової, десяткової
      <span style="font-weight: 500" class="hljs-keyword">або</span>
      шіснадцякової систем числення.
    </p>
    <h4>Десяткова</h4>
    <UiCodeBlock :files="decNum" />
    <br />
    <UiCodeBlock :files="decNum2" />
    <br />
    <UiCodeBlock :files="decNum3" />
    <h4>Шіснадцяткова</h4>
    <UiCodeBlock :files="hexNum" />
    <br />
    <UiCodeBlock :files="hexNum2" />
    <h4>Двійкова</h4>
    <UiCodeBlock :files="binNum" />
    <br />
    <UiCodeBlock :files="binNum2" />
    <hr />
    <h3>Приклади</h3>
    <UiCodeBlock :files="ex" />
    <br />
    <UiCodeBlock :files="ex2" />
    <br />
    <UiCodeBlock :files="ex3" />
    <br />
    <UiCodeBlock :files="ex4" />
    <br />
    <UiCodeBlock :files="ex5" />
    <br />
    <UiCodeBlock :files="ex6" />
    <br />
    <UiCodeBlock :files="ex7" />
    <p>
      <span style="font-weight: 500" class="hljs-keyword">та</span> безліч
      інших...
    </p>
    <blockquote>
      Докладніше про
      <NuxtLink
        class="link external"
        :href="encodeURI(`/документація/чародія`)"
      >
        чародію
      </NuxtLink>
      читайте у
      <NuxtLink
        class="link external"
        :href="encodeURI(`/документація/чародія`)"
      >
        відповідному розділі
      </NuxtLink>
      .
    </blockquote>
    <hr />
    <h3>Структура числа</h3>
    <UiCodeBlock :files="numberStructure" />
    <hr />
    <h3>Дії числа</h3>
    <p>
      <code>чародія_додати</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції додавання.
    </p>
    <UiCodeBlock :files="numberStructureMagicAddMethod" />

    <p>
      <code>чародія_відняти</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції віднімання.
    </p>
    <UiCodeBlock :files="numberStructureMagicSubMethod" />

    <p>
      <code>чародія_помножити</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції множення.
    </p>
    <UiCodeBlock :files="numberStructureMagicMulMethod" />

    <p>
      <code>чародія_поділити</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції ділення.
    </p>
    <UiCodeBlock :files="numberStructureMagicDivMethod" />

    <p>
      <code>чародія_остача</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції отримання остачі від ділення.
    </p>
    <UiCodeBlock :files="numberStructureMagicModMethod" />

    <p>
      <code>чародія_частка</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції отримання цілої частини від ділення.
    </p>
    <UiCodeBlock :files="numberStructureMagicDivDivMethod" />

    <p>
      <code>чародія_степінь</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції піднесення до степеня.
    </p>
    <UiCodeBlock :files="numberStructureMagicPowMethod" />

    <p>
      <code>чародія_вліво</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції двійкового зсуву вліво.
    </p>
    <UiCodeBlock :files="numberStructureMagicShLeftMethod" />

    <p>
      <code>чародія_вправо</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції двійкового зсуву вправо.
    </p>
    <UiCodeBlock :files="numberStructureMagicShRightMethod" />

    <p>
      <code>чародія_вабо</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції двійкового виключного або.
    </p>
    <UiCodeBlock :files="numberStructureMagicXorMethod" />

    <p>
      <code>чародія_дабо</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції двійкового або.
    </p>
    <UiCodeBlock :files="numberStructureMagicBorMethod" />

    <p>
      <code>чародія_ді</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції двійкового і.
    </p>
    <UiCodeBlock :files="numberStructureMagicBandMethod" />

    <p>
      <code>чародія_більше</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції перевірки чи число більше іншого числа.
    </p>
    <UiCodeBlock :files="numberStructureMagicGreaterMethod" />

    <p>
      <code>чародія_менше</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції перевірки чи число менше іншого числа.
    </p>
    <UiCodeBlock :files="numberStructureMagicLesserMethod" />

    <p>
      <code>чародія_не_більше</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції перевірки чи число не більше (менше або рівно) іншого
      числа.
    </p>
    <UiCodeBlock :files="numberStructureMagicEqLesserMethod" />

    <p>
      <code>чародія_не_менше</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції перевірки чи число не менше (більше або рівно) іншого
      числа.
    </p>
    <UiCodeBlock :files="numberStructureMagicEqGreaterMethod" />

    <p>
      <code>чародія_дні</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      виконання операції двійкового ні.
    </p>
    <UiCodeBlock :files="numberStructureMagicBnotGreaterMethod" />

    <p>
      <code>чародія_додатнє</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      перетворення число на додатнє.
    </p>
    <UiCodeBlock :files="numberStructureMagicPositiveGreaterMethod" />

    <p>
      <code>чародія_відʼємне</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      перетворення числа на відʼємне.
    </p>
    <UiCodeBlock :files="numberStructureMagicNegativeGreaterMethod" />

    <p>
      <code>чародія_текст</code>
      <span style="font-weight: 500" class="hljs-keyword">це дія</span> для
      перетворення числа на текст.
    </p>
    <UiCodeBlock :files="numberStructureMagicTextGreaterMethod" />
  </UiDocsWrapper>
</template>
