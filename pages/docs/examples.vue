<script setup>
const tgbotPak = `
пак додати "https://github.com/kohutd/diia-telegram-bot" телеграм_бот
`.trim();

const tgbot = `
взяти пак:телеграм_бот як тб

бот = тб.Бот(токен: "...")

дія відповісти_на_старт(повідомлення)
  бот.надіслати(повідомлення.чат.айді, тб.Повідомлення(
    текст: "Розпочнемо!",
  ))
кінець

бот.команда("start", відповісти_на_старт)

бот.запустити()
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Приклади
    </h1>

    <p>
      <b>Телеграм-бот</b>
    </p>
    <p>
      Додайте пакет до проєкту:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="bash"
            :autodetect="false"
            :code="tgbotPak"
        />
      </ClientOnly>
    </div>
    <p>
      Приклад бота:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="tgbot"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
