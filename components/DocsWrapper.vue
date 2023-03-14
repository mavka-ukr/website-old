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
            <img class="logo-light" src="@/assets/images/logo-light.png" alt="">
            <img class="logo-dark" src="@/assets/images/logo-dark.png" alt="">
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
          <NuxtLink href="/docs/types" class="docs-sidebar-menu-item" active-class="active">
            Типизація
          </NuxtLink>
          <NuxtLink href="/docs/conditional" class="docs-sidebar-menu-item" active-class="active">
            Умовні оператори
          </NuxtLink>
          <NuxtLink href="/docs/operations" class="docs-sidebar-menu-item" active-class="active">
            Арифметика
          </NuxtLink>
          <NuxtLink href="/docs/dii" class="docs-sidebar-menu-item" active-class="active">
            Дії
          </NuxtLink>
          <NuxtLink href="/docs/functions" class="docs-sidebar-menu-item" active-class="active">
            Функції
          </NuxtLink>
          <NuxtLink href="/docs/loops" class="docs-sidebar-menu-item" active-class="active">
            Цикли
          </NuxtLink>
          <NuxtLink href="/docs/structures" class="docs-sidebar-menu-item" active-class="active">
            Структури
          </NuxtLink>
          <NuxtLink href="/docs/modules" class="docs-sidebar-menu-item" active-class="active">
            Модулі
          </NuxtLink>
          <NuxtLink v-if="false" href="/docs/paks" class="docs-sidebar-menu-item" active-class="active">
            Паки
          </NuxtLink>
          <NuxtLink href="/docs/examples" class="docs-sidebar-menu-item" active-class="active">
            Приклади
          </NuxtLink>
          <NuxtLink href="/docs/extensions" class="docs-sidebar-menu-item" active-class="active">
            Розширення
          </NuxtLink>
          <NuxtLink href="/docs/data" class="docs-sidebar-menu-item" active-class="active">
            Дід
          </NuxtLink>
          <NuxtLink href="/docs/oop" class="docs-sidebar-menu-item" active-class="active">
            ООП
          </NuxtLink>
          <NuxtLink href="/docs/comments" class="docs-sidebar-menu-item" active-class="active">
            Коментарі
          </NuxtLink>
          <NuxtLink href="/docs/tries" class="docs-sidebar-menu-item" active-class="active">
            Спроби
          </NuxtLink>
          <NuxtLink href="/docs/net" class="docs-sidebar-menu-item" active-class="active">
            Інтернет
          </NuxtLink>
          <NuxtLink href="/docs/lists" class="docs-sidebar-menu-item" active-class="active">
            Списки
          </NuxtLink>
          <NuxtLink href="/docs/maps" class="docs-sidebar-menu-item" active-class="active">
            Словники
          </NuxtLink>
          <NuxtLink v-if="true" href="/docs/v1" class="docs-sidebar-menu-item" active-class="active">
            В1
          </NuxtLink>
        </div>
      </div>
      <div class="docs-content">
        <slot />
      </div>

      <button @click="sidebarShown = !sidebarShown" class="nav-toggle">
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

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

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
    padding-bottom: 4rem;

    &-item {
      padding: .5rem;

      display: block;

      text-decoration: none;
      border: 1px solid var(--text-color);
      border-bottom: none;

      cursor: pointer;

      color: var(--text-color);

      &:last-child {
        border-bottom: 1px solid var(--text-color);
      }

      &:hover {
        background-color: rgba(var(--text-color_rgb), .1);
      }

      &.active {
        background-color: var(--text-color);
        color: var(--bg-color);
      }
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

    background-color: var(--bg-color);

    &:not(.shown) {
      display: none;
    }
  }
}

.docs-content {
  margin-left: $sidebarWidth;

  padding: 0 3rem;
  padding-bottom: 4rem;

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
