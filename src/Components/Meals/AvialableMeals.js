import React from 'react'
import classes from "./AvailablMeals.module.css"
import Card from "../UI/Card"
import MealsItem from './MealsItem/MealsItem';
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvialableMeals = () => {
  const MealsList = DUMMY_MEALS.map((item)=>{
    return <MealsItem 
    key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  })
  return (
    <Card className={classes.meals}> 
      <ul>
        {MealsList}
      </ul>
    </Card>
  )
}

export default AvialableMeals