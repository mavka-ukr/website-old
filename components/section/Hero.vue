<template>
  <section class="hero">
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
        <ClientOnly>
          <highlightjs
              language="diia"
              :code="`дія факторіал(к):
  результат = 1

  кожному х беручи діапазон(1, к):
    результат = результат * х

  повернути результат

друк(факторіал(10))`"
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
  padding: 50px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  &-title {
    margin: 0;

    font-size: 3rem;
    font-weight: 600;

    max-width: 15ch;
  }

  &-subtitle {
    margin: 0;

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
  background: black;
  padding: .5rem;
  border-radius: 1rem;

  font-size: 1rem;

  &-buttons {
    margin-top: .5rem;

    .button {
      font-size: .8rem;
    }
  }

  pre {
    margin: 0;
  }
}
</style>
