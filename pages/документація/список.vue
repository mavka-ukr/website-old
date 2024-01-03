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
const listStructurePositionMethod = `дія список.позиція(д Дія) Т`;
const listStructureMapMethod = `дія список.перетворити<НТ>(д Дія) список<НТ>`;
const listStructureJoinMethod = `дія список.зʼєднати(роздільник текст = "") текст`;
const listStructureReverseMethod = `дія список.обернути() список<Т>`;
const listStructureSliceMethod = `дія список.зріз(від число, до число або пусто = пусто) список<Т>`;
const listStructureMagicContainsMethod = `дія список.чародія_містить(значення Т) Т`;
const listStructureMagicGetMethod = `дія список.чародія_отримати(позиція число) Т`;
const listStructureMagicSetMethod = `дія список.чародія_покласти(позиція число, значення Т) Т`;
const listStructureMagicIteratorMethod = `дія список.чародія_перебір() перебір<Т>`;
const listStructureMagicLogicalMethod = `дія список.чародія_логічне() логічне`;
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

    <p>
      Список
      <span style="font-weight: 500" class="hljs-keyword">є</span> елементарним
      обʼєктом <span class="diia-word">Мавки</span>, що зберігає обʼєкти у
      певній послідовності.
    </p>
    <p>
      Список описано спеціальною
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
    <p><code>сортувати</code> це спец дія для сортування списку чисел. Змінює позиції елементів самого списку, а не
      створює новий. Вертає той
      самий
      список.</p>
    <UiCodeBlock :files="listStructureSortSpecMethod" />
    <p><code>сортувати</code> це дія для сортування списку. Змінює позиції елементів самого списку, а не
      створює новий. Вертає той
      самий
      список.</p>
    <UiCodeBlock :files="listStructureSortMethod" />
    <p><code>додати</code> це дія для додавання елемента в кінець списку. Вертає нову довжину списку.</p>
    <UiCodeBlock :files="listStructurePushMethod" />
    <p><code>забрати</code> це дія отримування останнього елемента зі списку. Цей елемент також видаляється зі списку.
    </p>
    <UiCodeBlock :files="listStructurePopMethod" />
    <p><code>фільтр</code> це дія для створення нового відфільтрованого списку.</p>
    <UiCodeBlock :files="listStructureFilterMethod" />
    <p><code>знайти</code> це дія для пошуку елементу в списку.</p>
    <UiCodeBlock :files="listStructureFindMethod" />
    <p><code>позиція</code> це дія для отримання позиції елемента в списку.</p>
    <UiCodeBlock :files="listStructurePositionMethod" />
    <p><code>перетворити</code> це дія для перетворення списку на інший список.</p>
    <UiCodeBlock :files="listStructureMapMethod" />
    <p><code>зʼєднати</code> це дія для перетворення елементів списку на текст та встановлення між ними певного
      роздільника.</p>
    <UiCodeBlock :files="listStructureJoinMethod" />
    <p><code>обернути</code> це дія для обернення позицій елементів списку. Змінює позиції елементів самого списку, а не
      створює новий. Вертає той
      самий
      список.</p>
    <UiCodeBlock :files="listStructureReverseMethod" />
    <p><code>зріз</code> це дія для отримання елементів списку від та до конкретної позиції. Вертає новий список.</p>
    <UiCodeBlock :files="listStructureSliceMethod" />
    <p><code>чародія_містить</code> це дія для перевірки чи список містить обʼєкт.</p>
    <UiCodeBlock :files="listStructureMagicContainsMethod" />
    <p><code>чародія_отримати</code> це дія для отримання елемента зі списку за певною позицією.</p>
    <UiCodeBlock :files="listStructureMagicGetMethod" />
    <p><code>чародія_покласти</code> це дія для зміни елемента в списку за певною позицією.</p>
    <UiCodeBlock :files="listStructureMagicSetMethod" />
    <p><code>чародія_перебір</code> це дія для отримання перебору списку.</p>
    <UiCodeBlock :files="listStructureMagicIteratorMethod" />
    <p><code>чародія_логічне</code> це дія для перетворення списку на логічне.</p>
    <UiCodeBlock :files="listStructureMagicLogicalMethod" />
    <p><code>чародія_текст</code> це дія для перетворення списку на текст.</p>
    <UiCodeBlock :files="listStructureMagicTextMethod" />
  </UiDocsWrapper>
</template>
