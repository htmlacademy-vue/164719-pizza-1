export const doughs = (data) => {
  const keys = [
    {
      translate: "Тонкое",
      name: "light",
    },
    {
      translate: "Толстое",
      name: "large",
    },
  ];
  const preparedData = [];
  data.map((item) => {
    preparedData.push({
      ...item,
      thickness: keys.find(({ translate }) => item.name === translate).name,
    });
  });
  console.log(preparedData);
  return preparedData;
};
