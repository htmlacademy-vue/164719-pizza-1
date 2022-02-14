<template>
  <body>
    <AppLayout>
      <main class="content">
        <form action="#" method="post">
          <div class="content__wrapper">
            <h1 class="title title--big">Конструктор пиццы</h1>
            <BuilderDoughSelector :doughs="doughs" @selectDough="selectDough" />
            <BuilderSizeSelector :sizes="sizes" @selectSize="selectSize" />
            <BuilderIngredientsSelector
              :sauces="sauces"
              :ingredients="ingredients"
              @selectSauce="selectSauce"
              @increaseCount="increaseCount"
              @decreaseCount="decreaseCount"
            />
            <BuilderPizzaView
              :ingredients="pizzaViewIngredients"
              :total="sumTotal"
            />
          </div>
        </form>
      </main>
    </AppLayout>
  </body>
</template>

<script>
import pizza from "@/static/pizza.json";
import {
  normalizeData,
  doughThickness,
  sizes,
  sauces,
  ingredients,
} from "@/common/helpers.js";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "Index",
  components: {
    AppLayout,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },
  data: function () {
    return {
      pizza: pizza,
      order: {
        dough: {},
        sauce: {},
        size: {},
        ingredients: [],
      },
    };
  },
  computed: {
    doughs: function () {
      return normalizeData(this.pizza.dough, doughThickness);
    },
    sauces: function () {
      return normalizeData(this.pizza.sauces, sauces);
    },
    sizes: function () {
      return normalizeData(this.pizza.sizes, sizes);
    },
    ingredients: function () {
      return normalizeData(this.pizza.ingredients, ingredients);
    },
    pizzaViewIngredients: function () {
      let view = [];
      this.order.ingredients.map((item) => {
        view.push(item.value);
      });
      return view;
    },
    sumTotal() {
      let ingredientsSum = 0;
      const multiplier = this.order.size.multiplier || this.sizes[1].multiplier;
      const dough = this.order.dough.price || this.doughs[0].price;
      const sauce = this.order.sauce.price || this.sauces[0].price;
      Object.keys(this.order).forEach((item) => {
        if (Array.isArray(this.order[item])) {
          this.order[item].map((el) => {
            ingredientsSum += el.price * el.count;
          });
        }
      });
      return (dough + sauce + ingredientsSum) * multiplier;
    },
  },
  methods: {
    selectDough(dough) {
      this.order.dough = this.doughs.find((item) => item.id === dough.id);
    },
    selectSize(size) {
      this.order.size = this.sizes.find((item) => item.id === size.id);
    },
    selectSauce(sauce) {
      this.order.sauce = this.sauces.find((item) => item.id === sauce.id);
    },
    increaseCount({ price, value, id }, count) {
      const index = this.order.ingredients.findIndex((el) => el.id === id);
      if (index >= 0) {
        this.order.ingredients[index].count++;
      } else {
        this.order.ingredients.push({ price, value, id, count });
      }
    },
    decreaseCount({ id }, count) {
      const index = this.order.ingredients.findIndex((el) => el.id === id);
      if (index >= 0) {
        this.order.ingredients[index].count -= 1;
      }
      if (count < 1) {
        this.order.ingredients.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped></style>
