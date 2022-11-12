// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Дія - сучасна українська мова програмування',
        link: [
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: '',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            },
        ],
    },
    app: {
        head: {
            meta: [
                { name: 'description', content: 'Сучасна українська мова програмування.' },
                {
                    name: 'keywords',
                    content: 'дія, мова програмування, програмування, українська мова програмування, українська мова'
                },
            ],
        }
    },
    modules: [
        '@nuxt/content'
    ],
});
