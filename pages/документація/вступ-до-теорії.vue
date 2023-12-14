<script setup>
useHead({
  title: "Вступ до Теорії | Документація | Мавка"
});

const inyan = `
душа = Тіло()
темрява = Світло()
смерть = Життя()
кінець = Початок()
ніщо = Все()
`.trim();

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/розширення"
    next="/документація/інструкція"
  >
    <div class="docs-content-logo">
      <svg
        class="logo-light"
        viewBox="0 0 501 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="309.683"
          y="500.36"
          width="118.644"
          height="190.679"
          transform="rotate(-180 309.683 500.36)"
          fill="#B3271A"
        />
        <rect
          x="191.038"
          y="0.357666"
          width="118.644"
          height="190.679"
          fill="#375BB6"
        />
        <rect
          x="0.359863"
          y="309.681"
          width="118.645"
          height="190.677"
          transform="rotate(-90 0.359863 309.681)"
          fill="black"
        />
        <rect
          x="0.359863"
          y="119.002"
          width="118.645"
          height="118.644"
          transform="rotate(-90 0.359863 119.002)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="500.357"
          y="191.037"
          width="118.645"
          height="190.677"
          transform="rotate(90 500.357 191.037)"
          fill="#F3D74B"
        />
        <rect
          x="500.357"
          y="381.716"
          width="118.645"
          height="118.644"
          transform="rotate(90 500.357 381.716)"
          fill="#F3D74B"
          fill-opacity="0.5"
        />
        <rect
          x="119.005"
          y="500.36"
          width="118.644"
          height="118.645"
          transform="rotate(-180 119.005 500.36)"
          fill="#B3271A"
          fill-opacity="0.5"
        />
        <rect
          x="381.716"
          y="1.35767"
          width="118.644"
          height="118.645"
          fill="#375BB6"
          fill-opacity="0.5"
        />
      </svg>
      <svg
        class="logo-dark"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="309.323"
          y="500.002"
          width="118.644"
          height="190.679"
          transform="rotate(-180 309.323 500.002)"
          fill="#B3271A"
        />
        <rect
          x="190.678"
          y="0.000366211"
          width="118.644"
          height="190.679"
          fill="#375BB6"
        />
        <rect
          y="309.324"
          width="118.645"
          height="190.677"
          transform="rotate(-90 0 309.324)"
          fill="white"
          fill-opacity="0.5"
        />
        <rect
          y="118.645"
          width="118.645"
          height="118.644"
          transform="rotate(-90 0 118.645)"
          fill="white"
          fill-opacity="0.25"
        />
        <rect
          x="499.998"
          y="190.679"
          width="118.645"
          height="190.677"
          transform="rotate(90 499.998 190.679)"
          fill="#F3D74B"
        />
        <rect
          x="499.998"
          y="381.358"
          width="118.645"
          height="118.644"
          transform="rotate(90 499.998 381.358)"
          fill="#F3D74B"
          fill-opacity="0.5"
        />
        <rect
          x="118.645"
          y="500.002"
          width="118.644"
          height="118.645"
          transform="rotate(-180 118.645 500.002)"
          fill="#B3271A"
          fill-opacity="0.5"
        />
        <rect
          x="381.356"
          y="1.00037"
          width="118.644"
          height="118.645"
          fill="#375BB6"
          fill-opacity="0.5"
        />
      </svg>
    </div>

    <h1 class="docs-content-title">Вступ до Теорії Мавки</h1>
    <p>
      <span class="diia-word">Теорія Мавки</span>
      <span style="font-weight: 500" class="hljs-keyword"> це</span> набір
      простих концептів, що роблять <span class="diia-word">Мавку</span> такою,
      якою вона <span style="font-weight: 500" class="hljs-keyword">є</span>.
    </p>
    <p>
      Основа <span class="diia-word">Теорії Мавки</span> не обовʼязкова для
      розуміння. Будь-яка людина може програмувати
      <span class="diia-word">Мавкою</span>
      <span style="font-weight: 500" class="hljs-keyword"> і</span> без її
      розуміння. Проте досконале розуміння
      <span class="diia-word">Теорії Мавки</span> дозволяє бачити програмування
      <span style="font-weight: 500" class="hljs-keyword"> та</span> життя з
      іншого місця. З того місця, з якого дивлюсь
      <span style="font-weight: 500" class="hljs-keyword"> я</span>.
    </p>
    <p>
      Хоч самі концепти надзвичайно прості, деякі з них усвідомити часто важко.
    </p>
    <p>
      <span class="diia-word">Теорія Мавки</span>
      <span style="font-weight: 500" class="hljs-keyword"> є</span> для
      українського розуму. Але може бути застосована будь-якою людиною
      <span style="font-weight: 500" class="hljs-keyword">та</span> до
      будь-чого.
    </p>
    <p>
      <span class="diia-word">Теорію Мавки</span> можна ще називати
      <span class="diia-word">теорією української мови програмування</span>,
      <span class="diia-word">загальною теорією мов програмування</span>,
      <span class="diia-word">теорією всього від Мавки</span>
      <span style="font-weight: 500" class="hljs-keyword"> або </span>
      <span class="diia-word">теорією правди</span>.
    </p>

    <div class="wrapped-code-window">
      <div class="wrapped-code-window-images">
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
      </div>

      <div class="code-window code-window-full">
        <ClientOnly>
          <highlightjs language="diiaspec" :autodetect="false" :code="inyan" />
        </ClientOnly>
      </div>

      <div class="wrapped-code-window-images bottom">
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
        <img src="@/assets/images/theory.svg" alt="" />
      </div>
    </div>
  </UiDocsWrapper>
</template>

<style lang="scss"></style>
