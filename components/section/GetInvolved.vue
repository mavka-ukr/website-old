<script setup>
</script>

<template>
  <section class="get-involved">
    <h3>
      Приєднатись до створення
    </h3>
    <div class="involve-items">
      <a target="_blank" href="https://github.com/mavka-ukr" class="involve-item">
        <div class="involve-item-icon">
          <img src="@/assets/images/github-logo.png" alt="GitHub Logo">
        </div>
        <div class="involve-item-name">
          GitHub
        </div>
      </a>
      <a target="_blank" href="https://t.me/diia_lang" class="involve-item">
        <div class="involve-item-icon">
          <img src="@/assets/images/telegram-logo.png"
               alt="Telegram Logo">
        </div>
        <div class="involve-item-name">
          Telegram
        </div>
      </a>
      <a target="_blank" href="https://patreon.com/diia" class="involve-item patreon">
        <div class="involve-item-icon">
          <img src="@/assets/images/patreon-logo.png"
               alt="Patreon Logo">
        </div>
        <div class="involve-item-name">
          Patreon
        </div>
      </a>
    </div>
  </section>
  <section class="get-involved">
    <h3>
      Патрони
    </h3>
    <div class="involve-items">
      <a target="_blank" href="https://www.patreon.com/user/creators?u=11659902" class="involve-item">
        <div class="involve-item-icon round">
          <img src="https://c10.patreonusercontent.com/4/patreon-media/p/user/11659902/ed678cd729024929a91a6e8229351b1a/eyJ3IjoyMDB9/1.jpeg?token-time=2145916800&token-hash=xrbhLpCiQsKf61Dr9SwvLsjjTjdDWaHEgeUtyvrZ8dw%3D" alt="GitHub Logo">
        </div>
        <div class="involve-item-name">
          Joter Glem
        </div>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.get-involved {
  margin-top: 200px;

  h3 {
    text-align: center;

    font-size: 1.5rem;
  }

  .involve-items {
    margin-top: 5rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;

    @media only screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
  }

  .involve-item {
    padding: 1rem;

    text-align: center;

    &-icon {
      img {
        width: 100px;
      }

      &.round {
        img {
          border-radius: 1rem;
        }
      }
    }

    &-name {
      margin-top: 1rem;

      font-size: 1.2rem;
    }
  }
}
</style>
