<script setup>
const tgbot = `
підключити_розширення_з_мережі("https://мавка.укр/e/tgbot.js")

бот = ТелеграмБот.Бот(токен="ВАШ_ТОКЕН")

тривала дія обробити_оновлення(оновлення)
  якщо оновлення.повідомлення.текст == "статистика"
    чекати відповідь = отримати_джсон("https://russianwarship.rip/api/v2/statistics/latest")

    вбитих_солдат = відповідь.data.stats.personnel_units
    танків = відповідь.data.stats.tanks
    бронетехніки = відповідь.data.stats.armoured_fighting_vehicles
    артилерії = відповідь.data.stats.artillery_systems
    літаків = відповідь.data.stats.planes
    гелікоптерів = відповідь.data.stats.helicopters

    чекати бот.надіслати(ТелеграмБот.Повідомлення(
      оновлення.повідомлення.чат.айді,
      з'єднати_рядки(Список(
        "вбитих_солдат = %(вбитих_солдат)",
        "танків = %(танків)",
        "бронетехніки = %(бронетехніки)",
        "артилерії = %(артилерії)",
        "літаків = %(літаків)",
        "гелікоптерів = %(гелікоптерів)"
      ))
    ))
  кінець
кінець

бот.слухати(обробити_оновлення)
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
      Цей бот надсилає статистику війни за сьогодні, якщо користувач напише "статистика" в чаті:
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
