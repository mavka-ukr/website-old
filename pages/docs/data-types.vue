<script setup>
const number = `
1

3.14

0шААББВВ

0д0110101

-2
`.trim();

const string = `
"є"

"їхав козак за дунай..."
`.trim();

const logical = `
так

ні
`.trim();

const array = `
[1, 2, 3]

["а", 3.14]
`.trim();

const voidity = `
пусто
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Типи даних
    </h1>

    <p>
      Існують такі типи даних:
    </p>
    <ul>
      <li><code>число</code></li>
      <li><code>рядок</code></li>
      <li><code>логічне</code></li>
      <li><code>масив</code></li>
      <li><code>пусто</code></li>
    </ul>
    <p>
      <b>число:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="number"
        />
      </ClientOnly>
    </div>
    <p>
      <b>рядок:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="string"
        />
      </ClientOnly>
    </div>
    <p>
      <b>логічне:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="logical"
        />
      </ClientOnly>
    </div>
    <p>
      <b>масив:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="array"
        />
      </ClientOnly>
    </div>
    <p>
      <b>пусто:</b>
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="voidity"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>

<style lang="scss">
code {
  padding: .2rem .5rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
}

ul {
  li {
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
