<script setup>
const changelog = ref("");
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = true;

  fetch("https://diia.dev/mavka/jejalyk/-/raw/main/CHANGELOG.md")
    .then((r) => r.text())
    .then((text) => {
      changelog.value = text;
    })
    .finally(() => {
      isLoading.value = false;
    });
});

useHead({
  title: "Змінопис | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    title="Змінопис"
    :loading="isLoading"
    prev="/документація/подяка"
    next="/документація/післясцена"
  >
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
          language="markdown"
          :autodetect="false"
          :code="changelog"
        />
      </ClientOnly>
    </div>
    <hr />
    <blockquote>
      Цей змінопис не є повним. Мавка почалась задовго до початку його ведення.
    </blockquote>
    <hr />
    <p>
      <a
        href="https://diia.dev/mavka/jejalyk/-/blob/main/CHANGELOG.md"
        target="_blank"
        class="link external"
      >
        https://diia.dev/mavka/jejalyk/-/blob/main/CHANGELOG.md
      </a>
    </p>
  </UiDocsWrapper>
</template>
