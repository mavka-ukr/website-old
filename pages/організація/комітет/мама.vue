<script setup>
useHead({
  title: "МаМа | Комітет | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper
    prev="/організація/комітет/захисту"
    next="/організація/комітет/цілі"
  >
    <h1 class="docs-content-title">КомітетʼМаМа</h1>

    <p>
      <span class="diia-word">КомітетʼМаМа</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span>
      <span class="diia-word"> Комітет ОМ</span>, що відповідає за все, що
      повʼязано з мовою програмування <span class="diia-word">Мавка</span>.
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
      <li>
        <span class="diia-word">Проектʼ1</span>:
        <a target="_blank" class="link external" href="https://мавка.укр"
          >мавка.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ20</span>: Мова програмування
        <span class="diia-word">Мавка</span>
      </li>
      <li>
        <span class="diia-word">Проектʼ21</span>:
        <span class="diia-word">Машина Мавки</span>
      </li>
    </ul>
  </UiDocsWrapper>
</template>
