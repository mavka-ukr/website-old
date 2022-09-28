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
  назва: рядок
  швидкість: число
  вага: число
кінець

дія для Ракета р запустити()
  друк("Ракету " + р.назва + " запущено!")
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
інтернет має зтягнути взяти

автомобілі_ауді = чекати зтягнути("автомобілі.укр/пі/ауді")

автомобілі_ауді = автомобілі_ауді.жсон()

кожному авто беручи автомобілі_ауді
  друк("Авто: " + авто.назва)
кінець
`.trim(),
  },
];

const currentCode = useState('currentCode', () => codes[1]);
</script>

<template>
  <section class="hero">
    <div class="hero-pattern-1" style="background-image: url(../assets/images/logo-light.png)"></div>

    <div class="left">
      <h1 class="hero-title">
        Сучасна українська мова програмування
      </h1>
      <p class="hero-subtitle">
        Дія - це перша мова програмування, що працює, використовуючи українську абетку. Дія створена, щоб кожен
        українець мав можливість програмувати буденні речі зрозумілою мовою.
      </p>
      <div class="hero-buttons">
        <div class="button button-large">
          Розпочати
        </div>
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
              :code="currentCode.text"
          />
        </ClientOnly>

        <div class="code-window-buttons">
          <div class="button">
            ▶️ Запустити
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;

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

.hero-pattern-1 {
  position: absolute;

  top: 100px;
  left: 100px;

  height: 500px;
  width: 500px;

  background-repeat: no-repeat;
  background-size: 500px;
  //filter: grayscale(1);
  transform: rotate(180deg);

  opacity: .04;

  z-index: -1;
}
</style>
