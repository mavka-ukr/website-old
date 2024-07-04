<template>
  <div class="section-atom"></div>
  <div class="section-atom-credit">
    Фото: Urquhart JS, et al.; Robert Hurt, the Spitzer Science Center; Robert
    Benjamin
  </div>
</template>

<style lang="scss">
.section-atom {
  margin-top: 10rem;
  width: calc(100% + 10rem);
  margin-left: -5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: black;
  background-image: url("@/assets/images/atom.png");
  min-height: 120vh;
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 250%;
  cursor: none;

  @supports (background-attachment: fixed) {
    background-attachment: fixed;
  }

  @media only screen and (max-device-width: 700px) {
    background-size: 600%;
  }
}

.section-atom-credit {
  font-size: 0.8rem;
  text-align: right;
  margin-top: 1rem;
  color: var(--border-color);
  transition: all 125ms ease-in-out;

  &:hover {
    color: var(--text-color);
  }
}
</style>
