<template>
  <section class="quote">
    <div class="quote-text">
      <a target="_blank" href="https://github.com/kohutd">Я</a>
      вірю, що кожен українець має право використовувати зрозумілі йому інструменти в щоденному житті.
      Якщо вам здається, що це жарт - подивіться на себе в дзеркало. Це не жарт.
    </div>
  </section>
</template>

<style lang="scss">
.quote {
  margin-top: 200px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  &-text {
    font-size: 1.5rem;

    padding: 0 1rem;

    max-width: 60ch;

    font-style: italic;

    font-family: 'Gentium Book Plus', serif;
  }

  &-author {
    margin-top: 1rem;

    font-style: italic;
  }
}
</style>
