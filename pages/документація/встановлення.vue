<script setup>
useHead({
  title: "Встановлення | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація" next="/документація/розкладка">
    <h1 class="docs-content-title">Встановлення</h1>

    <p><span class="diia-word">Мавка</span> існує в трьох варіантах:</p>
    <ul>
      <li>
        <NuxtLink
          class="link external diia-word"
          :href="encodeURI('/документація/мама')"
        >
          МаМа
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="link external diia-word"
          :href="encodeURI('/документація/джеджалик')"
        >
          Джеджалик
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="link external diia-word"
          :href="encodeURI('/документація/mavka')"
        >
          Оригінальна Мавка
        </NuxtLink>
      </li>
    </ul>
  </UiDocsWrapper>
</template>
