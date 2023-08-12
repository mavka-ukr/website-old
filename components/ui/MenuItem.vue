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
.ui-menu-item {
  padding: 0.6rem;

  text-decoration: none !important;

  display: flex;
  align-items: center;

  transition: all 125ms ease-in-out;

  border: none;
  border-radius: 0.6rem;

  color: black;

  background: transparent;
  font-size: 1rem;

  .material-symbols-rounded {
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  img {
    height: 1rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background: #eee;
  }

  &:active {
    background: #ddd;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }

  &.red {
    color: red;
  }
}
</style>
