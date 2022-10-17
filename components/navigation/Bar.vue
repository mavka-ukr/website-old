<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";

const navigationShown = useState('navigationShown', () => false);

addRouteMiddleware(() => {
  navigationShown.value = false;
});
</script>

<template>
  <div class="navbar" :class="{ 'navigation-shown': navigationShown }">
    <div class="logo">
      <NuxtLink to="/" class="logo-image">
        <img src="@/assets/images/logo-light.png" alt="">
      </NuxtLink>
      Дія
    </div>
    <div class="links">
      <a class="link" href="/play">Грати</a>
      <a class="link" href="/packages">Пакунки</a>
      <a class="link" href="/packages">Спільнота</a>
    </div>
    <div class="buttons">
      <NuxtLink to="/docs" class="button">
        Документація
      </NuxtLink>
    </div>
  </div>

  <button @click="navigationShown = !navigationShown" class="nav-toggle">
    {{ navigationShown ? '×' : '☰' }}
  </button>
</template>

<style lang="scss">
.navbar {
  display: grid;
  grid-template-areas: "logo links buttons";

  height: 80px;

  .logo {
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .links {
    grid-area: links;

    display: flex;
    align-items: center;
    justify-content: center;

    .link {
      font-size: .95rem;
      text-decoration: none;
      color: black;
    }

    .link + .link {
      margin-left: 1rem;
    }
  }

  .buttons {
    grid-area: buttons;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 956px) {
    grid-template-areas: "logo" "links"  "buttons";
    place-items: center;

    .links {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background-color: white;
      flex-direction: column;

      .link {
        font-size: 2rem;
      }

      .link + .link {
        margin-left: 0;
        margin-top: 1rem;
      }
    }

    .buttons {
      position: fixed;

      bottom: 4rem;

      z-index: 1001;

      .button {
        font-size: 2rem;
      }
    }

    &:not(.navigation-shown) {
      .links, .buttons {
        display: none;
      }
    }
  }
}

.logo {
  font-size: 1.4rem;
  font-weight: 500;

  cursor: pointer;

  &-image {
    margin-right: 1rem;

    width: 2rem;
    height: 2rem;

    img {
      width: inherit;
      height: inherit;

      object-fit: contain;
    }
  }
}

.button {
  background: black;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: .6rem;
  cursor: pointer;

  text-decoration: none;
}
</style>
