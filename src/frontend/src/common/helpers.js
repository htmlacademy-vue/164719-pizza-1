export const doughThickness = [
  {
    name: "Тонкое",
    value: "light",
  },
  {
    name: "Толстое",
    value: "large",
  },
];

export const sizes = [
  {
    name: "23 см",
    value: "small",
  },
  {
    name: "32 см",
    value: "normal",
  },
  {
    name: "45 см",
    value: "big",
  },
];
export const sauces = [
  {
    name: "Томатный",
    value: "tomato",
  },
  {
    name: "Сливочный",
    value: "creamy",
  },
];
export const ingredients = [
  { name: "Грибы", value: "mushrooms" },
  { name: "Чеддер", value: "cheddar" },
  { name: "Салями", value: "salami" },
  { name: "Ветчина", value: "ham" },
  { name: "Ананас", value: "ananas" },
  { name: "Бекон", value: "bacon" },
  { name: "Лук", value: "onion" },
  { name: "Чили", value: "chile" },
  { name: "Халапеньо", value: "jalapeno" },
  { name: "Маслины", value: "olives" },
  { name: "Томаты", value: "tomatoes" },
  { name: "Лосось", value: "salmon" },
  { name: "Моцарелла", value: "mozzarella" },
  { name: "Пармезан", value: "parmesan" },
  { name: "Блю чиз", value: "blue_cheese" },
];
export const normalizeData = (data, preparedParam) => {
  const preparedData = [];
  data.map((item) => {
    preparedData.push({
      ...item,
      value: preparedParam.find(({ name }) => item.name === name).value,
    });
  });
  return preparedData;
};
