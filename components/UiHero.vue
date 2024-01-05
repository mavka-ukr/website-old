<script setup>
import { useState } from "nuxt/app";
import UiCodeBlock from "~/components/UiCodeBlock.vue";

const codes = [
  {
    name: "привіт_ім'я.м",
    text: `
взяти читати

імʼя = читати("введіть ваше імʼя: ")

друк("привіт, %(імʼя)")
`.trim()
  },
  {
    name: "ракета.м",
    text: `
структура Ракета
  назва текст
  швидкість число
  вага число
кінець

дія Ракета.запустити()
  друк("Ракету %(я.назва) запущено!")
кінець

нептун = Ракета(назва="Нептун",
                швидкість=900,
                вага=870)

нептун.запустити()
`.trim()
  },
  {
    name: "сервер.м",
    text: `
взяти дід
взяти сервер [запустити, Запит, Відповідь]

запустити(
  дія(запит Запит)
    якщо запит.шлях == "/тачки"
      вернути дід.зібрати(
        ["Артеміда", "Венера", "Флора", "Луна", "Фортуна"]
      )
    кінець

    вернути Відповідь(404)
  кінець,
  (порт=8080),
  (): друк("Сервер запущено на http://localhost:8080!")
)
`.trim()
  },
  {
    name: "запит.м",
    text: `
взяти дід
взяти запит

чекати відповідь = запит.надіслати(урл="https://мавка.укр/тачки")
тачки = дід.розібрати(текст(відповідь.дані))

перебрати тачки як тачка
  друк(тачка)
кінець
`.trim()
  }
];

const currentCode = useState("currentCode", () => codes[1]);
</script>

<template>
  <section class="hero">
    <div class="hero-pattern hero-pattern-1"></div>
    <div class="hero-pattern hero-pattern-2"></div>
    <div class="hero-pattern hero-pattern-3"></div>
    <div class="hero-pattern hero-pattern-4"></div>

    <div class="left">
      <h1 class="hero-title">Сучасна українська мова програмування</h1>
      <h5 class="hero-subtitle">
        <span class="diia-word">Мавка</span> - це експериментальна мова
        програмування, що дозволяє кожному втілювати ідеї українською мовою.
        <span class="diia-word">Мавка</span> є першою мовою у своєму роді.
      </h5>
      <div class="hero-buttons">
        <NuxtLink
          :href="encodeURI('/документація')"
          class="button button-large"
        >
          Розпочати
        </NuxtLink>
      </div>
    </div>
    <div class="right">
      <UiCodeBlock :files="codes" :default-index="1" play-button />
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;

  margin-top: 50px;

  padding: 50px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  .left {
    margin-top: 2rem;
  }

  .right {
    margin-top: -0.5rem;
    max-width: 446px;
  }

  &-title {
    margin: 0;

    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.125;

    max-width: 15ch;
  }

  &-subtitle {
    margin: 0;

    font-size: 1.125rem;
    line-height: 1.25;
    margin-top: 2.5rem;
    color: var(--hint-color);

    max-width: 33ch;

    font-weight: 300;
  }

  &-buttons {
    margin-top: 2.5rem;

    display: flex;

    .button-large {
      padding: 0.8rem 1.6rem;
      border-radius: 0.8rem;
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 956px) {
    grid-template-columns: 1fr;

    margin-top: 50px;

    padding: 1rem;

    .right {
      margin-top: 5rem;

      .hljs {
        max-width: calc(100vw - 6rem);
      }
    }

    .hero-pattern {
      display: none;
    }

    .hero-pattern-1 {
      display: block;

      opacity: 0.02;
    }
  }
}

@keyframes turn {
  100% {
    transform: rotate(1turn);
  }
}

.hero-pattern-1 {
  position: absolute;

  top: 100px;
  left: 100px;

  height: 500px;
  width: 500px;
}

.hero-pattern-2 {
  position: absolute;

  top: -100px;
  right: -100px;

  height: 50px;
  width: 50px;
}

.hero-pattern-3 {
  position: absolute;

  top: 100px;
  right: 0px;

  height: 60px;
  width: 60px;
}

.hero-pattern-4 {
  position: absolute;

  top: 600px;
  left: -220px;

  height: 100px;
  width: 100px;
}

.hero-pattern {
  background-repeat: no-repeat;
  background-size: 100%;
  filter: grayscale(1);

  background-image: url(@/assets/images/logo-light.png);

  opacity: 0.04;

  z-index: 0;

  animation: turn 180s infinite linear reverse;
}

.play-button {
  background-color: black;
  color: white;
}
</style>
