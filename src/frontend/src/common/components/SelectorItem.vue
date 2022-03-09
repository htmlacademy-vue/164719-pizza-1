<template>
  <div>
    <div
      v-if="count >= 1"
      :class="`pizza__filling pizza__filling--${ingredient}`"
    ></div>
    <div
      v-if="count >= 2"
      :class="`pizza__filling pizza__filling--${ingredient} pizza__filling--second`"
    ></div>
    <div
      v-if="count === 3"
      :class="`pizza__filling pizza__filling--${ingredient} pizza__filling--third`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "SelectorItem",
  props: {
    ingredient: {
      type: String,
      default: "",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped></style>
