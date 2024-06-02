<script setup>
useHead({
  title: "БДКП | Учасники | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper
    prev="/організація/комітет/вебу"
    next="/організація/приєднатись"
  >
    <h1 class="docs-content-title">БДКП</h1>
    <ul>
      <li>
        <NuxtLink :to="encodeURI('/організація/учасник/0')" class="link">
          <span class="diia-word">Учасникʼ0</span>: Богданович Давид Когут
          Прихожденко
        </NuxtLink>
      </li>
    </ul>
  </UiDocsWrapper>
</template>
