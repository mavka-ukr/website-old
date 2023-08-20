<template>
  <main class="container">
    <UiNavbar />

    <div class="ui-layout-page">
      <img src="@/assets/images/tools/layout.png" alt="" />
      <h2>Готується.</h2>
    </div>

    <UiFooter />
  </main>
</template>

<style lang="scss">
.ui-layout-page {
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

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
  }
}
</style>
