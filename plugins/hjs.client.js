import { defineNuxtPlugin } from "nuxt/app";
import 'highlight.js/styles/atom-one-dark.css'
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
            keyword: 'дія кожній беручи повернути кінець структура для чекати включити має взяти якщо або і інакше вернути поки',
            literal: 'так ні пусто'
        },
        unicodeRegex: true,
        contains: [
            {
                begin: [
                    /[a-zа-яіїє_]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_']*/,
                    /\(/
                ],
                className: { 1: "title.function", 2: "title.function" },
            },
            {
                begin: [
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_']*/,
                    /\(/
                ],
                className: { 1: "title.class", 2: "title.class" },
            },
            {
                begin: [
                    "структура ",
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_']*/
                ],
                className: { 2: "title.class", 3: "title.class" },
            },
            {
                begin: [
                    "дія для ",
                    /[A-ZА-ЯІЇЄ]/,
                    /[a-zA-Zа-яА-ЯіІїЇєЄ_']*/
                ],
                className: { 2: "title.class", 3: "title.class" },
            },
            {
                className: 'string',
                begin: /"/,
                end: /"/,
                contains: [
                    {
                        begin: /\$\(/,
                        end: /\)/,
                        scope: 'subst'
                    }
                ],
            },
            hljs.COMMENT('\'\'\'', '$'),
            {
                scope: 'number',
                begin: /(-?)0ш([АБВГҐДабвгґд0-9])+/,
            },
            {
                scope: 'number',
                begin: /0д([01])+/,
            },
            hljs.C_NUMBER_MODE,
        ]
    });
};

hljs.registerLanguage('diia', diia);
hljs.registerLanguage('bash', bash);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(hljsVuePlugin);
});
