<script setup>
useHead({
  title: "Встановлення | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація" next="/документація/розкладка">
    <h1 class="docs-content-title">Встановлення</h1>

    <p><span class="diia-word">Мавка</span> існує в двох варіантах:</p>
    <ul>
      <li>
        <NuxtLink class="link external diia-word" :href="encodeURI('/документація/мама')">
          МаМа
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link external diia-word" :href="encodeURI('/документація/джеджалик')">
          Джеджалик
        </NuxtLink>
        <span style="font-weight: 500" class="hljs-keyword">або</span>
        <NuxtLink class="link external" :href="encodeURI('/документація/mavka')">
          npm i -g mavka (застаріло)
        </NuxtLink>
      </li>
    </ul>
    <p>
      Наразі для встановлення доступним <span style="font-weight: 500" class="hljs-keyword">є</span> лише
      <NuxtLink class="link external diia-word" :href="encodeURI('/документація/джеджалик')">Джеджалик</NuxtLink>.
    </p>
  </UiDocsWrapper>
</template>
