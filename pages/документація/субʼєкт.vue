<script setup>
const simple = `
субʼєкт кіт_моєї_сестри = Кіт(імʼя="Тимофій")
`.trim();

const simpleX = `
число_пі = 3.14
`.trim();

const simpleY = `
нептун це Ракета(...)
паспорт це Документ(...)
лисичка це Гриб(...)
`.trim();

const simpleZ = `
;; визначення субʼєкту
субʼєкт кіт_моєї_сестри = Кіт(імʼя="Тимофій")

;; перевизначення субʼєкту
кіт_моєї_сестри = Кіт(імʼя="Тимофій Молодший")
`.trim();

const simpleM = `
субʼєкт давид

друк(давид є Людина) ;; ні
друк(давид є пусто) ;; так

давид = Людина(прізвище="Когут",
               імʼя="Давид",
               по_батькові="Богданович")

друк(давид є Людина) ;; так
друк(давид є пусто) ;; ні
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
а <<= 2 ;; присвоєння з зсувом вліво
а >>= 2 ;; присвоєння з зсувом вправо
а &= 2 ;; присвоєння з побітовим і
а |= 2 ;; присвоєння з побітовим або
а ^= 2 ;; присвоєння з xor
а **= 2 ;; присвоєння з піднесенням до степеня

а++ ;; присвоєння з додаванням 1 (вертає старе значення)
а-- ;; присвоєння з відніманням 1 (вертає старе значення)
++а ;; присвоєння з додаванням 1 (вертає нове значення)
--а ;; присвоєння з відніманням 1 (вертає нове значення)
`.trim();

useHead({
  title: "Субʼєкт | Документація | Мавка",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/обʼєкт" next="/документація/дія">
    <h1 class="docs-content-title">Субʼєкт</h1>

    <p>
      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span>
      фундаментальним поняттям у <span class="diia-word">Мавці</span>.
    </p>
    <p>
      Сам по собі обʼєкт
      <span style="font-weight: 500" class="hljs-keyword">є</span> пасивним.
    </p>
    <p>
      По цій причині існує
      <span style="font-weight: 500" class="hljs-keyword">субʼєкт</span>.
    </p>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span> тим, хто
      визначає роль обʼєкта
      <span style="font-weight: 500" class="hljs-keyword">та</span> оперує ним.
    </p>
    <p>
      Головним
      <span style="font-weight: 500" class="hljs-keyword">субʼєктом</span>
      <span style="font-weight: 500" class="hljs-keyword"> є </span>
      <span class="diia-word">Мавка</span>.
    </p>
    <!--    <p>Субʼєкт завжди визначає якийсь обʼєкт.</p>-->
    <!--    <p>Субʼєкт є активним елементом.</p>-->
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span> також
      може бути обʼєктом.
    </p>

    <hr />

    <h3 id="створення">Визначення субʼєктів</h3>
    <p>
      <span style="font-weight: 500" class="hljs-keyword">Субʼєкт</span>
      визначається відносно
      <span style="font-weight: 500" class="hljs-keyword"> модуля</span>
      <span style="font-weight: 500" class="hljs-keyword"> або</span>
      <span style="font-weight: 500" class="hljs-keyword"> дії</span>.
    </p>
    <p>
      Існує дві вказівки для визначення
      <span style="font-weight: 500" class="hljs-keyword">субʼєкта</span>. Вони
      за своєю суттю ідентичні.
    </p>
    <h4>Визначення з ключовим словом та значенням</h4>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simple" />
      </ClientOnly>
    </div>
    <h4>Визначення з ключовим словом та без значення</h4>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleM" />
      </ClientOnly>
    </div>
    <h4>Визначення без ключового слова</h4>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleX" />
      </ClientOnly>
    </div>
    <hr />
    <h3 id="створення">Додатково</h3>
    <p>
      Для визначення
      <span style="font-weight: 500" class="hljs-keyword">субʼєктів</span> також
      доступне ключове слово <code>це</code>.
    </p>
    <div class="code-window code-window-full">
      <ClientOnly>
        <highlightjs language="diia" :autodetect="false" :code="simpleY" />
      </ClientOnly>
    </div>
  </UiDocsWrapper>
</template>
