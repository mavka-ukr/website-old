<template>
  <div class="section-atom">
    <img src="@/assets/images/atom.png" alt="" />
  </div>
</template>

<style lang="scss">
.section-atom {
  margin-top: 10rem;
  width: calc(100% + 2rem);
  margin-left: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: black;
  @at-root html.cs-light & {
    box-shadow: var(--code-shadow);
  }

  cursor: none;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    transform: scale(1.5);
    //animation: turn-image 500s linear infinite;

    @keyframes turn-image {
      100% {
        transform: scale(1.5) rotate(1turn);
      }
    }
  }
}
</style>
