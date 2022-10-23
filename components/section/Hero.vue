<script setup>
import { useState } from "nuxt/app";

const codes = [
  {
    name: 'факторіал',
    text: `
дія знайти_факторіал(к)
  результат = 1

  кожному х беручи діапазон(1, к)
    результат = результат * х
  кінець

  результат
кінець

ф10 = знайти_факторіал(10)

друк(ф10)
`.trim(),
  },
  {
    name: 'ракета',
    text: `
структура Ракета
  назва
  швидкість
  вага
кінець

дія для Ракети р запустити()
  друк("Ракету $(р.назва) запущено!")
кінець

нептун = Ракета(назва: "Нептун",
                швидкість: 1000,
                вага: 500)

нептун.запустити()
`.trim(),
  },
  {
    name: 'інтернет',
    text: `
взяти інтернет

автомобілі_ауді = чекати інтернет.отримати("автомобілі.укр/пі/ауді")

автомобілі_ауді = автомобілі_ауді.дд()

кожній авто беручи автомобілі_ауді
  друк("Авто: " + авто.назва)
кінець
`.trim(),
  },
];

const currentCode = useState('currentCode', () => codes[1]);
</script>

<template>
  <section class="hero">
    <div class="hero-pattern hero-pattern-1"></div>
    <div class="hero-pattern hero-pattern-2"></div>
    <div class="hero-pattern hero-pattern-3"></div>
    <div class="hero-pattern hero-pattern-4"></div>

    <div class="left">
      <h1 class="hero-title">
        Сучасна українська мова програмування
      </h1>
      <p class="hero-subtitle">
        Дія - це перша* мова програмування, що працює на українській абетці.
        Дія створена, щоб кожен українець мав можливість програмувати буденні речі зрозумілою мовою.
      </p>
      <div class="hero-buttons">
        <NuxtLink href="/docs" class="button button-large">
          Розпочати
        </NuxtLink>
      </div>
    </div>
    <div class="right">
      <div class="code-window">
        <div class="code-window-names">
          <template v-for="code in codes">
            <button @click="currentCode = code" class="code-window-name"
                    :class="{ 'code-window-name-active': currentCode.name === code.name }">
              {{ code.name }}
            </button>
          </template>
        </div>

        <ClientOnly>
          <highlightjs
              language="diia"
              :autodetect="false"
              :code="currentCode.text"
          />
        </ClientOnly>

        <div class="code-window-buttons">
          <div class="button">
            ▶️ Бавитись
          </div>
        </div>
      </div>
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

  &-title {
    margin: 0;

    font-size: 2.4rem;
    font-weight: 600;

    max-width: 15ch;
  }

  &-subtitle {
    margin: 0;

    font-size: 1rem;
    margin-top: 2rem;
    color: #444;

    max-width: 35ch;
  }

  &-buttons {
    margin-top: 2rem;

    display: flex;

    .button-large {
      padding: .8rem 1.6rem;
      border-radius: .8rem;
      font-size: 1.2rem;
    }
  }


  @media only screen and (max-width: 956px) {
    grid-template-columns: 1fr;

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
  }
}

.code-window {
  position: relative;

  background: black;
  padding: .5rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  font-size: 1rem;

  &-buttons {
    margin-top: .5rem;

    .button {
      font-size: .8rem;
    }
  }

  pre {
    margin: 0;

    overflow-x: auto;
  }
}

.code-window-names {
  position: absolute;
  display: flex;
  top: -1rem;

  .code-window-name {
    background: transparent;
    border: none;
    border-radius: .5rem;
    font-weight: 600;
    font-size: 1rem;
    color: #9d3425;

    &-active {
      background: #9d3425;
      color: white;
    }
  }
}

.hljs {
  max-width: 446px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.code-window-full {
  .hljs {
    max-width: 100% !important;
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

  opacity: .04;

  z-index: -1;

  animation: turn 180s infinite linear reverse;
}
</style>
