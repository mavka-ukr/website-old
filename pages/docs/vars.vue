<script setup>
const simple = `
а = 1
`.trim();

const other = `
рядок_з_пісні = "їхав козак за дунай..."

корінь_2 = М.корінь(2)

ракета_нептун = Ракета(назва="Нептун")
`.trim();

const visibility = `
а = 1

дія тест()
  б = 2

  друк(а + б) ;; видасть "3", бо "а" і "б" є видимі в цьому блоці
кінець

друк(а + б) ;; видасть помилку, бо "б" недоступна поза блоком дії "тест"
`.trim();

const setting = `
а = 1

дія встановити_а()
  а = 2
кінець

встановити_а()

друк(а) ;; 1
`.trim();

const settingUp = `
а = 1

дія встановити_а()
  а := 2
кінець

встановити_а()

друк(а) ;; 2
`.trim();

const list = `
а = 1 ;; звичайне присвоєння

а := 2 ;; присвоєння в контексті вище
а += 2 ;; присвоєння з додаванням
а -= 2 ;; присвоєння з відніманням
а *= 2 ;; присвоєння з множенням
а /= 2 ;; присвоєння з діленням
а %= 2 ;; присвоєння з діленням за модулем
а //= 2 ;; присвоєння з діленням за часткою
а ^= 2 ;; присвоєння з xor
а **= 2 ;; присвоєння з піднесенням до степеня

а++ ;; присвоєння з додаванням 1 (вертає старе значення)
а-- ;; присвоєння з відніманням 1 (вертає старе значення)
++а ;; присвоєння з додаванням 1 (вертає нове значення)
--а ;; присвоєння з відніманням 1 (вертає нове значення)
`.trim();
</script>

<template>
  <DocsWrapper prev="/docs/install" next="/docs/data-types">
    <h1 class="docs-content-title">
      Змінні
    </h1>

    <p>
      Оголосити змінну або присвоїти їй значення можна так:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
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
            :autodetect="false"
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
            :autodetect="false"
            :code="visibility"
        />
      </ClientOnly>
    </div>
    <p>
      Присвоєння змінної відбувається в найближчому контексті:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="setting"
        />
      </ClientOnly>
    </div>
    <p>
      Щоб присвоїти значення змінної в контексті вище, потрібно використовувати оператор <code>:=</code>:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="settingUp"
        />
      </ClientOnly>
    </div>
    <p>
      Список доступних операторів присвоєння:
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs
            language="diia"
            :autodetect="false"
            :code="list"
        />
      </ClientOnly>
    </div>
  </DocsWrapper>
</template>
