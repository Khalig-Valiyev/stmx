import React, { useContext, useState } from "react";
import { createContext } from "react";

const MealsContext = createContext();

const MealProvider = ({ children }) => {
  const [meals] = useState([
    "Yarpaq Dolması",
    "Lülə Kabab",
    "Quzu Sac",
    "Çoban Salatı",
    "Piti",
  ]);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const MealsContextApi = () => useContext(MealsContext);

export default MealProvider;
