import React from "react";
import { MealsContextApi } from "../provider/MealProvider";
const MealCounter = () => {
  const { meals } = MealsContextApi();
  return (
    <p>
      Number of items: <span>{meals.length}</span>
    </p>
  );
};

export default MealCounter;
