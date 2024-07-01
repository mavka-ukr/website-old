<script setup>
useHead({
  title: "ЦентрʼЦілі | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper prev="/організація/центр/мама" next="/організація/центр/web">
    <h1 class="docs-content-title">ЦентрʼЦілі</h1>

    <p>
      <span class="diia-word">ЦентрʼЦілі</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span>
      <span class="diia-word"> Центр ОМ</span>, що відповідає за все, що
      повʼязано з мовою програмування <span class="diia-word">Ціль</span>.
    </p>
    <p>
      <span class="diia-word">Секретар</span> цього
      <span class="diia-word">Центру</span> на даний момент
      <span style="font-weight: 500" class="hljs-keyword"> це </span>
      Богданович Давид Когут Прихожденко (<span class="diia-word"
        >Учасникʼ0</span
      >).
    </p>
    <p>
      <span class="diia-word">Учасники</span> цього
      <span class="diia-word">Центру</span>:
    </p>
    <ul>
      <li>
        <NuxtLink :to="encodeURI('/організація/учасник/0')" class="link">
          <span class="diia-word">Учасникʼ0</span>: Богданович Давид Когут
          Прихожденко
        </NuxtLink>
      </li>
    </ul>
    <p>
      <span class="diia-word">Проекти</span> цього
      <span class="diia-word">Центру</span>:
    </p>
    <ul>
      <li>
        <span class="diia-word">Проектʼ20</span>: Мова програмування
        <span class="diia-word">Ціль</span>
      </li>
      <li>
        <span class="diia-word">Проектʼ21</span>: Компілятор
        <span class="diia-word">Цілі</span>
      </li>
    </ul>
  </UiDocsWrapper>
</template>
