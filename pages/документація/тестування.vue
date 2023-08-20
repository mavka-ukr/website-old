<script setup>
useHead({
  title: "Тестування | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/розбір" next="/документація/список-змін">
    <h1 class="docs-content-title">Тестування</h1>

    <p>
      Наразі тестування в <span class="diia-word">Мавці</span> відбувається за
      допомогою сторонніх бібліотек.
    </p>

    <hr />

    <p>Доступні бібліотеки:</p>

    <ul>
      <li>
        <a
          href="https://github.com/dkostmii/dolya"
          target="_blank"
          class="link external"
        >
          Доля (підтримку припинено)
        </a>
      </li>
    </ul>
  </UiDocsWrapper>
</template>
