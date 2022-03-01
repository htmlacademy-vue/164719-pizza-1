<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="count < 1"
      @click="decreaseCount(count - 1)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text" name="counter" class="counter__input" :value="count" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="increaseCount(count + 1)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    count: {
      type: Number,
      default() {
        return 0;
      },
    },
    id: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    increaseCount(count) {
      this.$emit("increaseCount", this.id, count);
    },
    decreaseCount(count) {
      this.$emit("decreaseCount", this.id, count);
    },
  },
};
</script>

<style scoped></style>
