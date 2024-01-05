<script setup>
const list = `
[1, 2, 3, 4]
`.trim();

const list2 = `
[1, -2, 3.14, Людина(), так, [], ()]
`.trim();

const listStructure = `
структура список<Т>
  довжина число
кінець
`.trim();

const listStructureSortSpecMethod = `спец дія список.сортувати(с список<число>) список<число>`;
const listStructureSortMethod = `дія список.сортувати(д Дія) список<Т>`;
const listStructurePushMethod = `дія список.додати(значення Т) число`;
const listStructurePopMethod = `дія список.забрати() Т`;
const listStructureFilterMethod = `дія список.фільтр(д Дія) список<Т>`;
const listStructureFindMethod = `дія список.знайти(д Дія) Т`;
const listStructureFindPositionMethod = `дія список.знайти_позицію(д Дія) число`;
const listStructurePositionMethod = `дія список.позиція(значення Т) число`;
const listStructureMapMethod = `дія список.перетворити<НТ>(д Дія) список<НТ>`;
const listStructureJoinMethod = `дія список.зʼєднати(роздільник текст = "") текст`;
const listStructureReverseMethod = `дія список.обернути() список<Т>`;
const listStructureSliceMethod = `дія список.зріз(від число, до число або пусто = пусто) список<Т>`;
const listStructureMagicContainsMethod = `дія список.чародія_містить(значення Т) логічне`;
const listStructureMagicGetMethod = `дія список.чародія_отримати(позиція число) Т`;
const listStructureMagicSetMethod = `дія список.чародія_покласти(позиція число, значення Т) Т`;
const listStructureMagicIteratorMethod = `дія список.чародія_перебір() перебір<Т>`;
const listStructureMagicTextMethod = `дія список.чародія_текст() текст`;

useHead({
  title: "Список | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/логічне" next="/документація/словник">
    <h1 class="docs-content-title">Список</h1>
    <blockquote class="success">
      Ця частина <span class="diia-word">Мавки </span>
      <span style="font-weight: 500" class="hljs-keyword">є </span>
      стабільною.
    </blockquote>
    <p>
      Список
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, що зберігає обʼєкти у
      певній послідовності.
    </p>
    <p>
      Список описано
      <span style="font-weight: 500" class="hljs-keyword">структурою </span>
      <code>список</code>.
    </p>
    <hr />
    <h3>Створення списку</h3>
    <p>
      Список записується між квадратними дужками, де кожен елемент розділений
      комою.
    </p>
    <UiCodeBlock :files="list" />
    <br />
    <UiCodeBlock :files="list2" />
    <hr />
    <h3>Структура списку</h3>
    <UiCodeBlock :files="listStructure" />
    <hr>
    <h3>Дії списку</h3>
    <p><code>сортувати</code> <span style="font-weight: 500" class="hljs-keyword">це спец дія</span> для сортування
      списку чисел. Змінює позиції елементів самого списку, а не
      створює новий. Вертає той
      самий
      список.</p>
    <UiCodeBlock :files="listStructureSortSpecMethod" />

    <p><code>сортувати</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для сортування списку.
      Змінює позиції елементів самого списку, а не
      створює новий. Вертає той
      самий
      список.</p>
    <UiCodeBlock :files="listStructureSortMethod" />

    <p><code>додати</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для додавання елемента в
      <span style="font-weight: 500" class="hljs-keyword">кінець</span> списку. Вертає нову довжину списку.</p>
    <UiCodeBlock :files="listStructurePushMethod" />

    <p><code>забрати</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> отримування останнього
      елемента зі списку. Цей елемент також видаляється зі списку.
    </p>
    <UiCodeBlock :files="listStructurePopMethod" />

    <p><code>фільтр</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для створення нового
      відфільтрованого списку.</p>
    <UiCodeBlock :files="listStructureFilterMethod" />

    <p><code>знайти</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для пошуку елемента в
      списку.</p>
    <UiCodeBlock :files="listStructureFindMethod" />

    <p><code>позиція</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для пошуку позиції
      елемента в списку.</p>
    <UiCodeBlock :files="listStructureFindPositionMethod" />

    <p><code>позиція</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для отримання позиції
      елемента в списку.</p>
    <UiCodeBlock :files="listStructurePositionMethod" />

    <p><code>перетворити</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перетворення
      списку на інший список.</p>
    <UiCodeBlock :files="listStructureMapMethod" />

    <p><code>зʼєднати</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перетворення
      елементів списку на текст <span style="font-weight: 500" class="hljs-keyword">та</span> встановлення між ними
      певного
      роздільника.</p>
    <UiCodeBlock :files="listStructureJoinMethod" />

    <p><code>обернути</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для обернення позицій
      елементів списку. Змінює позиції елементів самого списку, а не
      створює новий. Вертає той
      самий
      список.</p>
    <UiCodeBlock :files="listStructureReverseMethod" />

    <p><code>зріз</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для отримання елементів
      списку від <span style="font-weight: 500" class="hljs-keyword">та</span> до конкретної позиції. Вертає новий
      список.</p>
    <UiCodeBlock :files="listStructureSliceMethod" />

    <p><code>чародія_містить</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перевірки чи
      список <span style="font-weight: 500" class="hljs-keyword">містить</span> обʼєкт.</p>
    <UiCodeBlock :files="listStructureMagicContainsMethod" />

    <p><code>чародія_отримати</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для отримання
      елемента зі списку за певною позицією.</p>
    <UiCodeBlock :files="listStructureMagicGetMethod" />

    <p><code>чародія_покласти</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для зміни
      елемента в списку за певною позицією.</p>
    <UiCodeBlock :files="listStructureMagicSetMethod" />

    <p><code>чародія_перебір</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для отримання
      <span style="font-weight: 500" class="hljs-keyword">перебору</span> списку.</p>
    <UiCodeBlock :files="listStructureMagicIteratorMethod" />

    <p><code>чародія_текст</code> <span style="font-weight: 500" class="hljs-keyword">це дія</span> для перетворення
      списку на текст.</p>
    <UiCodeBlock :files="listStructureMagicTextMethod" />
  </UiDocsWrapper>
</template>
