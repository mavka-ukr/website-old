<script setup>
const contributors = ref("");
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = true;

  fetch(
    "https://raw.githubusercontent.com/mavka-ukr/mavka/main/CONTRIBUTORS.md",
  )
    .then((r) => r.text())
    .then((text) => {
      contributors.value = text;
    })
    .finally(() => {
      isLoading.value = false;
    });
});

useHead({
  title: "Контрибутори | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    title="Контрибутори"
    :loading="isLoading"
    prev="/документація/список-змін"
  >
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
          language="markdown"
          :autodetect="false"
          :code="contributors"
        />
      </ClientOnly>
    </div>
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
