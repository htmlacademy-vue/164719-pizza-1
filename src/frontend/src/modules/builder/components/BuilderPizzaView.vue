<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
      />
    </label>

    <div
      class="content__constructor"
      @drop.stop="stopDragIngredient($event)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div :class="`pizza pizza--foundation--${size}-${sauce}`">
        <div class="pizza__wrapper">
          <SelectorItem
            v-for="ingredient in ingredients"
            :key="ingredient.id"
            :ingredient="ingredient.ingredient"
            :count="ingredient.count"
          />
        </div>
      </div>
    </div>

    <div class="content__result">
      <p>Итого: {{ total }} ₽</p>
      <button type="button" class="button" disabled>Готовьте!</button>
    </div>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem";
export default {
  name: "BuilderPizzaView",
  components: { SelectorItem },
  props: {
    ingredients: {
      type: Array,
      default() {
        return [];
      },
    },
    total: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
      required: true,
    },
  },
  methods: {
    stopDragIngredient({ dataTransfer }) {
      if (!dataTransfer) {
        return;
      }
      const payload = dataTransfer.getData("Ingredient");
      if (payload) {
        let transferData = JSON.parse(dataTransfer.getData("Ingredient"));
        this.$emit("stopDragIngredient", transferData);
      }
    },
  },
};
</script>

<style scoped></style>
