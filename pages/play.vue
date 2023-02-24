<script setup>
import { Codemirror } from 'vue-codemirror';
import Mavka from "mavka";
import { basicSetup } from "codemirror";

const code = ref(`друк("привіт, світ!")`);
const extensions = [basicSetup];

const history = ref([]);

function log(value) {
  history.value = [...history.value, value];
}

function buildGlobalContext(mavka) {
  return new mavka.Context(mavka, null, {
    "друк": new mavka.JsFunctionCell(mavka, (args) => log(
        ...args
            .map((arg) => mavka.toCell(arg).asString().asJsString())
    )),
  });
}

function buildLoader(mavka) {
  return null;
}

function buildExternal(mavka) {
  return {};
}

const mavka = new Mavka({
  buildGlobalContext,
  buildLoader,
  buildExternal
});

async function run() {
  try {
    const mainContext = new mavka.Context(mavka, mavka.context);
    mainContext.setAsync(true);

    await mavka.eval(code.value, mainContext);
  } catch (e) {
    if (e instanceof Error) {
      log(e.message);
    } else if (typeof e === "string") {
      log(e);
    } else if (e instanceof mavka.ThrowValue) {
      log(e.value);
    } else {
      log(String(e));
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
          placeholder="старт.м"
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
