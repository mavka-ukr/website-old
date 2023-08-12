<script setup>
defineProps({
  tag: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <component class="ui-menu-item" :disabled="disabled" :class="{ disabled }" :is="tag">
    <slot />
  </component>
</template>

<style lang="scss">
</style>
