<template>
  <main class="container">
    <UiNavbar />

    <div class="ui-cyrillic-page">
      <img src="@/assets/images/tools/cyrrilic-2.png" alt="" />
      <a
        class="link external"
        href="https://github.com/mavka-ukr/english-cyrillic"
        target="_blank"
      >
        Готується.
      </a>
    </div>

    <UiFooter />
  </main>
</template>

<style lang="scss">
.ui-cyrillic-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 65vh;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }

  a {
    font-size: 1.25rem;
    font-weight: 400;
    margin: 1rem 0;
  }
}
</style>
