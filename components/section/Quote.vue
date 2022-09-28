<template>
  <section class="quote">
    <div class="quote-text">
      Якщо вам здалось, що це жарт - подивіться на себе в дзеркало. Це не жарт.
    </div>
    <div class="quote-author">
      Когут Давид
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
    font-size: 1.2rem;

    max-width: 60ch;
  }

  &-author {
    margin-top: 1rem;

    font-style: italic;
  }
}
</style>
