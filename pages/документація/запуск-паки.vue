<script setup>
const router = useRouter();

onMounted(() => {
  router.replace(encodeURI("/документація/старт-паки"));
});
useHead({
  title: "Запуск-паки | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
</template>
