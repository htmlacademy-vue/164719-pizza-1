<template>
  <div :class="`pizza__filling pizza__filling--${item}`"></div>
</template>

<script>
export default {
  name: "SelectorItem",
  props: {
    item: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style scoped></style>
