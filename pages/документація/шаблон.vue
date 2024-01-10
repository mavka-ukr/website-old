<script setup>
const structureExample = `
структура Ракета<Д>
  двигун Д
кінець
`.trim();

const structureExampleObject = `дивна_ракета = Ракета<текст>("Реактивний Двигун")`;
const structureExampleObjectTest = `друк(дивна_ракета.двигун є текст)`;

const diiaExample = `
дія д<Т>(а Т): Т
  вернути а
кінець
`.trim();

const diiaExampleObject = `дт = д<текст>("привіт")`;
const diiaExampleObjectTest = `друк(дт є текст)`;

useHead({
  title: "Шаблон | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/спроба" next="/документація/коментар">
    <h1 class="docs-content-title">Шаблон</h1>
    <p>
      Шаблон <span style="font-weight: 500" class="hljs-keyword">це</span> спеціальна конструкція в <span
      class="diia-word">Мавці</span>, що використовується під час визначення
      <span style="font-weight: 500" class="hljs-keyword">дії</span> <span style="font-weight: 500"
                                                                           class="hljs-keyword">або</span> <span
      style="font-weight: 500" class="hljs-keyword">структури</span>.
    </p>
    <p>Шаблон дозволяє визначити деякі типи властивостей обʼєкта після визначення його <span
      style="font-weight: 500" class="hljs-keyword">структури</span> <span
      style="font-weight: 500" class="hljs-keyword">та</span> перед його
      створенням або деякі типи параметрів
      <span
        style="font-weight: 500" class="hljs-keyword">дії</span>
      після її визначення <span
        style="font-weight: 500" class="hljs-keyword">та</span> перед її виконанням.</p>
    <hr>
    <h3>Визначення шаблон-структури</h3>
    <p>В коді нижче визначаємо структуру <code>Ракета</code> <span
      style="font-weight: 500" class="hljs-keyword">та</span> вказуємо список типів, які можна визначити перед
      створенням
      нового обʼєкта.</p>
    <UiCodeBlock :files="structureExample" />
    <p>Під час створення обʼєкта вказуємо конкретні типи шаблону.</p>
    <UiCodeBlock :files="structureExampleObject" />
    <p>Після цього ми можемо перевірити тип властивості <code>двигун</code>.</p>
    <UiCodeBlock :files="structureExampleObjectTest" />
    <p>Цей підхід довзоляє створювати <code>Ракету</code> з будь-яким конкретним типом властивості <code>двигун</code>.
    </p>
    <hr>
    <h3>Визначення шаблон-дії</h3>
    <p>В коді нижче визначаємо якусь <span
      style="font-weight: 500" class="hljs-keyword">дію</span> <span
      style="font-weight: 500" class="hljs-keyword">та</span> вказуємо список типів, які можна визначити перед
      виконанням
      цієї <span
        style="font-weight: 500" class="hljs-keyword">дії</span>.</p>
    <UiCodeBlock :files="diiaExample" />
    <p>Під час виконання <span
      style="font-weight: 500" class="hljs-keyword">дії</span> вказуємо конкретні типи шаблону.</p>
    <UiCodeBlock :files="diiaExampleObject" />
    <p>Після цього ми можемо перевірити тип <span
      style="font-weight: 500" class="hljs-keyword">субʼєкта</span> <code>дт</code>.</p>
    <UiCodeBlock :files="diiaExampleObjectTest" />
    <p>Цей підхід довзоляє виконувати <code>д</code> з будь-яким конкретним типом, <span
      style="font-weight: 500" class="hljs-keyword">та</span> завжди бути певними, що тип
      поверненого значення буде саме таким, який ми вказали.</p>
  </UiDocsWrapper>
</template>
