<script setup lang="ts">
defineProps({
  error: Object,
});

const router = useRouter();

const handleError = () => router.back();
</script>

<template>
  <div class="ui-error-page">
    <h1>{{ error.statusCode }}</h1>
    <button @click="handleError">Назад</button>
  </div>
</template>

<style lang="scss">
.ui-error-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
