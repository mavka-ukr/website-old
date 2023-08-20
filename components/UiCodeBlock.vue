<script setup lang="ts">
interface File {
  name: string;
  text: string;
}

const props = defineProps<{
  files: File[];
  playButton?: boolean;
  defaultIndex?: number;
}>();

const currentFile = ref<File>(props.files[props.defaultIndex ?? 0]);
</script>

<template>
  <div class="code-window">
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

    <ClientOnly>
      <highlightjs
        language="diia"
        :autodetect="false"
        :code="currentFile.text"
      />
    </ClientOnly>

    <template v-if="playButton">
      <div class="code-window-buttons">
        <a
          href="https://бавитись.мавка.укр"
          target="_blank"
          class="button play-button"
        >
          <img src="@/assets/emoji/play_button.png" alt="" /> Бавитись
        </a>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.code-window {
  position: relative;

  background: black;
  padding: 0.5rem;
  padding-top: 2rem;
  border-radius: 1rem;
  box-shadow: var(--code-shadow);

  font-size: 1rem;

  &-buttons {
    margin-top: 0.5rem;

    display: flex;

    .button {
      font-size: 0.8rem;

      display: flex;
      align-items: center;

      img {
        margin-right: 0.33rem;
        height: 1em;
      }
    }
  }

  pre {
    margin: 0;

    overflow-x: auto;
  }
}

.code-window-names {
  position: absolute;
  display: flex;
  top: -0.5rem;
  background: black;
  padding: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  left: 0;
  box-shadow: var(--code-shadow);

  .code-window-name {
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: #999;
    font-family: var(--font-family);

    &-active {
      background: #9d3425;
      color: var(--bg-color);
    }
  }
}

.hljs {
  max-width: 446px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.code-window-full {
  padding-top: 0.5rem;
  .hljs {
    max-width: 100% !important;
  }
}
</style>
