<script setup lang="ts">
interface File {
  name: string;
  text: string;
  plaintext?: boolean;
}

const props = defineProps<{
  files: File[];
  playButton?: boolean;
  defaultIndex?: number;
}>();

const currentFile = ref<File>(props.files[props.defaultIndex ?? 0]);
</script>

<template>
  <div class="code-window-wrapper">
    <div class="code-window">
      <ClientOnly>
        <highlightjs
          :language="currentFile.plaintext ? 'text' : 'diia'"
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

<style lang="scss">
.code-window-wrapper {
  position: relative;
}

.code-window {
  position: relative;

  background: black;
  padding: 0.5rem;
  padding-top: 2rem;
  border-radius: 1rem;
  box-shadow: var(--code-shadow);

  font-size: 1rem;
  z-index: 1;

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
  z-index: unset;
  box-shadow: var(--code-shadow);

  &::before {
    position: absolute;
    inset: 0;
    background: black;
    content: "";
    border-radius: inherit;
    z-index: 1;
  }

  .code-window-name {
    position: relative;
    z-index: 2;
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: #999;
    font-family: var(--font-family);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

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
