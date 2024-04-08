<script setup>
import mavkaLogo from "@/assets/images/logo-light.png";

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: mavkaLogo,
    },
  ],
});
</script>

<template>
  <slot />
</template>
