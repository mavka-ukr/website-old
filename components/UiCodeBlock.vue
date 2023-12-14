<script setup lang="ts">
interface File {
  name: string;
  text: string;
  plaintext?: boolean;
  language?: string;
}

const props = defineProps<{
  files: File[] | string;
  playButton?: boolean;
  defaultIndex?: number;
  plaintext?: boolean;
  language?: string;
}>();

const currentFile = ref<File>();

watch(
  () => props.files,
  () => {
    if (typeof props.files === "object") {
      currentFile.value = props.files[props.defaultIndex ?? 0];
    } else {
      currentFile.value = {
        name: "default",
        text: props.files
      };
    }
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<template>
  <ClientOnly>
    <tempalte v-if="currentFile">
      <template v-if="typeof files === 'object'">
        <div style="display: block; height: 0.5rem"></div>
        <div class="code-window-wrapper">
          <div class="code-window">
            <highlightjs
              :language="currentFile.language ? currentFile.language : (language ? language : (plaintext || currentFile.plaintext ? 'plaintext' : 'diia'))"
              :autodetect="false"
              :code="currentFile.text"
            />

            <template v-if="playButton">
              <div class="code-window-buttons">
                <a
                  href="https://бавитись.мавка.укр"
                  target="_blank"
                  class="button play-button"
                >
                  <img src="../assets/emoji/play-button.png" alt="" /> Бавитись
                </a>
              </div>
            </template>
          </div>

          <div class="code-window-names">
            <template v-for="file in files">
              <button
                @click="currentFile = file"
                class="code-window-name"
                :class="{
                  'code-window-name-active': currentFile.name === file.name,
                }"
              >
                {{ file.name }}
              </button>
            </template>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="code-window code-window-full">
          <highlightjs
            :language="currentFile.language ? currentFile.language : (language ? language : (plaintext || currentFile.plaintext ? 'plaintext' : 'diia'))"
            :autodetect="false"
            :code="currentFile.text"
          />
        </div>
      </template>
    </tempalte>
  </ClientOnly>
</template>

<style lang="scss"></style>
