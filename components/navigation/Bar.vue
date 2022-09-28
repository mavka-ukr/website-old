<template>
  <div class="navbar">
    <div class="logo">
      <div class="logo-image">
        <img src="@/assets/images/logo-light.png" alt="">
      </div>
      Дія
    </div>
    <div class="links">
      <a class="link" href="/play">Грати</a>
      <a class="link" href="/packages">Пакунки</a>
      <a class="link" href="/packages">Спільнота</a>
    </div>
    <div class="buttons">
      <button class="button">
        Документація
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  display: grid;
  grid-template-areas: "logo links buttons";

  height: 80px;

  .logo {
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .links {
    grid-area: links;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons {
    grid-area: buttons;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.logo {
  font-size: 1.4rem;
  font-weight: 500;

  cursor: pointer;

  &-image {
    margin-right: 1rem;

    width: 2rem;
    height: 2rem;

    img {
      width: inherit;
      height: inherit;

      object-fit: contain;
    }
  }
}

.links {
  .link {
    font-size: .95rem;
    text-decoration: none;
    color: black;
  }

  .link + .link {
    margin-left: 1rem;
  }
}

.button {
  background: black;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: .6rem;
  cursor: pointer;
}
</style>
