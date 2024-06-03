<script setup>
useHead({
  title: "Web | Комітет | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper
    prev="/організація/комітет/цілі"
    next="/організація/учасники/БДКП"
  >
    <h1 class="docs-content-title">КомітетʼWeb</h1>

    <p>
      <span class="diia-word">КомітетʼWeb</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span>
      <span class="diia-word"> Комітет ОМ</span>, що відповідає за web-сервіси
      <span style="font-weight: 500" class="hljs-keyword"> та </span>
      web-інфраструктуру <span class="diia-word">Мавки</span>.
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
        <a target="_blank" class="link external" href="https://мавка.укр">
          мавка.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ2</span>:
        <a target="_blank" class="link external" href="https://я.мавка.укр"
          >я.мавка.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ4</span>:
        <a target="_blank" class="link external" href="https://ціль.укр"
          >ціль.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ3</span>:
        <a target="_blank" class="link external" href="https://фрагмент.укр"
          >фрагмент.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ5</span>:
        <a target="_blank" class="link external" href="https://пак.укр"
          >пак.укр</a
        >
        (в розробці)
      </li>
      <li>
        <span class="diia-word">Проектʼ6</span>:
        <a target="_blank" class="link external" href="https://писанка.укр"
          >писанка.укр</a
        >
        (в розробці)
      </li>
      <li>
        <span class="diia-word">Проектʼ7</span>:
        <a target="_blank" class="link external" href="https://конкурс.укр"
          >конкурс.укр</a
        >
      </li>
    </ul>
  </UiDocsWrapper>
</template>
