import { defineNuxtPlugin } from "#app";
import FloatingVue from "floating-vue";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(FloatingVue);
});
