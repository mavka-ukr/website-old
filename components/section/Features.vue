<template>
  <section class="features">
    <div class="feature">
      <div class="feature-icon">
        🙃
      </div>
      <div class="feature-name">
        Проста
      </div>
      <div class="feature-description">
        Синтаксис Дії може лекго зрозуміти навіть школяр в початковій школі.
      </div>
    </div>
    <div class="feature">
      <div class="feature-icon">
        🤤
      </div>
      <div class="feature-name">
        Швидка
      </div>
      <div class="feature-description">
        Завдяки реалізації, Дія є досить швидкою інтерпретованою мовою.
      </div>
    </div>
    <div class="feature">
      <div class="feature-icon">
        😦
      </div>
      <div class="feature-name">
        Потужна
      </div>
      <div class="feature-description">
        Простота мови дозволяє вирішувати складні та великі задачі легко і зручно.
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.features {
  margin-top: 100px;
  margin-bottom: 100px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: 956px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}

.feature {
  text-align: center;
}

.feature-name {
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1.2rem;
}

.feature-description {
  margin-top: 1rem;
  color: #444444;
}

.feature-icon {
  font-size: 4rem;
}
</style>
