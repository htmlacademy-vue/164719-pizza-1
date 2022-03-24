<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <RadioButton
          v-for="dough of doughs"
          :key="dough.id"
          :productName="dough.description"
          name="dought"
          :value="dough.value"
          :class="`dough__input dough__input--${dough.value}`"
          :productDescription="dough.name"
          :checked="dough.id === selectedDough"
          @selectItem="$emit('selectDough', dough)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderDoughSelector",
  components: { RadioButton },
  props: {
    doughs: {
      type: Array,
      required: true,
    },
    selectedDough: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped></style>
