import { defineNuxtPlugin } from "nuxt/app";
import 'highlight.js/styles/ir-black.css'
import hljs from 'highlight.js/lib/core';
// import 'highlight.js/lib/common';
import bash from 'highlight.js/lib/languages/bash';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const diia = () => ({
    name: 'Diia',
    aliases: ['diia'],
    keywords: {
        $pattern: /[a-zA-Zа-яА-ЯіІїЇєЄ]+/,
        keyword: 'дія кожному беручи повернути кінець структура для чекати включити має взяти якщо або і інакше вернути поки',
        literal: 'так ні пусто'
    },
    unicodeRegex: true,
    contains: [
        {
            className: 'string',
            begin: /"/,
            end: /"/,
        },
        hljs.NUMBER_MODE,
        hljs.COMMENT('\'\'\'', '$'),
    ]
});

hljs.registerLanguage('diia', diia);
hljs.registerLanguage('bash', bash);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(hljsVuePlugin);
});
