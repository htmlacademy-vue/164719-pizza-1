<template>
  <label>
    <input
      type="radio"
      :value="value"
      :name="name"
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
    productName: {
      type: String,
      default: "",
    },
    showProductDescription: {
      type: Boolean,
      default: true,
    },
    productDescription: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
