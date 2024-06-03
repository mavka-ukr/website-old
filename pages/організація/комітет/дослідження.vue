<script setup>
useHead({
  title: "Дослідження | Комітет | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper
    prev="/організація/структура/комітет"
    next="/організація/комітет/навчання"
  >
    <h1 class="docs-content-title">КомітетʼДослідження</h1>

    <p>
      <span class="diia-word">КомітетʼДослідження</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span>
      <span class="diia-word"> Комітет ОМ</span>, що відповідає за дослідження
      всесвіту
      <span style="font-weight: 500" class="hljs-keyword"> та</span> створення
      нових технологій.
    </p>
    <p>
      <span class="diia-word">Кернел</span> цього
      <span class="diia-word">Комітету</span> на даний момент
      <span style="font-weight: 500" class="hljs-keyword"> це </span>
      <span class="diia-word">Учасникʼ0</span>
      (відомий <span style="font-weight: 500" class="hljs-keyword"> як </span>
      Богданович Давид Когут Прихожденко).
    </p>
    <p>
      <span class="diia-word">Учасники</span> цього
      <span class="diia-word">Комітету</span>:
    </p>
    <ul>
      <li>
        <NuxtLink :to="encodeURI('/організація/учасник/0')" class="link">
          <span class="diia-word">Учасникʼ0</span>: Богданович Давид Когут
          Прихожденко
        </NuxtLink>
      </li>
    </ul>
    <p>
      <span class="diia-word">Проекти</span> цього
      <span class="diia-word">Комітету</span>:
    </p>
    <ul>
      <li><i>Інформація відсутня</i></li>
    </ul>
  </UiDocsWrapper>
</template>
