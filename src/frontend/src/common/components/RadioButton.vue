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
      default: "",
    },
    name: {
      type: String,
      default: "",
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
  },
};
</script>

<style scoped></style>
