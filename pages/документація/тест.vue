<script setup>
useHead({
  title: "Тест | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/коментар" next="/документація/чародія">
    <h1 class="docs-content-title">Тест</h1>
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
