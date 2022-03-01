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
              @startDragIngredient="startDragIngredient"
            />
            <BuilderPizzaView
              :ingredients="pizzaViewIngredients"
              :total="sumTotal"
              :sauce="order.sauce.value"
              :size="order.dough.value === 'large' ? 'big' : 'small'"
              @stopDragIngredient="stopDragIngredient"
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
      this.ingredients.map((item) => {
        if (item.hasOwnProperty("count") && item.count) {
          view.push(item.value);
        }
      });
      return view;
    },
    sumTotal() {
      let ingredientsSum = 0;
      const multiplier = this.order.size.multiplier || this.sizes[1].multiplier;
      const dough = this.order.dough.price || this.doughs[0].price;
      const sauce = this.order.sauce.price || this.sauces[0].price;
      Object.keys(this.ingredients).forEach((item) => {
        if (this.ingredients[item].hasOwnProperty("count")) {
          ingredientsSum +=
            this.ingredients[item].price * this.ingredients[item].count;
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
    increaseCount(id, count) {
      this.pizza.ingredients = this.pizza.ingredients.map((item) => {
        if (item.id === id) {
          item.count = count;
        }
        return item;
      });
    },
    decreaseCount(id, count) {
      this.pizza.ingredients = this.pizza.ingredients.map((item) => {
        if (item.id === id) {
          item.count = count;
        }
        return item;
      });
    },
    startDragIngredient(event, ingredient) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("Ingredient", JSON.stringify(ingredient));
    },
    stopDragIngredient({ dataTransfer }) {
      if (!dataTransfer) {
        return;
      }
      const payload = dataTransfer.getData("Ingredient");
      if (payload) {
        let transferData = JSON.parse(dataTransfer.getData("Ingredient"));
        this.pizza.ingredients = this.pizza.ingredients.map((item) => {
          if (item.id === transferData.id) {
            if (item.hasOwnProperty("count")) {
              item.count++;
            } else {
              item.count = 0;
              item.count++;
            }
          }
          return item;
        });
      }
    },
  },
};
</script>

<style scoped></style>
