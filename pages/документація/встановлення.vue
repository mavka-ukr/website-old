<script setup>
const versions = ref([]);
const selectedVersionIndex = ref(0);

const selectedVersion = computed(() => {
  return versions.value[selectedVersionIndex.value];
});

onMounted(() => {
  if (process.client) {
    fetch("/завантажити/версії.json", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        versions.value = data;
      });
  }
});

useHead({
  title: "Встановлення | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація" next="/документація/розкладка">
    <h1 class="docs-content-title">Встановлення</h1>
    <p>
      Завантажити готову <span class="diia-word">Мавку</span> можна з таблиці
      нижче.
    </p>
    <p>
      Ви також можете збудувати <span class="diia-word">Мавку</span> власноруч
      для вашої платформи. Для цього завантажте
      <span class="diia-word">Код Мавки</span> з таблиці нижче
      <span style="font-weight: 500" class="hljs-keyword"> та</span> ознайомтесь
      з інструкцією з будування <span class="diia-word">Мавки</span>.
    </p>
    <select
      v-if="versions.length"
      v-model="selectedVersionIndex"
      name="version"
      id="version"
    >
      <template v-for="(version, i) in versions">
        <option :value="i">{{ version.name }}</option>
      </template>
    </select>
    <template v-if="selectedVersion">
      <div class="UiTable">
        <table>
          <tr>
            <th>Файли</th>
          </tr>
          <template v-for="file in selectedVersion.files">
            <tr>
              <td>
                <a
                  :href="`/завантажити/${selectedVersion.name}/${file}`"
                  class="link external"
                >
                  <span class="material-symbols-rounded bold">download</span>
                  {{ file }}
                </a>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </template>
    <template v-else>
      <blockquote>Завантаження....</blockquote>
    </template>
  </UiDocsWrapper>
</template>

<style lang="scss" scoped>
.UiTable {
  width: 100%;
  overflow: auto;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  background-color: transparent;
  color: var(--text-color);
}

table {
  margin-top: 1rem;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid var(--border-color);

  td,
  th {
    padding: 0.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

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

  tr + tr {
    border-top: 1px solid var(--border-color);
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
