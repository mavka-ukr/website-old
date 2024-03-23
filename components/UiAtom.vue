<template>
  <div class="section-atom">
    <img src="@/assets/images/atom.png" alt="" />
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
  background: black;
  @at-root html.cs-light & {
    box-shadow: var(--code-shadow);
  }
  rotate: -1deg;

  cursor: none;

  img {
    width: 100vw;
    height: calc(100vh + 5rem);
    object-fit: cover;
    transform: scale(1.5);
    rotate: 1deg;
    //animation: turn-image 500s linear infinite;

    @keyframes turn-image {
      100% {
        transform: scale(1.5) rotate(1turn);
      }
    }
  }
}
</style>
