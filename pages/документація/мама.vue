<script setup>
import UiMaMaLogo from "~/components/UiMaMaLogo.vue";

const releases = ref([]);
const isLoadingReleases = ref(true);
const showAllReleases = ref(false);

const renderedReleases = computed(() => {
  if (showAllReleases.value) {
    return releases.value;
  }
  return releases.value.slice(0, 1);
});

onMounted(() => {
  isLoadingReleases.value = true;
  fetch("https://api.github.com/repos/mavka-ukr/mavka/releases/latest")
    .then((res) => res.json())
    .then((latestRelease) => {
      fetch("https://api.github.com/repos/mavka-ukr/mavka/releases")
        .then((res) => res.json())
        .then((data) => {
          releases.value = data;
          if (data[0] && data[0].id === latestRelease.id) {
            releases.value = data.slice(1);
          }
          releases.value = [latestRelease, ...releases.value];
          isLoadingReleases.value = false;
        });
    });
});

useHead({
  title: "МаМа | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/приклади"
    next="/документація/джеджалик"
    :loading="isLoadingReleases"
  >
  </UiDocsWrapper>
</template>
