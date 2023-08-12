<template>
  <div class="ui-menu">
    <slot />
  </div>
</template>

<style lang="scss">
.ui-menu {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding: 0.25rem;
}
</style>
