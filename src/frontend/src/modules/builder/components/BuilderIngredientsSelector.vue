<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <RadioButton
            v-for="(sauce, index) in sauces"
            :key="sauce.id"
            :name="'sauce'"
            :productName="sauce.name"
            :checked="index === 0"
            :value="sauce.value"
            :className="'radio ingredients__input'"
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
            >
              <span class="filling" :class="`filling--${ingredient.value}`"
                >{{ ingredient.name }}
              </span>
              <ItemCounter
                @increaseCount="$emit('increaseCount', ingredient, $event)"
                @decreaseCount="$emit('decreaseCount', ingredient, $event)"
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
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
