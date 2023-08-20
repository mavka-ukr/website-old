export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "Сучасна українська мова програмування.",
        },
        {
          name: "keywords",
          content:
            "мавка, мова програмування, програмування, українська мова програмування, українська мова, мавка мова програмування, мавка мова",
        },
      ],
      title: "Мавка",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: [
        "/документація/арифметика",
        "/документація/встановлення",
        "/документація/вітрини",
        "/документація/дід",
        "/документація/дії",
        "/документація/змінні",
        "/документація/коментарі",
        "/документація/контрибутори",
        "/документація/ма-2",
        "/документація/магія",
        "/документація/макети",
        "/документація/математика",
        "/документація/модулі",
        "/документація/ооп",
        "/документація/паки",
        "/документація/приклади",
        "/документація/розбір",
        "/документація/розширення",
        "/документація/словники",
        "/документація/списки",
        "/документація/список-змін",
        "/документація/спроби",
        "/документація/стиль",
        "/документація/структури",
        "/документація/тестування",
        "/документація/типи",
        "/документація/типизація",
        "/документація/умови",
        "/документація/хмарні-паки",
        "/документація/цикли",
        "/документація/інтернет",
        "/документація/стиль",
        "/документація",
        "/",
      ],
      failOnError: false,
    },
  },

  modules: ["@nuxt/content", "nuxt-twemoji"],
});
