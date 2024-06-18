<script setup>
import UiMaMaLogo from "~/components/UiMaMaLogo.vue";

const releases = ref([]);
const isLoadingReleases = ref(true);
const showAllReleases = ref(false);

const renderedReleases = computed(() => {
  if (showAllReleases.value) {
    return releases.value;
  }
  return releases.value.slice(0, 1);
});

onMounted(() => {
  isLoadingReleases.value = true;
  fetch("https://api.github.com/repos/mavka-ukr/mavka/releases/latest")
    .then((res) => res.json())
    .then((latestRelease) => {
      fetch("https://api.github.com/repos/mavka-ukr/mavka/releases")
        .then((res) => res.json())
        .then((data) => {
          releases.value = data;
          if (data[0] && data[0].id === latestRelease.id) {
            releases.value = data.slice(1);
          }
          releases.value = [latestRelease, ...releases.value];
          isLoadingReleases.value = false;
        });
    });
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
      Завантажте <span class="diia-word">Мавку</span> з таблиці нижче та
      слідуйте за інструкцією зі встановлення у файлі <code>Встановлення</code>.
    </p>
    <template v-if="renderedReleases.length">
      <div class="UiTable">
        <table>
          <template v-for="release in renderedReleases">
            <tr>
              <td style="width: 20%">
                {{ release.name }}
              </td>
              <td style="width: 60%">
                <template v-for="asset in release.assets">
                  <a :href="asset.browser_download_url" class="link external">
                    <span class="material-symbols-rounded bold">download</span>
                    {{ asset.name }}
                  </a>
                </template>
              </td>
              <td style="width: 20%">
                <a
                  target="_blank"
                  :href="release.html_url"
                  class="link external"
                >
                  <span class="material-symbols-rounded bold">code</span>
                  GitHub
                </a>
              </td>
            </tr>
          </template>
          <template v-if="!showAllReleases">
            <tr>
              <td colspan="3" class="td-all">
                <button @click="showAllReleases = true">
                  Показати всі випуски
                </button>
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

<style lang="scss">
.UiTable {
  width: 100%;
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;

  td {
    padding: 0.5rem;
    border: 1px solid var(--border-color);

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
