import { generateRgbaVars } from "~/utils/color.js";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
    generateRgbaVars('--bg-color');
    generateRgbaVars('--text-color');
    generateRgbaVars('--hint-color');
});
