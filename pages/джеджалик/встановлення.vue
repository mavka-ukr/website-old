<script setup>
const version = useState("version", () => "x.y.z");

onMounted(() => {
  if (process.client) {
    fetch(`https://запуск.мавка.укр/список.txt?t=${new Date().getTime()}`)
      .then((r) => r.text())
      .then((t) => t.split("\n")[1])
      .then((v) => (version.value = v));
  }
});

useHead({
  title: "Встановлення | Джеджалик | Мавка",
});

definePageMeta({
  layout: "jj",
});
</script>

<template>
  <UiDocsWrapper prev="/джеджалик" next="/джеджалик/використання">
    <h1 class="docs-content-title">Встановлення</h1>

    <p>
      Щоб встановити <span class="diia-word">Джеджалик</span> вам необхідно мати
      NodeJS 18+.
    </p>
    <UiCodeBlock :files="`npm i -g jejalyk@${version}`" plaintext />
  </UiDocsWrapper>
</template>
