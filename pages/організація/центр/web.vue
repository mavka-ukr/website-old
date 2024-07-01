<script setup>
useHead({
  title: "ЦентрʼWeb | Організація | Мавка",
});

definePageMeta({
  layout: "org",
});
</script>

<template>
  <UiDocsWrapper
    prev="/організація/центр/цілі"
    next="/організація/учасники/БДКП"
  >
    <h1 class="docs-content-title">ЦентрʼWeb</h1>

    <p>
      <span class="diia-word">ЦентрʼWeb</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span>
      <span class="diia-word"> Центр ОМ</span>, що відповідає за web-сервіси
      <span style="font-weight: 500" class="hljs-keyword"> та </span>
      web-інфраструктуру <span class="diia-word">Мавки</span>.
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
        <span class="diia-word">Проектʼ1</span>:
        <a target="_blank" class="link external" href="https://мавка.укр">
          мавка.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ2</span>:
        <a target="_blank" class="link external" href="https://я.мавка.укр"
          >я.мавка.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ4</span>:
        <a target="_blank" class="link external" href="https://ціль.укр"
          >ціль.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ3</span>:
        <a target="_blank" class="link external" href="https://фрагмент.укр"
          >фрагмент.укр</a
        >
      </li>
      <li>
        <span class="diia-word">Проектʼ5</span>:
        <a target="_blank" class="link external" href="https://пак.укр"
          >пак.укр</a
        >
      </li>
      <li v-if="false">
        <span class="diia-word">Проектʼ6</span>:
        <a target="_blank" class="link external" href="https://писанка.укр"
          >писанка.укр</a
        >
        (в розробці)
      </li>
      <li>
        <span class="diia-word">Проектʼ7</span>:
        <a target="_blank" class="link external" href="https://конкурс.укр"
          >конкурс.укр</a
        >
      </li>
    </ul>
  </UiDocsWrapper>
</template>
