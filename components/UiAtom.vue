<template>
  <div class="section-atom">
    <!--    <img src="@/assets/images/atom.png" alt="" />-->
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
</style>
