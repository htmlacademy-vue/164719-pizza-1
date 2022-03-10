<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <RadioButton
          v-for="(size, index) of sizes"
          :key="size.id"
          :class="`diameter__input  diameter__input--${size.value}`"
          :name="diameter"
          :value="size.value"
          :checked="index === 1"
          :productName="size.name"
          :showProductDescription="false"
          :item="size"
          @selectItem="$emit('selectSize', size)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSizeSelector",
  components: { RadioButton },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
