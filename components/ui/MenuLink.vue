<script setup>
defineProps({
  tag: {
    type: String,
    default: "a",
  },
});
</script>

<template>
  <UiMenuItem :tag="tag">
    <slot />
  </UiMenuItem>
</template>
