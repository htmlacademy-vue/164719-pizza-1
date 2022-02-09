<template>
  <body>
    <AppLayout>
      <main class="content">
        <form action="#" method="post">
          <div class="content__wrapper">
            <h1 class="title title--big">Конструктор пиццы</h1>
            <BuilderDoughSelector :doughs="doughs" />
            <BuilderSizeSelector :sizes="sizes" />
            <BuilderIngredientsSelector
              :sauces="sauces"
              :ingredients="ingredients"
            />
            <BuilderPizzaView />
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
  },
};
</script>

<style scoped></style>
