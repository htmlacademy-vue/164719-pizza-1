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
      @drop.stop="$emit('stopDragIngredient', $event)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div :class="`pizza pizza--foundation--${size}-${sauce}`">
        <div class="pizza__wrapper">
          <SelectorItem
            v-for="(ingredient, index) in ingredients"
            :key="index"
            :item="ingredient"
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
      default() {
        return 0;
      },
    },
    size: {
      type: String,
      default() {
        return "big";
      },
    },
    sauce: {
      type: String,
      default() {
        return "tomato";
      },
    },
  },
};
</script>

<style scoped></style>
