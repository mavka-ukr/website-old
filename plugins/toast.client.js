import Toast from "vue-toastification";
import { defineNuxtPlugin } from "nuxt/app";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    transition: "Vue-Toastification__slideBlurred",
  });
});
