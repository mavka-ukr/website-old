import { defineNuxtPlugin } from "nuxt/app";

function hexToRgb(hex) {
  hex = hex.trim();

  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function generateRgbProp(name) {
  const $root = document.getElementsByTagName("html")[0];
  const colorValue = getComputedStyle($root).getPropertyValue(name);

  if (colorValue) {
    const colorRgb = hexToRgb(colorValue);

    if (colorRgb) {
      $root.style.setProperty(
        `${name}_rgb`,
        `${colorRgb.r},${colorRgb.g},${colorRgb.b}`,
      );
    }
  }
}

function setColorScheme(cs) {
  if (cs === "light") {
    document.documentElement.classList.remove("cs-dark");
    document.documentElement.classList.add("cs-light");
  } else {
    document.documentElement.classList.remove("cs-light");
    document.documentElement.classList.add("cs-dark");
  }

  regenerateRgbProps();
}

function regenerateRgbProps() {
  generateRgbProp("--bg-color");
  generateRgbProp("--text-color");
  generateRgbProp("--hint-color");
}

window.darkMode = ref(localStorage.getItem("darkMode") || "auto");

window.toggleDarkMode = function () {
  if (window.darkMode.value === "auto") {
    window.darkMode.value = "false";
  } else if (window.darkMode.value === "false") {
    window.darkMode.value = "true";
  } else {
    window.darkMode.value = "auto";
  }
};

function handleDarkModeChange(event) {
  setColorScheme(event.matches ? "dark" : "light");
}

watch(
  window.darkMode,
  (value) => {
    if (value === "auto") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setColorScheme("dark");
      } else {
        setColorScheme("light");
      }

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", handleDarkModeChange);
    } else {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleDarkModeChange);

      if (value === "true") {
        setColorScheme("dark");
      } else {
        setColorScheme("light");
      }
    }

    localStorage.setItem("darkMode", value);
  },
  {
    immediate: true,
  },
);

export default defineNuxtPlugin(() => {});
