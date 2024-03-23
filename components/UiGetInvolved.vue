<script setup></script>

<template>
  <section class="get-involved">
    <h3 id="get-involved">Офіційні посилання</h3>
    <div class="involve-items">
      <a
        target="_blank"
        href="https://github.com/mavka-ukr"
        class="involve-item"
      >
        <div class="involve-item-icon">
          <img src="@/assets/images/github-logo.png" alt="GitHub Logo" />
        </div>
        <div class="involve-item-name">Ґітхаб</div>
      </a>
      <a target="_blank" href="https://t.me/mavka_lang" class="involve-item">
        <div class="involve-item-icon">
          <img src="@/assets/images/telegram-logo.png" alt="Telegram Logo" />
        </div>
        <div class="involve-item-name">Телеграм</div>
      </a>
      <a
        target="_blank"
        href="https://discord.gg/q53ADmPqFU"
        class="involve-item"
      >
        <div class="involve-item-icon">
          <img src="@/assets/images/discord-logo.png" alt="Discord Logo" />
        </div>
        <div class="involve-item-name">Дискорд</div>
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/@MavkaUkr"
        class="involve-item youtube"
      >
        <div class="involve-item-icon">
          <img src="@/assets/images/youtube.png" alt="YouTube Logo" />
        </div>
        <div class="involve-item-name">Ютуб</div>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.get-involved {
  margin-top: 100px;

  h3 {
    text-align: center;

    font-size: 1.5rem;
  }

  .involve-items {
    margin-top: 5rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
