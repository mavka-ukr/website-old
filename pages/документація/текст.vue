<script setup>
const text = `
"Привіт від Лесі!"
`.trim();

const text2 = `
"Стій, серце, стій! не бийся так шалено."
`.trim();

const text3 = `
"""Чи довго ще, о господи, чи довго
ми будемо блукати і шукати
рідного краю на своїй землі?
Який ми гріх вчинили проти духа,
що він зламав свій заповіт великий,
той, взятий з бою волі заповіт?
Так доверши ж до краю тую зраду,
розбий, розсій нас геть по цілім світі,
тоді, либонь, журба по ріднім краю
навчить нас, де і як його шукать."""
`.trim();

const textStructure = `
структура текст
  довжина число
кінець
`.trim();

const textStructureSplitMethod = `дія текст.розбити(дільник текст) список<текст>`;
const textStructureReplaceMethod = `дія текст.замінити(старе текст, нове текст) текст`;
const textStructureStartsWithMethod = `дія текст.починається(значення текст) логічне`;
const textStructureEndsWithMethod = `дія текст.закінчується(значення текст) логічне`;
const textStructureTrimMethod = `дія текст.обтяти() текст`;
const textStructureSliceMethod = `дія текст.зріз(від число, до число або пусто = пусто) текст`;
const textStructureMagicAddMethod = `дія текст.чародія_додати(значення текст) текст`;
const textStructureMagicIteratorMethod = `дія текст.чародія_перебір() перебір<текст>`;
const textStructureMagicIteratorWithKeyMethod = `дія текст.чародія_перебір_з_ключем() перебір_з_ключем<число, текст>`;
const textStructureMagicContainsMethod = `дія текст.чародія_містить(значення текст) логічне`;
const textStructureMagicGetMethod = `дія текст.чародія_отримати(позиція число) текст`;
const textStructureMagicNumberMethod = `дія текст.чародія_число() число`;

useHead({
  title: "Текст | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/число" next="/документація/логічне">
    <h1 class="docs-content-title">Текст</h1>
    <p>
      Текст
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, що зберігає послідовність символів.
    </p>
    <p>
      Текст описано
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>текст</code>.
    </p>
    <hr />
    <h3>Створення тексту</h3>
    <p>
      Текст записується між символами подвійних лапок <span style="font-weight: 500" class="hljs-keyword">або</span>
      трьома символами
      подвійних лапок.
    </p>
    <UiCodeBlock :files="text2" />
    <br />
    <UiCodeBlock :files="text3" />
    <hr />
    <h3>Структура тексту</h3>
    <UiCodeBlock :files="textStructure" />
    <hr>
    <h3>Дії тексту</h3>
    <p><code>розбити</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для розбиття тексту за
      певним роздільником.</p>
    <UiCodeBlock :files="textStructureSplitMethod" />

    <p><code>замінити</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для заміни частини тексту
      на інший текст.</p>
    <UiCodeBlock :files="textStructureReplaceMethod" />

    <p><code>починається</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перевірки чи текст
      починається певним текстом.</p>
    <UiCodeBlock :files="textStructureStartsWithMethod" />

    <p><code>закінчується</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перевірки чи
      текст закінчується певним текстом.</p>
    <UiCodeBlock :files="textStructureEndsWithMethod" />

    <p><code>обтяти</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для видалення з
      початку <span style="font-weight: 500" class="hljs-keyword">і кінця</span> тексту певних символів.</p>
    <UiCodeBlock :files="textStructureTrimMethod" />

    <p><code>чародія_додати</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для обʼєднання
      тексту з іншим текстом.</p>
    <UiCodeBlock :files="textStructureMagicAddMethod" />

    <p><code>чародія_містить</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перевірки чи
      текст <span style="font-weight: 500" class="hljs-keyword">містить</span> інший текст.</p>
    <UiCodeBlock :files="textStructureMagicContainsMethod" />

    <p><code>чародія_отримати</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для отримання
      символа з тексту за певною позицією.</p>
    <UiCodeBlock :files="textStructureMagicGetMethod" />

    <p><code>чародія_перебір</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для отримання
      перебору символів тексту.</p>
    <UiCodeBlock :files="textStructureMagicIteratorMethod" />

    <p><code>чародія_число</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перетворення
      тексту на число.</p>
    <UiCodeBlock :files="textStructureMagicNumberMethod" />
  </UiDocsWrapper>
</template>
