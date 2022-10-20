<script setup>
const simple = `
а = 1
`.trim();

const other = `
рядок_з_пісні = "їхав козак за дунай..."

корінь_2 = М.корінь(2)

ракета_нептун = Ракета(назва: "нептун")
`.trim();

const visibility = `
а = 1

дія тест()
  б = 2

  друк(а + б) ''' видасть "3", бо "а" і "б" є видимі в цьому блоці
кінець

друк(а + б) ''' видасть помилку, бо "б" недоступна поза блоком дії "тест"
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Змінні
    </h1>

    <p>
      Є лише один спосіб оголошення та присвоєння змінної:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :code="simple"
        />
      </ClientOnly>
    </div>
    <p>
      Інші приклади оголошення змінної:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :code="other"
        />
      </ClientOnly>
    </div>
    <p>
      Область видимості змінної завжди відносно блоку в якому вона оголошена:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :code="visibility"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
