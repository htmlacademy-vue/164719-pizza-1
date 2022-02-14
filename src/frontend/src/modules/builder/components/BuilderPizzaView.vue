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

    <div class="content__constructor">
      <div class="pizza pizza--foundation--big-tomato">
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
  },
};
</script>

<style scoped></style>
