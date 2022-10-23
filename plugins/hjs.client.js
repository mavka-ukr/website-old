import { defineNuxtPlugin } from "nuxt/app";
import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core';
// import 'highlight.js/lib/common';
import bash from 'highlight.js/lib/languages/bash';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const diia = () => {
    function recurRegex(re, substitution, depth) {
        if (depth === -1) return "";

        return re.replace(substitution, _ => {
            return recurRegex(re, substitution, depth - 1);
        });
    }

    const JAVA_IDENT_RE = '[\u00C0-\u02B8a-zA-Zа-яА-ЯіІїЇєЄ_$][\u00C0-\u02B8a-zA-Zа-яА-ЯіІїЇєЄ_$0-9]*';
    const GENERIC_IDENT_RE = JAVA_IDENT_RE
        + recurRegex('(?:<' + JAVA_IDENT_RE + '~~~(?:\\s*,\\s*' + JAVA_IDENT_RE + '~~~)*>)?', /~~~/g, 2);

    return ({
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
                begin: [
                    /[ \.]/,
                    /([a-zA-Zа-яА-ЯіІїЇєЄ_']*)/,
                    /\(/
                ],
                className: { 2: "title.function" },
            },
            {
                className: 'string',
                begin: /"/,
                end: /"/,
            },
            hljs.NUMBER_MODE,
            hljs.COMMENT('\'\'\'', '$'),
        ]
    });
};

hljs.registerLanguage('diia', diia);
hljs.registerLanguage('bash', bash);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(hljsVuePlugin);
});
