import React from "react";
import { MealsContextApi } from "../provider/MealProvider";

const MealList = () => {
  const { meals } = MealsContextApi();
  return (
    <div className="mealList">
      {meals.map((meal, index) => {
        return (
          <div className="meal" key={index}>
            <h2 style={{ border: "2px solid black" }}>{meal}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default MealList;
