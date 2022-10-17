<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";

const sidebarShown = useState('sidebarShown', () => false);

addRouteMiddleware(() => {
  sidebarShown.value = false;
});
</script>

<template>
  <main class="container">
    <div id="docs" class="docs">
      <div class="docs-sidebar" :class="{ 'shown': sidebarShown }">
        <div class="docs-sidebar-head">
          <NuxtLink to="/" class="logo">
            <img src="@/assets/images/logo-light.png" alt="">
          </NuxtLink>
        </div>
        <div class="docs-sidebar-menu">
          <NuxtLink href="/docs" class="docs-sidebar-menu-item" active-class="active">
            Вступ
          </NuxtLink>
          <NuxtLink href="/docs/install" class="docs-sidebar-menu-item" active-class="active">
            Встановлення
          </NuxtLink>
          <NuxtLink href="/docs/vars" class="docs-sidebar-menu-item" active-class="active">
            Змінні
          </NuxtLink>
          <NuxtLink href="/docs/data-types" class="docs-sidebar-menu-item" active-class="active">
            Типи даних
          </NuxtLink>
          <NuxtLink href="/docs/conditional" class="docs-sidebar-menu-item" active-class="active">
            Умовні оператори
          </NuxtLink>
          <NuxtLink href="/docs/functions" class="docs-sidebar-menu-item" active-class="active">
            Дії
          </NuxtLink>
          <NuxtLink href="/docs/loops" class="docs-sidebar-menu-item" active-class="active">
            Цикли
          </NuxtLink>
          <NuxtLink href="/docs/structures" class="docs-sidebar-menu-item" active-class="active">
            Структури
          </NuxtLink>
        </div>
      </div>
      <div class="docs-content">
        <slot/>
      </div>

      <button @click="sidebarShown = !sidebarShown" class="docs-sidebar-toggle">
        {{ sidebarShown ? '×' : '☰' }}
      </button>
    </div>
  </main>
</template>

<style lang="scss">
$sidebarWidth: 20rem;

.docs {
  width: 100%;
}

.docs-sidebar {
  position: fixed;

  z-index: 1000;

  height: calc(100% - 2rem);
  width: $sidebarWidth;

  overflow: auto;

  border-radius: 1rem;

  &-head {
    padding: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  &-menu {
    margin-top: 2rem;

    &-item {
      padding: .5rem;

      display: block;

      text-decoration: none;
      border: 1px solid black;
      border-bottom: none;

      cursor: pointer;

      color: black;

      &:last-child {
        border-bottom: 1px solid black;
      }

      &:hover {
        background-color: lightgray;
      }

      &.active {
        background-color: black;
        color: white;
      }
    }
  }

  &-toggle {
    position: fixed;
    z-index: 1001;

    top: 1rem;
    left: 1rem;

    padding: 1rem;

    font-size: 1.5rem;
    background-color: rgba(white, .1);
    border: none;
    border-radius: 2px;

    background-image: radial-gradient(transparent 1px, white 1px);
    background-size: 8px 8px;
    backdrop-filter: saturate(50%) blur(4px);

    @media screen and (min-width: 956px) {
      display: none;
    }
  }

  @media screen and (max-width: 956px) {
    width: 100%;
    height: 100%;

    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    padding: 1rem;

    background-color: white;

    &:not(.shown) {
      display: none;
    }
  }
}

.docs-content {
  margin-left: $sidebarWidth;

  padding: 0 3rem;

  &-title {
    text-align: center;
  }

  @media screen and (max-width: 956px) {
    margin-left: 0;

    padding: 0 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
</style>
