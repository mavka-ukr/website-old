<script setup>
const a = `
js "
const mavka = getMavka();
const context = getContext();

const $app = document.getElementById('app');

context.set('показати_картинку', mavka.makeWrappedProxyFunction(([url]) => {
  const $img = document.createElement('img');
  $img.src = url;
  $img.style.width = '250px';
  $app.appendChild($img);
}));
"

показати_картинку("https://мавка.укр/favicon.ico")

показати_вітрину()
`.trim();
</script>

<template>
  <DocsWrapper prev="/docs/extensions" next="/docs/examples">
    <h1 class="docs-content-title">
      Вітрини
    </h1>

    <p>
      Вітрина дозволяє запускати код Мавки у вікні переглядача з усім доступом до його API. Іншими словами, вітрина - це
      вебсайт Мавкою.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            :language="'diia'"
            :autodetect="false"
            :code="a"
        />
      </ClientOnly>
    </div>
    <p>
      Код вище можна скопіювати в проєкт на гральному майданчику і запустити.
    </p>
    <hr>
    <blockquote>
      УВАГА: вітрини працюють лише на гральному майданчику
    </blockquote>
  </DocsWrapper>
</template>
