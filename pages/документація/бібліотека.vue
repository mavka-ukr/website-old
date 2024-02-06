<script setup>
const example = `
взяти М [ПІ]

друк(ПІ)
`.trim();

useHead({
  title: "Бібліотека | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/чародія" next="/документація/математика">
    <div class="docs-content-logo">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1063_39" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="500"
              height="500">
          <rect y="500" width="500" height="500" transform="rotate(-90 0 500)" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1063_39)">
          <rect x="-249.749" y="250.252" width="353.199" height="353.199" transform="rotate(-45 -249.749 250.252)"
                fill="black" />
          <rect x="0.000488281" y="499.999" width="353.199" height="353.199" transform="rotate(-45 0.000488281 499.999)"
                fill="#B3271A" />
          <rect x="249.75" y="250.25" width="353.199" height="353.199" transform="rotate(-45 249.75 250.25)"
                fill="#F3D74B" />
          <rect x="0.000976562" y="0.500732" width="353.199" height="353.199"
                transform="rotate(-45 0.000976562 0.500732)"
                fill="#375BB6" />
          <rect x="222.092" y="603.449" width="99.9294" height="297.885" transform="rotate(-135 222.092 603.449)"
                fill="#B3271A" />
          <rect x="602.949" y="277.908" width="99.2949" height="297.885" transform="rotate(135 602.949 277.908)"
                fill="#F3D74B" />
          <rect x="277.407" y="-102.948" width="99.2949" height="297.885" transform="rotate(45 277.407 -102.948)"
                fill="#375BB6" />
          <rect x="-103.45" y="222.594" width="99.2949" height="297.885" transform="rotate(-45 -103.45 222.594)"
                fill="black" />
        </g>
        <mask id="mask1_1063_39" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="500"
              height="500">
          <rect y="500" width="500" height="500" transform="rotate(-90 0 500)" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask1_1063_39)">
        </g>
      </svg>
    </div>
    <h1 class="docs-content-title">Бібліотека Мавки</h1>
    <p>
      <span class="diia-word">Бібліотека Мавки</span> <span style="font-weight: 500" class="hljs-keyword">це</span>
      набір вбудованих <span style="font-weight: 500" class="hljs-keyword">модулів</span>, які можна <span
      style="font-weight: 500" class="hljs-keyword">взяти</span> без
      додаткового завантаження.
    </p>
    <hr>
    <h3>Список модулів Бібліотеки</h3>
    <ul>
      <li>
        <NuxtLink class="link external" :href="encodeURI('/документація/математика')">
          <code>М</code>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link external" :href="encodeURI('/документація/дід')">
          <code>дід</code>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link external" :href="encodeURI('/документація/сервер')">
          <code>сервер</code>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link external" :href="encodeURI('/документація/запит')">
          <code>запит</code>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link external" :href="encodeURI('/документація/фс')">
          <code>фс</code>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link external" :href="encodeURI('/документація/json')">
          <code>json</code>
        </NuxtLink>
      </li>
    </ul>
    <hr>
    <h3>Приклад</h3>
    <UiCodeBlock :files="example" />
  </UiDocsWrapper>
</template>
