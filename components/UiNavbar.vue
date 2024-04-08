<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";

const navigationShown = useState("navigationShown", () => false);
const isMobile = useState("isMobile", () => false);
const version = useState("version", () => "а.б.в");

function onResize() {
  isMobile.value = window.innerWidth <= 956;
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 956;
  window.addEventListener("resize", onResize);
  if (process.client) {
    fetch("https://api.github.com/repos/mavka-ukr/mavka/releases/latest")
      .then((res) => res.json())
      .then((data) => {
        version.value = data.tag_name;
      });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});

addRouteMiddleware(() => {
  navigationShown.value = false;
});

const darkMode = computed(() => window.darkMode.value);

function toggleDarkMode() {
  window.toggleDarkMode();
}
</script>

<template>
  <a
    v-if="false"
    target="_blank"
    href="https://github.com/mavka-ukr"
    class="top-under-construction"
  >
    Приєднуйся до створення Мавки!
  </a>

  <div class="navbar" :class="{ 'navigation-shown': navigationShown }">
    <NuxtLink to="/" class="logo">
      <div class="logo-image">
        <img class="logo-light" src="@/assets/images/logo-light.png" alt="" />
        <img class="logo-dark" src="@/assets/images/logo-dark.png" alt="" />
      </div>
      Мавка
      <span class="navbar-alpha">{{ version }}</span>
    </NuxtLink>

    <template v-if="isMobile">
      <div v-if="navigationShown" class="ui-mobile-navbar-content">
        <div class="ui-mobile-navbar-links">
          <a
            class="ui-mobile-navbar-link"
            target="_blank"
            href="https://бавитись.мавка.укр"
          >
            <img src="@/assets/images/tools/playground.png" alt="" />
            Бавитись
          </a>
          <a
            class="ui-mobile-navbar-link"
            target="_blank"
            href="https://пак.укр"
          >
            <img src="@/assets/images/tools/pak.png" alt="" />
            Паки
          </a>
          <a
            class="ui-mobile-navbar-link"
            href="https://фрагмент.укр"
            target="_blank"
          >
            <img src="@/assets/images/tools/fragment-new.png" alt="" />
            Фрагменти
          </a>
          <NuxtLink
            class="ui-mobile-navbar-link"
            :href="encodeURI('/джеджалик')"
          >
            <img src="@/assets/images/tools/jejalyk.png" alt="" />
            Джеджалик
          </NuxtLink>
          <a
            class="ui-mobile-navbar-link"
            href="https://конкурс.укр"
            target="_blank"
          >
            <img src="@/assets/images/tools/konkurs.png" alt="" />
            Конкурси
          </a>
          <a
            class="ui-mobile-navbar-link"
            target="_blank"
            href="https://r2u.org.ua/wiki/keyboard/UkrainianUnicode"
          >
            <img src="@/assets/images/tools/layout.png" alt="" />
            Розкладка
          </a>
          <NuxtLink class="ui-mobile-navbar-link" to="/cyrrilic">
            <img src="@/assets/images/tools/cyrrilic.png" alt="" />
            Цирілик
          </NuxtLink>
          <NuxtLink
            class="ui-mobile-navbar-link"
            :to="encodeURI('/організація')"
          >
            <img src="@/assets/images/organization.svg" alt="" />
            Організація
          </NuxtLink>
          <NuxtLink
            class="ui-mobile-navbar-link"
            :to="encodeURI('/інформація')"
          >
            <span class="material-symbols-rounded bold">info</span>
            Інформація
          </NuxtLink>
          <ClientOnly>
            <a
              class="ui-mobile-navbar-link"
              @click.stop.prevent="toggleDarkMode"
            >
              <span class="material-symbols-rounded bold">
                <template v-if="darkMode === 'true'">dark_mode</template>
                <template v-if="darkMode === 'false'">light_mode</template>
                <template v-if="darkMode === 'auto'">
                  night_sight_auto
                </template>
              </span>
              <span class="ui-mobile-navbar-link-text">
                Світло
                <span class="badge">
                  <template v-if="darkMode === 'true'">ні</template>
                  <template v-if="darkMode === 'false'">так</template>
                  <template v-if="darkMode === 'auto'">авто</template>
                </span>
              </span>
            </a>
          </ClientOnly>
        </div>
        <div class="ui-mobile-navbar-buttons">
          <NuxtLink :href="encodeURI('/документація')" class="button">
            Документація
          </NuxtLink>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="links">
        <a class="link" target="_blank" href="https://бавитись.мавка.укр">
          <img src="@/assets/images/tools/playground.png" alt="" />
          Бавитись
        </a>
        <a class="link" target="_blank" href="https://пак.укр">
          <img src="@/assets/images/tools/pak.png" alt="" />
          Паки
        </a>
        <a target="_blank" class="link" href="https://фрагмент.укр">
          <img src="@/assets/images/tools/fragment-new.png" alt="" />
          Фрагменти
        </a>

        <ClientOnly>
          <VDropdown compute-transform-origin :distance="8">
            <template #default="{ shown }">
              <button class="link">
                <span class="material-symbols-rounded">
                  <template v-if="shown">close</template>
                  <template v-else>apps</template>
                </span>
              </button>
            </template>

            <template #popper>
              <UiMenu>
                <UiMenuLink
                  v-close-popper
                  tag="RouterLink"
                  :to="encodeURI('/джеджалик')"
                >
                  <img src="@/assets/images/tools/jejalyk.png" alt="" />
                  Джеджалик
                </UiMenuLink>
                <UiMenuLink
                  v-close-popper
                  href="https://конкурс.укр"
                  target="_blank"
                >
                  <img src="@/assets/images/tools/konkurs.png" alt="" />
                  Конкурси
                </UiMenuLink>
                <UiMenuLink
                  target="_blank"
                  href="https://r2u.org.ua/wiki/keyboard/UkrainianUnicode"
                >
                  <img src="@/assets/images/tools/layout.png" alt="" />
                  Розкладка
                </UiMenuLink>
                <UiMenuLink v-close-popper tag="RouterLink" to="/cyrrilic">
                  <img src="@/assets/images/tools/cyrrilic.png" alt="" />
                  Цирілик
                </UiMenuLink>
                <UiMenuLink
                  v-close-popper
                  tag="RouterLink"
                  :to="encodeURI('/організація')"
                >
                  <img src="@/assets/images/organization.svg" alt="" />
                  Організація
                </UiMenuLink>
                <UiMenuLink
                  v-close-popper
                  tag="RouterLink"
                  :to="encodeURI('/інформація')"
                >
                  <span class="material-symbols-rounded bold">info</span>
                  Інформація
                </UiMenuLink>
                <ClientOnly>
                  <UiMenuItem @click="toggleDarkMode">
                    <span class="material-symbols-rounded bold">
                      <template v-if="darkMode === 'true'">dark_mode</template>
                      <template v-if="darkMode === 'false'"
                        >light_mode</template
                      >
                      <template v-if="darkMode === 'auto'">
                        night_sight_auto
                      </template>
                    </span>
                    Світло
                    <span class="badge">
                      <template v-if="darkMode === 'true'">ні</template>
                      <template v-if="darkMode === 'false'">так</template>
                      <template v-if="darkMode === 'auto'">авто</template>
                    </span>
                  </UiMenuItem>
                </ClientOnly>
              </UiMenu>
            </template>
          </VDropdown>
        </ClientOnly>
      </div>
      <div class="buttons">
        <NuxtLink :href="encodeURI('/документація')" class="button">
          Документація
        </NuxtLink>
      </div>
    </template>
  </div>

  <button @click="navigationShown = !navigationShown" class="nav-toggle">
    {{ navigationShown ? "×" : "☰" }}
  </button>
</template>

<style lang="scss">
.ui-mobile-navbar-content {
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding-top: 6rem;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;

  .ui-mobile-navbar-links {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .ui-mobile-navbar-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;

      img {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
        margin-bottom: 0.75rem;
      }

      .material-symbols-rounded {
        font-size: 2rem;
        margin-bottom: 0.75rem;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }

      .ui-mobile-navbar-link-text {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .badge {
        margin-left: 0.75ch;
        font-size: 0.8rem;
        padding: 0.1rem 0.4rem;
        border-radius: 0.4rem;
        background: var(--text-color);
        color: var(--bg-color);
        font-weight: 600;
        display: flex;
        align-content: center;
        justify-content: center;
      }
    }
  }

  .ui-mobile-navbar-buttons {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;

    > * + * {
      margin-top: 0.5rem;
    }

    > * {
      width: 100%;
      text-align: center;
      height: 2.5rem;

      button {
        width: 100%;

        height: 2.5rem;
      }
    }
  }
}

.navbar {
  //margin-top: 40px;

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
      font-size: 1rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;

      color: var(--text-color);

      padding: 0.5rem 1rem;
      border-radius: 1rem;

      transition: all 125ms ease-in-out;

      img {
        margin-right: 0.75em;
        height: 1em;
      }

      span {
        font-size: 1.4rem;
      }

      &:hover {
        color: var(--text-color);
        background: rgba(0, 0, 0, 0.05);
      }

      &:active {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    > * + * {
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
    font-size: 0.5rem;
    color: var(--hint-color);
  }

  @media only screen and (max-width: 956px) {
    margin-top: 0;
    grid-template-areas: "logo" "links" "buttons";

    .navbar-alpha {
      right: 56px;
      left: unset;
      top: 35px;
    }

    .logo {
      flex-direction: row-reverse;
      padding-top: 3px;

      .logo-image {
        margin-right: 1rem;
        margin-left: calc(0.5rem);
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
      .links,
      .buttons {
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
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
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
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  @media only screen and (max-width: 956px) {
    display: none;
  }
}
</style>
