<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <RadioButton
            v-for="sauce in sauces"
            :key="sauce.id"
            :name="sauce"
            :productName="sauce.name"
            :checked="sauce.id === selectedSauce.id"
            :value="sauce.value"
            class="radio ingredients__input"
            :showProductDescription="false"
            :item="sauce"
            @selectItem="$emit('selectSauce', sauce)"
          />
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              :draggable="ingredient.count !== 3"
              @dragstart="startDragIngredient($event, ingredient)"
            >
              <span class="filling" :class="`filling--${ingredient.value}`"
                >{{ ingredient.name }}
              </span>
              <ItemCounter
                :count="ingredient.count"
                :id="ingredient.id"
                @increaseCount="increaseCount"
                @decreaseCount="decreaseCount"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter";
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderIngredientsSelector",
  components: { RadioButton, ItemCounter },
  data() {
    return {
      selectedSauce: {
        id: 1,
      },
    };
  },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    increaseCount(id, count) {
      this.$emit("increaseCount", id, count);
    },
    decreaseCount(id, count) {
      this.$emit("decreaseCount", id, count);
    },
    startDragIngredient($event, ingredient) {
      $event.dataTransfer.dropEffect = "move";
      $event.dataTransfer.effectAllowed = "move";
      $event.dataTransfer.setData("Ingredient", JSON.stringify(ingredient));
    },
  },
};
</script>

<style scoped></style>
