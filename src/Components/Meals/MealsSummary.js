import React from "react";
import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Delecious Food, Delevired To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are coked width height-quality ingredients, just in time
        and of curse by experienced chefs!
      </p>
    </div>
  );
};

export default MealsSummary;