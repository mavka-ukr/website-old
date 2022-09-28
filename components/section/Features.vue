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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, repudiandae?
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, repudiandae?
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, repudiandae?
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
