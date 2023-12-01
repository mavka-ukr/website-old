<script setup>
useHead({
  title: "Тестування | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/порівняння"
    next="/документація/запуск-паки"
  >
    <h1 class="docs-content-title">Тестування</h1>
    <blockquote>Сторінка доповнюється.</blockquote>
    <hr />
    <p>Доступні способи тестування:</p>
    <ul>
      <li>
        <a
          href="https://github.com/dkostmii/dolya"
          target="_blank"
          class="link external"
        >
          Доля
        </a>
      </li>
    </ul>
  </UiDocsWrapper>
</template>
