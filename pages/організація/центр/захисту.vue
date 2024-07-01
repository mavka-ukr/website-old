<script setup>
useHead({
  title: "ЦентрʼЗахисту | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper
    prev="/організація/центр/добробуту"
    next="/організація/центр/мама"
  >
    <h1 class="docs-content-title">ЦентрʼЗахисту</h1>

    <p>
      <span class="diia-word">ЦентрʼЗахисту</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span>
      <span class="diia-word"> Центр ОМ</span>.
    </p>
    <p>
      <span class="diia-word">Секретар</span> цього
      <span class="diia-word">Центру</span> на даний момент
      <span style="font-weight: 500" class="hljs-keyword"> це </span>
      Богданович Давид Когут Прихожденко (<span class="diia-word"
        >Учасникʼ0</span
      >).
    </p>
    <p>
      <span class="diia-word">Учасники</span> цього
      <span class="diia-word">Центру</span>:
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
      <span class="diia-word">Центру</span>:
    </p>
    <ul>
      <li><i>Інформація відсутня</i></li>
    </ul>
  </UiDocsWrapper>
</template>
