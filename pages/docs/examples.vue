<script setup>
const tgbot = `
підключити_розширення_з_мережі("https://raw.githubusercontent.com/mavka-ukr/tgbot-extension/main/tgbot.m.js")

бот = ТелеграмБот.Бот(токен="-_-")

тривала дія обробити_оновлення(оновлення)
  друк(оновлення)

  якщо оновлення.повідомлення не пусто і оновлення.повідомлення.текст рівно "статистика"
    чекати відповідь = отримати_джсон("https://russianwarship.rip/api/v2/statistics/latest")

    статистика = "
вбитих солдат = %(відповідь.data.stats.personnel_units)
танків = %(відповідь.data.stats.tanks)
бронетехніки = %(відповідь.data.stats.armoured_fighting_vehicles)
артилерії = %(відповідь.data.stats.artillery_systems)
літаків = %(відповідь.data.stats.planes)
гелікоптерів = %(відповідь.data.stats.helicopters)
".обрізати()

    чекати бот.виконати(ТелеграмБот.Методи.НадіслатиПовідомлення(
      ідентифікатор_чату=оновлення.повідомлення.чат.ідентифікатор,
      текст=статистика
    ))
  кінець
кінець

бот.запустити(обробити_оновлення)
`.trim();
</script>

<template>
  <DocsWrapper prev="/docs/extensions" next="/docs/data">
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
    <p>
      Документацію до розширення можна знайти тут:
      <a target="_blank" class="link external" href="https://телеграм-бот.мавка.укр">телеграм-бот.мавка.укр</a>
    </p>
  </DocsWrapper>
</template>
