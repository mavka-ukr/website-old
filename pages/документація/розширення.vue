<script setup>
useHead({
  title: "Розширення | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/мрм" next="/документація/вступ-до-теорії">
    <h1 class="docs-content-title">Розширення</h1>

    <p>
      <span class="diia-word">Мавка</span> має можливість розширення за
      допомогою <span class="diia-word">Цілі</span>.
    </p>
    <p>
      Такі розширення компілюються в машинний код, а виконання їх коду зазвичай
      працює швидше ніж <span class="diia-word">МаМа</span>.
    </p>
    <p>
      Для розробки таких розширень вам необхідно мати встановленою
      <span class="diia-word">Ціль</span>.
    </p>
    <p>
      <span class="diia-word">Розширення Мавки</span> наразі експериментальні й
      можуть мінятись від версії до версії.
    </p>
    <p>
      Приклад розширення можна завантажити з таблиці на сторінці
      <NuxtLink
        :href="encodeURI('/документація/встановлення')"
        class="link external"
        >Встановлення</NuxtLink
      >.
    </p>
  </UiDocsWrapper>
</template>

<style lang="scss" scoped>
.UiTable {
  width: 100%;
  overflow: auto;
}

table {
  margin-top: 1rem;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  td,
  th {
    padding: 0.5rem;
    text-align: center;
    border: 1px solid var(--border-color);

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a {
      font-size: 1rem;

      display: flex;
      align-items: center;

      .material-symbols-rounded {
        font-size: 1rem;
        margin-right: 0.5rem;
      }
    }

    a + a {
      margin-top: 0.5rem;
    }
  }

  .td-all {
    padding: 0;

    button {
      width: 100%;
      padding: 0.5rem;
      background-color: var(--background-color);
      color: var(--text-color);
      border: none;
      cursor: pointer;
      font-size: 0.9rem;

      &:hover {
        background-color: var(--background-color-hover);
      }
    }
  }
}
</style>
