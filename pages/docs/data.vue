<script setup>
const simple = `
Паспорт(
  прізвище="Когут",
  ім'я="Давид",
  по_батькові="Богданович",
  дата_народження=Дата(
    день=20,
    місяць=1,
    рік=2001
  ),
  застарілий=ні
)
`.trim();
</script>

<template>
  <DocsWrapper>
    <h1 class="docs-content-title">
      Дід
    </h1>

    <p>
      <code>Дід</code> - це формат для зручного збереження та передачі даних. За виглядом ідентичний до об'єкта.
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
  </DocsWrapper>
</template>
