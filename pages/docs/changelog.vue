<script setup>
const changelog = ref('');
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = true;

  fetch('https://raw.githubusercontent.com/mavka-ukr/mavka/main/CHANGELOG.md')
      .then((r) => r.text())
      .then((text) => {
        changelog.value = text;
      })
      .finally(() => {
        isLoading.value = false;
      });
});
</script>

<template>
  <DocsWrapper title="Список змін" :loading="isLoading" prev="/docs/v1">
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="markdown"
            :autodetect="false"
            :code="changelog"
        />
      </ClientOnly>
    </div>
    <hr>
    <p>
      <a href="https://github.com/mavka-ukr/mavka/blob/main/CHANGELOG.md" target="_blank" class="link external">
        https://github.com/mavka-ukr/mavka/blob/main/CHANGELOG.md
      </a>
    </p>
  </DocsWrapper>
</template>
