import { defineNuxtPlugin } from "nuxt/app";

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function generateRgbaVars(name) {
    const $root = document.getElementsByTagName('html')[0];
    const colorValue = getComputedStyle($root).getPropertyValue(name);

    if (colorValue) {
        const colorRgb = hexToRgb(colorValue.trim());

        $root.style.setProperty(`${name}_rgb`, `${colorRgb.r},${colorRgb.g},${colorRgb.b}`);
    }
}

export default defineNuxtPlugin(() => {
    generateRgbaVars('--bg-color');
    generateRgbaVars('--text-color');
    generateRgbaVars('--hint-color');
});
