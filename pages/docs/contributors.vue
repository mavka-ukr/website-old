<script setup>
const contributors = ref('');
const isLoading = ref(true);

onMounted(() => {
    isLoading.value = true;

    fetch('https://raw.githubusercontent.com/mavka-ukr/mavka/main/CONTRIBUTORS.md')
        .then((r) => r.text())
        .then((text) => {
            contributors.value = text;
        })
        .finally(() => {
            isLoading.value = false;
        });
});
</script>

<template>
  <DocsWrapper title="Контрибутори" :loading="isLoading" prev="/docs/changelog">
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="markdown"
            :autodetect="false"
            :code="contributors"
        />
      </ClientOnly>
    </div>
    <hr>
    <p>
      <a href="https://github.com/mavka-ukr/mavka/blob/main/CONTRIBUTORS.md" target="_blank" class="link external">
        https://github.com/mavka-ukr/mavka/blob/main/CONTRIBUTORS.md
      </a>
    </p>
  </DocsWrapper>
</template>
