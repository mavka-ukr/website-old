<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";

defineProps({
  prev: String,
  next: String,
  title: String,
  loading: Boolean,
});

const sidebarShown = useState("sidebarShown", () => false);

addRouteMiddleware(() => {
  sidebarShown.value = false;
  window.scrollTo({
    top: 0,
  });
});
</script>

<template>
  <main class="container">
    <div id="docs" class="docs">
      <div class="docs-sidebar" :class="{ shown: sidebarShown }">
        <div class="docs-sidebar-head">
          <NuxtLink to="/" class="logo">
            <img
              class="logo-light"
              src="@/assets/images/logo-light.png"
              alt=""
            />
            <img class="logo-dark" src="@/assets/images/logo-dark.png" alt="" />
          </NuxtLink>
        </div>
        <div class="docs-sidebar-menu">
          <NuxtLink
            :href="encodeURI(`/документація`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Вступ
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/встановлення`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Встановлення
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/змінні`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Змінні
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/типи`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Типи даних
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/типизація`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Типизація
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/умови`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Умовні оператори
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/арифметика`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Арифметика
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/дії`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Дії
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/функції`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Функції
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/цикли`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Цикли
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/структури`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Структури
          </NuxtLink>
          <NuxtLink
            v-if="false"
            :href="encodeURI(`/документація/макети`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Макети
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/ооп`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            ООП
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/модулі`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Модулі
          </NuxtLink>
          <NuxtLink
            v-if="false"
            :href="encodeURI(`/документація/паки`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Паки
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/коментарі`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Коментарі
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/спроби`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Спроби
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/магія`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Магічні дії
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/списки`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Списки
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/словники`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Словники
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/інтернет`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Інтернет
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/розширення`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Розширення
          </NuxtLink>
          <NuxtLink
            v-if="false"
            :href="encodeURI(`/документація/вітрини`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Вітрини
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/приклади`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Приклади
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/паки`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Паки
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/хмарні-паки`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Хмарні паки
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/дід`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Дід
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/математика`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Математика
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/стиль`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Стиль
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/розбір`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Розбір
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/тестування`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Тестування
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/список-змін`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Список змін
          </NuxtLink>
          <NuxtLink
            v-if="false"
            :href="encodeURI(`/документація/ма-2`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Ма-2
          </NuxtLink>
          <NuxtLink
            :href="encodeURI(`/документація/контрибутори`)"
            class="docs-sidebar-menu-item"
            active-class="active"
          >
            Контрибутори
          </NuxtLink>
        </div>
      </div>
      <div class="docs-content">
        <template v-if="title">
          <h1 class="docs-content-title">
            {{ title }}
          </h1>
        </template>

        <template v-if="loading">
          <div class="docs-loading">
            <img
              class="logo-light"
              src="@/assets/images/logo-light.png"
              alt=""
            />
            <img class="logo-dark" src="@/assets/images/logo-dark.png" alt="" />
          </div>
        </template>
        <template v-else>
          <slot />

          <div class="docs-buttons">
            <template v-if="prev">
              <NuxtLink :href="encodeURI(prev)" class="button button-outline">
                Відступ
              </NuxtLink>
            </template>
            <template v-if="next">
              <NuxtLink
                :href="encodeURI(next)"
                class="button button-outline next-button"
              >
                Наступ
              </NuxtLink>
            </template>
          </div>
        </template>
      </div>

      <button @click="sidebarShown = !sidebarShown" class="nav-toggle">
        {{ sidebarShown ? "×" : "☰" }}
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
    padding: 0.5rem;

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
      padding: 0.5rem;

      display: block;

      text-decoration: none;
      border: 1px solid var(--border-color);
      border-bottom: none;

      cursor: pointer;

      color: var(--text-color);

      &:last-child {
        border-bottom: 1px solid var(--border-color);
      }

      &:hover {
        background-color: rgba(var(--text-color_rgb), 0.1);
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

.docs-content {
  hr {
    border: 1px dashed var(--text-color);
    opacity: 0.25;
    margin: 2rem 0;
  }
}

.docs-buttons {
  margin-top: 3rem;

  display: flex;
  align-items: center;

  .next-button {
    margin-left: auto;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.docs-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;

  img {
    width: 50px;
    height: 50px;

    animation: spin 500ms cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
}
</style>
