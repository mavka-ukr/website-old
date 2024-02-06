<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";
import { POSITION, useToast } from "vue-toastification";

defineProps({
  prev: String,
  next: String,
  title: String,
  loading: Boolean,
});

const route = useRoute();
const sidebarShown = useState("sidebarShown", () => false);
const practiceLinks = useState("practiceLinks", () => [
  {
    name: "Встановлення",
    encodedLink: encodeURI("/документація/встановлення"),
  },
  {
    name: "Розкладка",
    encodedLink: encodeURI("/документація/розкладка"),
  },
  {
    name: "Перша програма",
    encodedLink: encodeURI("/документація/перша-програма"),
  },
  {
    name: "Приклади",
    encodedLink: encodeURI("/документація/приклади"),
  },
  {
    name: "МаМа",
    encodedLink: encodeURI("/документація/мама"),
  },
  {
    name: "Джеджалик",
    encodedLink: encodeURI("/документація/джеджалик"),
  },
  {
    name: "Запуск в браузері",
    encodedLink: encodeURI("/документація/запуск-в-браузері"),
  },
  {
    name: "Стиль",
    encodedLink: encodeURI("/документація/стиль"),
  },
  {
    name: "Арифметика",
    encodedLink: encodeURI("/документація/арифметика"),
  },
  {
    name: "Побітові операції",
    encodedLink: encodeURI("/документація/побітові-операції"),
  },
  {
    name: "Порівняння",
    encodedLink: encodeURI("/документація/порівняння"),
  },
  {
    name: "Взяти",
    encodedLink: encodeURI("/документація/взяти"),
  },
  {
    name: "Тестування",
    encodedLink: encodeURI("/документація/тестування"),
  },
  {
    name: "Паки",
    encodedLink: encodeURI("/документація/паки"),
  },
  {
    name: "Старт-паки",
    encodedLink: encodeURI("/документація/старт-паки"),
  },
  {
    name: "МРМ",
    encodedLink: encodeURI("/документація/мрм"),
  },
]);
const theoryLinks = useState("theoryLinks", () => [
  {
    name: "Вступ до Теорії",
    encodedLink: encodeURI("/документація/вступ-до-теорії"),
  },
  {
    name: "Вказівка",
    encodedLink: encodeURI("/документація/вказівка"),
  },
  {
    name: "Обʼєкт",
    encodedLink: encodeURI("/документація/обʼєкт"),
  },
  {
    name: "Субʼєкт",
    encodedLink: encodeURI("/документація/субʼєкт"),
  },
  {
    name: "Дія",
    encodedLink: encodeURI("/документація/дія"),
  },
  {
    name: "Структура",
    encodedLink: encodeURI("/документація/структура"),
  },
  {
    name: "Число",
    encodedLink: encodeURI("/документація/число"),
  },
  {
    name: "Текст",
    encodedLink: encodeURI("/документація/текст"),
  },
  {
    name: "Логічне",
    encodedLink: encodeURI("/документація/логічне"),
  },
  {
    name: "Список",
    encodedLink: encodeURI("/документація/список"),
  },
  {
    name: "Словник",
    encodedLink: encodeURI("/документація/словник"),
  },
  {
    name: "Модуль",
    encodedLink: encodeURI("/документація/модуль"),
  },
  {
    name: "Умова",
    encodedLink: encodeURI("/документація/умова"),
  },
  {
    name: "Перебір",
    encodedLink: encodeURI("/документація/перебір"),
  },
  {
    name: "Поки",
    encodedLink: encodeURI("/документація/поки"),
  },
  {
    name: "Спроба",
    encodedLink: encodeURI("/документація/спроба"),
  },
  {
    name: "Шаблон",
    encodedLink: encodeURI("/документація/шаблон"),
  },
  {
    name: "Коментар",
    encodedLink: encodeURI("/документація/коментар"),
  },
  {
    name: "Чародія",
    encodedLink: encodeURI("/документація/чародія"),
  },
  // {
  //   name: "Бог",
  //   encodedLink: encodeURI("/документація/бог")
  // }
]);
const stlLinks = useState("stlLinks", () => [
  {
    name: "Вступ до Бібліотеки",
    encodedLink: encodeURI("/документація/бібліотека"),
  },
  {
    name: "Математика",
    encodedLink: encodeURI("/документація/математика"),
  },
  {
    name: "Дід",
    encodedLink: encodeURI("/документація/дід"),
  },
  {
    name: "Сервер",
    encodedLink: encodeURI("/документація/сервер"),
  },
  {
    name: "Запит",
    encodedLink: encodeURI("/документація/запит"),
  },
  {
    name: "Файлова система",
    encodedLink: encodeURI("/документація/фс"),
  },
  {
    name: "JSON",
    encodedLink: encodeURI("/документація/json"),
  },
]);
const informationLinks = useState("informationLinks", () => [
  {
    name: "Автор",
    encodedLink: encodeURI("/документація/автор"),
  },
  {
    name: "Подяка",
    encodedLink: encodeURI("/документація/подяка"),
  },
  {
    name: "Змінопис",
    encodedLink: encodeURI("/документація/змінопис"),
  },
  {
    name: "Післясцена",
    encodedLink: encodeURI("/документація/післясцена"),
  },
]);
const isPracticeExpanded = useState("isPracticeExpanded", () => false);
const isPracticePage = useState("isPracticePage", () => false);
const isTheoryExpanded = useState("isTheoryExpanded", () => false);
const isTheoryPage = useState("isTheoryPage", () => false);
const isStlExpanded = useState("isStlExpanded", () => false);
const isStlPage = useState("isStlPage", () => false);
const isInformationExpanded = useState("isInformationExpanded", () => false);
const isInformationPage = useState("isInformationPage", () => false);

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
    if (practiceLinks.value.find((l) => route.path === l.encodedLink)) {
      isPracticeExpanded.value = true;
      isPracticePage.value = true;
    } else {
      isPracticePage.value = false;
    }

    if (theoryLinks.value.find((l) => route.path === l.encodedLink)) {
      isTheoryExpanded.value = true;
      isTheoryPage.value = true;
    } else {
      isTheoryPage.value = false;
    }

    if (stlLinks.value.find((l) => route.path === l.encodedLink)) {
      isStlExpanded.value = true;
      isStlPage.value = true;
    } else {
      isStlPage.value = false;
    }

    if (informationLinks.value.find((l) => route.path === l.encodedLink)) {
      isInformationExpanded.value = true;
      isInformationPage.value = true;

      if (process.client) {
        if (localStorage.getItem("audioVisible") !== "true") {
          document.getElementById("pluto").play();
        }
      }
    } else {
      isInformationPage.value = false;
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

const audioVisible = useState("audioVisible", () => false);
const audioPlaying = useState("audioPlaying", () => false);

onMounted(() => {
  if (process.client) {
    audioVisible.value = localStorage.getItem("audioVisible") === "true";

    document.getElementById("pluto").addEventListener("play", () => {
      audioPlaying.value = true;
      localStorage.setItem("audioVisible", "true");
      audioVisible.value = true;

      const toast = useToast();
      toast(
        "Hans Zimmer - Interstellar - Main Theme (Piano Version by Patrik Pietschmann)",
        {
          position: POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
          icon: false,
        },
      );
    });
    document.getElementById("pluto").addEventListener("pause", () => {
      audioPlaying.value = false;
    });
  }
});

function toggleAudio() {
  if (process.client) {
    if (audioPlaying.value) {
      document.getElementById("pluto").pause();
    } else {
      document.getElementById("pluto").loop = true;
      document.getElementById("pluto").play();
    }
  }
}
</script>

<template>
  <div id="docs" class="docs">
    <div class="docs-sidebar" :class="{ shown: sidebarShown }">
      <div class="docs-sidebar-head">
        <NuxtLink to="/" class="logo">
          <img class="logo-light" src="@/assets/images/logo-light.png" alt="" />
          <img class="logo-dark" src="@/assets/images/logo-dark.png" alt="" />
        </NuxtLink>
      </div>
      <NuxtLink
        :href="encodeURI(`/документація`)"
        class="docs-sidebar-menu-item first"
        active-class="active"
      >
        Вступ
      </NuxtLink>
      <a
        @click.stop.prevent="isPracticeExpanded = !isPracticeExpanded"
        class="docs-sidebar-menu-item sticky"
      >
        Практика
        <span style="margin-left: auto" class="material-symbols-rounded">
          <template v-if="isPracticeExpanded">expand_less</template>
          <template v-else>expand_more</template>
        </span>
      </a>
      <template v-if="isPracticeExpanded">
        <template
          v-for="(practiceLink, i) in practiceLinks"
          :key="practiceLink.encodedLink"
        >
          <NuxtLink
            :href="practiceLink.encodedLink"
            class="docs-sidebar-menu-item subitem"
            active-class="active"
            :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === practiceLinks.length - 1,
            }"
          >
            {{ practiceLink.name }}
          </NuxtLink>
        </template>
      </template>
      <a
        @click.stop.prevent="isTheoryExpanded = !isTheoryExpanded"
        class="docs-sidebar-menu-item sticky"
      >
        Теорія
        <span style="margin-left: auto" class="material-symbols-rounded">
          <template v-if="isTheoryExpanded">expand_less</template>
          <template v-else>expand_more</template>
        </span>
      </a>
      <template v-if="isTheoryExpanded">
        <template
          v-for="(theoryLink, i) in theoryLinks"
          :key="theoryLink.encodedLink"
        >
          <NuxtLink
            :href="theoryLink.encodedLink"
            class="docs-sidebar-menu-item subitem"
            active-class="active"
            :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === theoryLinks.length - 1,
            }"
          >
            {{ theoryLink.name }}
          </NuxtLink>
        </template>
      </template>
      <a
        @click.stop.prevent="isStlExpanded = !isStlExpanded"
        class="docs-sidebar-menu-item sticky"
      >
        Бібліотека
        <span style="margin-left: auto" class="material-symbols-rounded">
          <template v-if="isStlExpanded">expand_less</template>
          <template v-else>expand_more</template>
        </span>
      </a>
      <template v-if="isStlExpanded">
        <template v-for="(stlLink, i) in stlLinks" :key="stlLink.encodedLink">
          <NuxtLink
            :href="stlLink.encodedLink"
            class="docs-sidebar-menu-item subitem"
            active-class="active"
            :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === stlLinks.length - 1,
            }"
          >
            {{ stlLink.name }}
          </NuxtLink>
        </template>
      </template>
      <a
        @click.stop.prevent="isInformationExpanded = !isInformationExpanded"
        class="docs-sidebar-menu-item sticky"
      >
        Кінець
        <span style="margin-left: auto" class="material-symbols-rounded">
          <template v-if="isInformationExpanded">expand_less</template>
          <template v-else>expand_more</template>
        </span>
      </a>
      <template v-if="isInformationExpanded">
        <template
          v-for="(informationLink, i) in informationLinks"
          :key="informationLink.encodedLink"
        >
          <NuxtLink
            :href="informationLink.encodedLink"
            class="docs-sidebar-menu-item subitem"
            active-class="active"
            :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === informationLinks.length - 1,
            }"
          >
            {{ informationLink.name }}
          </NuxtLink>
        </template>
      </template>
      <div style="min-height: 5rem; display: block; width: 100%"></div>
      <div class="docs-sidebar-footer-wrapper">
        <div class="docs-sidebar-footer">
          <template v-if="audioPlaying || isInformationPage">
            <button
              @click="toggleAudio"
              class="docs-sidebar-footer-play"
              :class="{ active: audioPlaying }"
            >
              <template v-if="audioPlaying">
                <span class="material-symbols-rounded filled">stop</span>
              </template>
              <template v-else>
                <span class="material-symbols-rounded">play_arrow</span>
              </template>
            </button>
          </template>
          Документація Мавки
        </div>
      </div>
    </div>

    <div class="docs-content">
      <div class="docs-content-inner">
        <slot />
      </div>
    </div>

    <button
      @click="sidebarShown = !sidebarShown"
      class="nav-toggle"
      :class="{ playing: audioPlaying && !sidebarShown }"
    >
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
