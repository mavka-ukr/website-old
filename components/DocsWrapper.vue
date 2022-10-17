<template>
  <main class="container">
    <div id="docs" class="docs">
      <div class="docs-sidebar">
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
}

.docs-content {
  margin-left: $sidebarWidth;

  padding: 0 3rem;

  &-title {
    text-align: center;
  }
}
</style>
