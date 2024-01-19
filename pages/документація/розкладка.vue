<script setup>
const x = `
бог це Отець() та Син() та Дух("Святий")
`.trim();

useHead({
  title: "Бог | Документація | Мавка"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper prev="/документація/встановлення" next="/документація/перша-програма">
    <h1 class="docs-content-title">Розкладка</h1>

    <p>
      Для апострофа використовується символ <code class="small-code">ʼ</code>.
      Також потрібні символи <code class="small-code">[</code
    ><code class="small-code">]</code>, <code class="small-code">&lt;</code
    ><code class="small-code">&gt;</code> які <span style="font-weight: 500" class="hljs-keyword">є</span> доступними на
      розкладці
      <a
        class="link external"
        href="https://r2u.org.ua/wiki/keyboard/UkrainianUnicode"
        target="_blank"
      >Ukrainian Unicode</a>.
      <br />
      <br />

      Розкладку <a
      class="link external"
      href="https://r2u.org.ua/wiki/keyboard/UkrainianUnicode"
      target="_blank"
    >Ukrainian Unicode</a> можна встановити на всі версії Windows, у т.ч. 10 <span style="font-weight: 500"
                                                                                   class="hljs-keyword">та</span> 11. Її
      можна встановити <span style="font-weight: 500" class="hljs-keyword">і</span> на MacOS. Вона <span
      style="font-weight: 500" class="hljs-keyword">є</span> доступною за
      замовчуванням на
      Linux-дистрибутивах.

      <br />
      <br />

      Після встановлення розкладки, апостроф
      <code class="small-code">ʼ</code> можна надрукувати через
      <code class="small-code">Shift+~</code>;
      <br />
      Сивмол <code class="small-code">[</code> через
      <code class="small-code">AltGr+9</code>;
      <br />
      Сивмол <code class="small-code">]</code> через
      <code class="small-code">AltGr+0</code>;
      <br />
      Сивмол <code class="small-code">&lt;</code> через
      <code class="small-code">AltGr+6</code>;
      <br />
      Сивмол <code class="small-code">&gt;</code> через
      <code class="small-code">AltGr+7</code>.
    </p>
  </UiDocsWrapper>
</template>
