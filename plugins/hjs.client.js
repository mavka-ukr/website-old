import { defineNuxtPlugin } from "nuxt/app";
import 'highlight.js/styles/ir-black.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const diia = () => ({
    name: 'Diia',
    aliases: ['diia'],
    keywords: {
        $pattern: /[a-zA-Zа-яА-ЯіІїЇєЄ]+/,
        keyword: 'дія кожному беручи повернути кінець в структура для чекати включити має взяти якщо або і інакше'
    },
    unicodeRegex: true,
});

// hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('diia', diia);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(hljsVuePlugin);
});
