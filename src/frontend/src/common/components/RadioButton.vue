<template>
  <label :class="className">
    <input
      type="radio"
      :name="name"
      :value="value"
      class="visually-hidden"
      :checked="checked"
      @change="$emit('selectItem', item)"
    />
    <b v-if="showProductDescription">{{ productDescription }}</b>
    <span>{{ productName }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    className: {
      type: String,
      default() {
        return "";
      },
    },
    name: {
      type: String,
      default() {
        return "";
      },
    },
    productName: {
      type: String,
      default() {
        return "";
      },
    },
    showProductDescription: {
      type: Boolean,
      default() {
        return true;
      },
    },
    productDescription: {
      type: String,
      default() {
        return "";
      },
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
    checked: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style scoped></style>
