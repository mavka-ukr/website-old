<script setup>
</script>

<template>
  <section class="get-involved">
    <h2>
      Приєднатись до створення
    </h2>
    <div class="involve-items">
      <a target="_blank" href="https://github.com/kohutd/diia" class="involve-item">
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
    </div>
  </section>
</template>

<style lang="scss">
.get-involved {
  margin-top: 200px;

  h2 {
    text-align: center;
  }

  .involve-items {
    margin-top: 5rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
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
