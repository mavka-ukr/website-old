<script setup>
</script>

<template>
  <section class="get-involved">
    <h3>
      Приєднатись до створення
    </h3>
    <div class="involve-items">
      <a target="_blank" href="https://github.com/diia-lang" class="involve-item">
        <div class="involve-item-icon">
          <img src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" alt="GitHub Logo">
        </div>
        <div class="involve-item-name">
          GitHub
        </div>
      </a>
      <a target="_blank" href="https://t.me/diia_lang" class="involve-item">
        <div class="involve-item-icon">
          <img src="https://pnggrid.com/wp-content/uploads/2021/04/telegram-logo-circle-2048x2048.png"
               alt="Telegram Logo">
        </div>
        <div class="involve-item-name">
          Telegram
        </div>
      </a>
      <a target="_blank" href="https://patreon.com/diia" class="involve-item patreon">
        <div class="involve-item-icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Patreon_logo.svg/2048px-Patreon_logo.svg.png"
               alt="Patreon Logo">
        </div>
        <div class="involve-item-name">
          Patreon
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
    }

    &-name {
      margin-top: 1rem;

      font-size: 1.2rem;
    }
  }
}
</style>
