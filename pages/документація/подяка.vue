<script setup>
useHead({
  title: "Подяка | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    title="Подяка"
    prev="/документація/автор"
    next="/документація/змінопис"
  >
    <p>Тим, хто не боявся.</p>
    <p>Тим, хто не піддався.</p>
    <p>Тим, хто боронив.</p>
    <p>Тим, хто поборов.</p>
    <hr />
    <p>Місце тим, хто повірив.</p>
    <p>Окреме місце першим з тих, хто повірив.</p>
    <hr />
    <p>
      <a
        href="https://github.com/mavka-ukr/mavka/blob/main/CONTRIBUTORS.md"
        target="_blank"
        class="link external"
      >
        https://github.com/mavka-ukr/mavka/blob/main/CONTRIBUTORS.md
      </a>
    </p>
  </UiDocsWrapper>
</template>
