export default defineNuxtConfig({
  devtools: { enabled: true },

  router: {
    options: {
      scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          // BEFORE:
          // return { selector: to.hash }

          return { el: to.hash };
        }
      }
    }
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "Сучасна українська мова програмування."
        },
        {
          name: "keywords",
          content:
            "мавка, мова програмування, програмування, українська мова програмування, українська мова, мавка мова програмування, мавка мова"
        }
      ],
      title: "Мавка",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: [
        "/",
        "/документація",
        "/документація/автор",
        "/документація/арифметика",
        "/документація/бог",
        "/документація/встановлення",
        "/документація/вступ-до-теорії",
        "/документація/дід",
        "/документація/дія",
        "/документація/змінопис",
        "/документація/коментар",
        "/документація/логічне",
        "/документація/макет",
        "/документація/математика",
        "/документація/модуль",
        "/документація/обʼєкт",
        "/документація/пак",
        "/документація/перебір",
        "/документація/перша-програма",
        "/документація/побітові-операції",
        "/документація/подяка",
        "/документація/поки",
        "/документація/порівняння",
        "/документація/пульт",
        "/документація/післясцена",
        "/документація/рація",
        "/документація/розширення",
        "/документація/словник",
        "/документація/список",
        "/документація/спроба",
        "/документація/станція",
        "/документація/стиль",
        "/документація/структура",
        "/документація/субʼєкт",
        "/документація/текст",
        "/документація/тестування",
        "/документація/умова",
        "/документація/чародія",
        "/документація/число",
        "/документація/інструкція",
        "/документація/інтернет"
      ],
      failOnError: false
    }
  },

  modules: ["@nuxt/content", "nuxt-twemoji"]
});
