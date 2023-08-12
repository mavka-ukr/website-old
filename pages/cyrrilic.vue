<template>
  <main class="container">
    <NavigationBar/>

    <div class="ui-cyrillic-page">
      <img src="@/assets/images/tools/cyrrilic.png" alt=""/>
      <a class="link external" href="https://github.com/mavka-ukr/english-cyrillic" target="_blank">
        Готується.
      </a>
    </div>

    <SectionFooter/>
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
