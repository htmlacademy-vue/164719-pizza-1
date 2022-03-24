<template>
  <body>
    <AppHeader />
    <slot />
  </body>
</template>
<script>
import AppHeader from "@/layouts/AppHeader";
export default {
  name: "AppLayout",
  components: {
    AppHeader,
  },
};
</script>

<style scoped></style>
