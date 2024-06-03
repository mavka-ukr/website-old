<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";
import orgFavicon from "@/assets/images/organization.svg";

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
      type: "image/svg",
      href: orgFavicon,
    },
  ],
});

const route = useRoute();
const sidebarShown = useState("sidebarShown", () => false);
const structuresLinks = useState("structuresLinks", () => [
  {
    name: "Орган",
    encodedLink: encodeURI("/організація/структура/орган"),
  },
  {
    name: "Проект",
    encodedLink: encodeURI("/організація/структура/проект"),
  },
  {
    name: "Учасник",
    encodedLink: encodeURI("/організація/структура/учасник"),
  },
  {
    name: "Комітет",
    encodedLink: encodeURI("/організація/структура/комітет"),
  },
]);
const isStructuresExpanded = useState("isStructuresExpanded", () => false);
const isStructuresPage = useState("isStructuresPage", () => false);
const organsLinks = useState("organsLinks", () => [
  {
    name: "КомітетʼДослідження",
    encodedLink: encodeURI("/організація/комітет/дослідження"),
  },
  {
    name: "КомітетʼНавчання",
    encodedLink: encodeURI("/організація/комітет/навчання"),
  },
  {
    name: "КомітетʼДобробуту",
    encodedLink: encodeURI("/організація/комітет/добробуту"),
  },
  {
    name: "КомітетʼЗахисту",
    encodedLink: encodeURI("/організація/комітет/захисту"),
  },
  {
    name: "КомітетʼМаМа",
    encodedLink: encodeURI("/організація/комітет/мама"),
  },
  {
    name: "КомітетʼЦілі",
    encodedLink: encodeURI("/організація/комітет/цілі"),
  },
  {
    name: "КомітетʼWeb",
    encodedLink: encodeURI("/організація/комітет/web"),
  },
]);
const isOrgansExpanded = useState("isOrgansExpanded", () => false);
const isOrgansPage = useState("isOrgansPage", () => false);
const membersLinks = useState("membersLinks", () => [
  {
    name: "БДКП",
    encodedLink: encodeURI("/організація/учасники/БДКП"),
  },
]);
const isMembersExpanded = useState("isMembersExpanded", () => false);
const isMembersPage = useState("isMembersPage", () => false);

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
    if (structuresLinks.value.find((l) => route.path === l.encodedLink)) {
      isStructuresExpanded.value = true;
      isStructuresPage.value = true;
    } else if (organsLinks.value.find((l) => route.path === l.encodedLink)) {
      isOrgansExpanded.value = true;
      isOrgansPage.value = true;
    } else if (membersLinks.value.find((l) => route.path === l.encodedLink)) {
      isMembersExpanded.value = true;
      isMembersPage.value = true;
    } else {
      isStructuresPage.value = false;
      isOrgansPage.value = false;
      isMembersPage.value = false;
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
          <img
            class="logo-light"
            src="@/assets/images/organization.svg"
            alt=""
          />
          <img
            class="logo-dark"
            src="@/assets/images/organization.svg"
            alt=""
          />
        </NuxtLink>
      </div>
      <NuxtLink
        :href="encodeURI(`/організація`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        Організація
      </NuxtLink>
      <a
        @click.stop.prevent="isStructuresExpanded = !isStructuresExpanded"
        class="docs-sidebar-menu-item sticky"
      >
        Структури
        <span style="margin-left: auto" class="material-symbols-rounded">
          <template v-if="isStructuresExpanded">expand_less</template>
          <template v-else>expand_more</template>
        </span>
      </a>
      <template v-if="isStructuresExpanded">
        <template
          v-for="(subjectLink, i) in structuresLinks"
          :key="subjectLink.encodedLink"
        >
          <NuxtLink
            :href="subjectLink.encodedLink"
            class="docs-sidebar-menu-item subitem"
            active-class="active"
            :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === structuresLinks.length - 1,
            }"
          >
            {{ subjectLink.name }}
          </NuxtLink>
        </template>
      </template>
      <a
        @click.stop.prevent="isOrgansExpanded = !isOrgansExpanded"
        class="docs-sidebar-menu-item sticky"
      >
        Комітети
        <span style="margin-left: auto" class="material-symbols-rounded">
          <template v-if="isOrgansExpanded">expand_less</template>
          <template v-else>expand_more</template>
        </span>
      </a>
      <template v-if="isOrgansExpanded">
        <template
          v-for="(organLink, i) in organsLinks"
          :key="organLink.encodedLink"
        >
          <NuxtLink
            :href="organLink.encodedLink"
            class="docs-sidebar-menu-item subitem"
            active-class="active"
            :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === organsLinks.length - 1,
            }"
          >
            {{ organLink.name }}
          </NuxtLink>
        </template>
      </template>
      <a
        @click.stop.prevent="isMembersExpanded = !isMembersExpanded"
        class="docs-sidebar-menu-item sticky"
      >
        Учасники
        <span style="margin-left: auto" class="material-symbols-rounded">
          <template v-if="isMembersExpanded">expand_less</template>
          <template v-else>expand_more</template>
        </span>
      </a>
      <template v-if="isMembersExpanded">
        <template
          v-for="(memberLink, i) in membersLinks"
          :key="memberLink.encodedLink"
        >
          <NuxtLink
            :href="memberLink.encodedLink"
            class="docs-sidebar-menu-item subitem"
            active-class="active"
            :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === membersLinks.length - 1,
            }"
          >
            {{ memberLink.name }}
          </NuxtLink>
        </template>
      </template>
      <NuxtLink
        :href="encodeURI(`/організація/приєднатись`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        Приєднатись
      </NuxtLink>
      <NuxtLink
        :href="encodeURI(`/організація/юридичне`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        Юридичне
      </NuxtLink>
      <NuxtLink
        :href="encodeURI(`/організація/органопис`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        Органопис
      </NuxtLink>
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

      img {
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

      &.organization {
        img,
        svg {
          width: auto;
          height: 100px;
        }
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
