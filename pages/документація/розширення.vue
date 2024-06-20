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
      Для розробки таких розширень вам необхідно мати втановленими
      <span class="diia-word">Ціль</span>
      й Clang/Zig.
    </p>
    <p>
      <span class="diia-word">Розширення Мавки</span> наразі експериментальні й
      можуть мінятись від версії до версії.
    </p>
    <p>Приклад розширення можна завантажити нижче:</p>
    <div class="UiTable">
      <table>
        <tr>
          <th>Версія</th>
          <th>Файли</th>
        </tr>
        <tr>
          <td>РМв1</td>
          <td>
            <div>
              <a
                :href="`/завантажити/РМв1/приклад-РМв1.zip`"
                class="link external"
              >
                <span class="material-symbols-rounded bold">download</span>
                приклад-РМв1.zip
              </a>
            </div>
          </td>
        </tr>
      </table>
    </div>
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
