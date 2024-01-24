import { createFeatureSelector } from "@ngrx/store";
import { Food } from "../models/food.model";

// Create a selector for all foods
export const selectFoods = createFeatureSelector<ReadonlyArray<Food>>('foods');

// TODO: Create a selector for the cart (Hint: You might want to create 2 selectors, 
// one for the food ids, and one for the cart foods)
