<script setup>
import { Codemirror } from 'vue-codemirror';
import Diia from "diia";

const code = ref(`друк("привіт, світ!")`);
const extensions = [];

const history = ref([]);

function log(value) {
  history.value = [...history.value, value];
}

function buildGlobalContext(diia) {
  return new diia.Context(diia, null, {
    "друк": new diia.JsFunctionCell(diia, (args) => log(
        ...args
            .map((arg) => diia.toCell(arg).asString().asJsString())
    )),
  });
}

function buildLoader(diia) {
  return null;
}

function buildExternal(diia) {
  return {};
}

const diia = new Diia({
  buildGlobalContext,
  buildLoader,
  buildExternal
});

function run() {
  try {
    diia.eval(code.value);
  } catch (e) {
    if (e instanceof Error) {
      log(e.message);
    } else if (typeof e === "string") {
      log(e);
    } else {
      log(e);
    }
  }
}
</script>

<template>
  <main class="container">
    <NavigationBar />

    <div class="play-container">
      <codemirror
          v-model="code"
          placeholder="головна.дія"
          :style="{ height: '400px' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="extensions"
      />

      <div class="play-container-button">
        <button class="button" @click="run">Запустити</button>
      </div>

      <div class="play-container-history">
        <template v-for="line in [...history].reverse()">
          <div class="play-container-history-line">{{ line }}</div>
        </template>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.play-container {
  margin-top: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 4px;
  border: 1px solid #eee;
}

.play-container-button {
  border-top: 1px solid #eee;
  padding: 1rem;
}

.play-container-history-line {
  padding: 1rem;

  border-top: 1px solid #eee;
}
</style>
