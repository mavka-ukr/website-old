<template>
  <section class="build-with">
    <div class="bwb">
      <div class="bwb-title">
        Консольні програми
      </div>
      <div class="bwb-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam architecto, blanditiis ipsum molestias
        recusandae unde. Adipisci, consequatur, obcaecati.
      </div>
      <div class="bwb-icon">
        🖥️
      </div>
    </div>
    <div class="bwb">
      <div class="bwb-title">
        Веб-сайти
      </div>
      <div class="bwb-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam architecto, blanditiis ipsum molestias
        recusandae unde. Adipisci, consequatur, obcaecati.
      </div>
    </div>
    <div class="bwb">
      <div class="bwb-title">
        Мобільні додатки
      </div>
      <div class="bwb-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam architecto, blanditiis ipsum molestias
        recusandae unde. Adipisci, consequatur, obcaecati.
      </div>
    </div>
    <div class="bwb">
      <div class="bwb-title">
        Вбудовані рішення
      </div>
      <div class="bwb-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam architecto, blanditiis ipsum molestias
        recusandae unde. Adipisci, consequatur, obcaecati.
      </div>
    </div>
    <div class="bwb">
      <div class="bwb-title">
        Вбудовані рішення
      </div>
      <div class="bwb-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam architecto, blanditiis ipsum molestias
        recusandae unde. Adipisci, consequatur, obcaecati.
      </div>
    </div>
    <div class="bwb">
      <div class="bwb-title">
        Вбудовані рішення
      </div>
      <div class="bwb-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam architecto, blanditiis ipsum molestias
        recusandae unde. Adipisci, consequatur, obcaecati.
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.build-with {
  margin-top: 200px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media only screen and (max-width: 956px) {
    grid-template-columns: 1fr;
  }
}

.bwb {
  position: relative;

  padding: 2rem;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;
  border-radius: 1rem;

  color: white;

  text-align: center;

  &-title {
    font-size: 3rem;
    font-weight: bold;
    line-height: .6;
    opacity: .8;

    color: #9d3425;
    z-index: 1;
  }

  &-description {
    margin-top: 2rem;
    z-index: 1;
  }

  &-icon {
    position: absolute;
    font-size: 10rem;
    filter: grayscale(1);
    opacity: .5;
    z-index: 0;
    left: -50%;
    display: none;
  }
}
</style>
