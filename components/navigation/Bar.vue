<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";
import Mavka from "mavka";

const navigationShown = useState('navigationShown', () => false);

addRouteMiddleware(() => {
    navigationShown.value = false;
});
</script>

<template>
  <a target="_blank" href="https://github.com/mavka-ukr" class="top-under-construction">
    Приєднуйся до створення Мавки!
  </a>

  <div class="navbar" :class="{ 'navigation-shown': navigationShown }">
    <NuxtLink to="/" class="logo">
      <div class="logo-image">
        <img class="logo-light" src="@/assets/images/logo-light.png" alt="">
        <img class="logo-dark" src="@/assets/images/logo-dark.png" alt="">
      </div>
      Мавка
      <span class="navbar-alpha">{{ Mavka.VERSION }}</span>
    </NuxtLink>
    <div class="links">
      <a class="link" target="_blank" href="https://бавитись.мавка.укр">
        <img src="@/assets/images/tools/playground.png" alt="">
        Бавитись
      </a>
      <a class="link" target="_blank" href="https://пак.укр">
        <img src="@/assets/images/tools/pak.png" alt="">
        Паки
      </a>
      <a v-if="false" target="_blank" class="link" href="https://фрагмент.укр">
        <img src="@/assets/images/tools/fragment.png" alt="">
        Фрагменти
      </a>
      <a v-if="true" target="_blank" class="link" href="https://t.me/mavka_lang">
        <img src="@/assets/images/telegram-logo.png" alt="">
        Спільнота
      </a>
      <button class="link">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 96 960 960" width="16">
          <path
              d="M226 896q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226 642q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226 388q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"/>
        </svg>
      </button>
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
  margin-top: 40px;

  display: grid;
  grid-template-areas: "logo links buttons";

  height: 80px;

  .logo {
    position: relative;
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
      color: var(--hint-color);
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem 1rem;
      border-radius: 1rem;

      transition: all 125ms ease-in-out;

      img {
        margin-right: 0.5em;
        height: 1em;
      }

      &:hover {
        color: var(--text-color);
        background: rgba(0, 0, 0, 0.05);
      }

      &:active {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    button {
      display: none !important;
      background: transparent;
      border: none;
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

  .navbar-alpha {
    position: absolute;
    left: 120px;
    top: 40px;
    font-size: .5rem;
    color: var(--hint-color);
  }

  @media only screen and (max-width: 956px) {
    margin-top: 0;
    grid-template-areas: "logo" "links"  "buttons";

    .navbar-alpha {
      left: 85px;
      top: 16px;
    }

    .logo {
      flex-direction: row-reverse;
      padding-top: 3px;

      .navbar-alpha {
        display: none;
      }

      .logo-image {
        margin-right: 1rem;
        margin-left: calc(.5rem);
      }
    }

    .links {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background-color: var(--bg-color);
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

      place-self: center;

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
  background: var(--text-color);
  color: var(--bg-color);
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: .6rem;
  cursor: pointer;

  text-decoration: none;

  &.button-outline {
    background: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
  }
}

.top-under-construction {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: white;
  font-weight: 500;

  color: var(--bg-color);

  background: rgb(238, 174, 202);
  background: linear-gradient(90deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);

  @media only screen and (max-width: 956px) {
    display: none;
  }
}
</style>
