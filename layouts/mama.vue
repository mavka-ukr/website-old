<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";
import mamaLogo from "assets/images/tools/mama.png";
import UiMaMaLogo from "~/components/UiMaMaLogo.vue";

defineProps({
  prev: String,
  next: String,
  title: String,
  loading: Boolean,
});

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: mamaLogo,
    },
  ],
});

const instructionsLinks = useState("instructionsLinks", () => []);
const isInstructionsExpanded = useState("isInstructionsExpanded", () => false);
const isInstructionsPage = useState("isInstructionsPage", () => false);

const route = useRoute();
const sidebarShown = useState("sidebarShown", () => false);

function updateColor() {
  if (process.client) {
    const randomNumberFrom0To3 = Math.floor(Math.random() * 4);

    const colors = [
      ["#485cb0", "var(--bg-color)"],
      ["#f3d74b", "#000000"],
      ["#b3271a", "var(--bg-color)"],
      ["var(--text-color)", "var(--bg-color)"],
    ];

    const randomColor = colors[randomNumberFrom0To3];

    document.documentElement.style.setProperty(
      "--sidebar-color",
      randomColor[0],
    );
    document.documentElement.style.setProperty(
      "--sidebar-text-color",
      randomColor[1],
    );
  }
}

watch(
  () => route.name,
  () => {
    if (instructionsLinks.value.find((l) => route.path === l.encodedLink)) {
      isInstructionsExpanded.value = true;
      isInstructionsPage.value = true;
    } else {
      isInstructionsPage.value = false;
    }

    updateColor();
  },
  {
    immediate: true,
  },
);

addRouteMiddleware(() => {
  sidebarShown.value = false;
  window.scrollTo({
    top: 0,
  });
});
</script>

<template>
  <div id="docs" class="docs">
    <div class="docs-sidebar" :class="{ shown: sidebarShown }">
      <div class="docs-sidebar-head">
        <NuxtLink to="/" class="logo">
          <UiMaMaLogo />
        </NuxtLink>
      </div>
      <NuxtLink
        :href="encodeURI(`/мама`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        МаМа
      </NuxtLink>
      <NuxtLink
        :href="encodeURI(`/мама/машина`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        Машина
      </NuxtLink>
      <NuxtLink
        :href="encodeURI(`/мама/виконання-дій`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        Виконання дій
      </NuxtLink>
      <NuxtLink
        :href="encodeURI(`/мама/утилізація-памʼяті`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        Утилізація памʼяті
      </NuxtLink>
      <a
        @click.stop.prevent="isInstructionsExpanded = !isInstructionsExpanded"
        class="docs-sidebar-menu-item sticky"
      >
        Вказівки
        <span style="margin-left: auto" class="material-symbols-rounded">
          <template v-if="isInstructionsExpanded">expand_less</template>
          <template v-else>expand_more</template>
        </span>
      </a>
      <template v-if="isInstructionsExpanded">
        <template
          v-for="(instructionLink, i) in instructionsLinks"
          :key="instructionLink.encodedLink"
        >
          <NuxtLink
            :href="instructionLink.encodedLink"
            class="docs-sidebar-menu-item subitem"
            active-class="active"
            :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === instructionsLinks.length - 1,
            }"
          >
            {{ instructionLink.name }}
          </NuxtLink>
        </template>
      </template>
      <div style="min-height: 5rem; display: block; width: 100%"></div>
      <div class="docs-sidebar-footer-wrapper">
        <div class="docs-sidebar-footer">Організація Мавки</div>
      </div>
    </div>

    <div class="docs-content">
      <div class="docs-content-inner">
        <slot />
      </div>
    </div>

    <button @click="sidebarShown = !sidebarShown" class="nav-toggle">
      {{ sidebarShown ? "×" : "☰" }}
    </button>
  </div>
</template>

<style lang="scss">
$sidebarWidth: 20rem;

.Vue-Toastification__toast--default {
  background-color: var(--sidebar-color);
  color: var(--sidebar-text-color);
}

.docs {
  width: 100%;
  height: 100%;
}

.docs-sidebar {
  position: fixed;

  z-index: 1000;
  top: 0;
  left: 0;

  height: 100%;
  width: $sidebarWidth;

  overflow: auto;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  background: var(--bg-color);

  display: flex;
  flex-direction: column;

  border-right: 1px solid var(--border-color);

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  &-head {
    position: sticky;
    top: 0;
    z-index: 1000;

    background: var(--bg-color);
    border-bottom: 1px solid var(--border-color);

    padding: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 50px;
        height: 50px;
      }
    }
  }

  &-menu-item {
    padding: 0.75rem 1rem;

    display: flex;
    align-items: center;

    background: var(--bg-color);

    text-decoration: none;
    border-bottom: 1px solid var(--border-color);

    cursor: pointer;

    color: var(--text-color);

    &.sticky {
      position: sticky;
      top: 89.91px;
    }

    .material-symbols-rounded {
      margin-right: 0.33rem;
      font-size: 1em;
    }

    &.subitem {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    &.withTopShadow {
      box-shadow: inset 0 11px 8px -10px #3333331a;

      @at-root html.cs-dark & {
        box-shadow: inset 0 11px 8px -10px #111111;
      }
    }

    &.withBottomShadow {
      box-shadow: inset 0 -11px 8px -10px #3333331a;

      @at-root html.cs-dark & {
        box-shadow: inset 0 -11px 8px -10px #111111;
      }
    }

    &.withTopShadow.withBottomShadow {
      box-shadow:
        inset 0 11px 8px -10px #3333331a,
        inset 0 -11px 8px -10px #3333331a;

      @at-root html.cs-dark & {
        box-shadow:
          inset 0 11px 8px -10px #111111,
          inset 0 -11px 8px -10px #111111;
      }
    }

    &:last-child {
      border-bottom: 1px solid var(--border-color);
    }

    &:hover {
      background-color: #eeeeee;

      @at-root html.cs-dark & {
        background-color: #222222;
      }
    }

    &.active {
      font-weight: 500;
      background-color: var(--sidebar-color) !important;
      color: var(--sidebar-text-color);
    }
  }

  &-footer-wrapper {
    margin-top: auto;

    position: sticky;
    bottom: 0;
    background: var(--bg-color);
  }

  &-footer {
    position: relative;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 1px solid var(--border-color);
    color: rgba(var(--text-color_rgb), 0.5);
  }

  .docs-sidebar-footer-play {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2.5rem;
    border: none;
    background: none;
    color: rgba(var(--text-color_rgb), 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 1rem;
      height: 0.9rem;
    }

    &.active {
      color: var(--sidebar-text-color);
      background-color: var(--sidebar-color);
    }
  }

  @media screen and (max-width: 956px) {
    width: 100%;
    height: 100%;

    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    background-color: var(--bg-color);
    border-right: none;

    &:not(.shown) {
      display: none;
    }

    &-menu-item {
      //border-right: 1px solid var(--border-color);
      //border-left: 1px solid var(--border-color);
    }
  }
}

.docs-content {
  margin-top: 3rem;
  margin-bottom: 3rem;

  padding-left: $sidebarWidth;

  .docs-content-inner {
    max-width: 744px;

    margin: 0 auto;

    padding: 0 3rem;
    padding-bottom: 4rem;

    .docs-content-logo {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 3rem;

      img,
      svg {
        width: 50px;
        height: 50px;
      }
    }

    .docs-content-title {
      text-align: center;
    }

    @media screen and (max-width: 956px) {
      margin-left: 0;

      padding: 0 1rem;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  @media screen and (max-width: 956px) {
    padding-left: 0;
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
