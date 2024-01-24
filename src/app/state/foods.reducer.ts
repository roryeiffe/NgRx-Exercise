import { createReducer, on } from "@ngrx/store";

import { Food } from "../models/food.model";
import { FoodsApiActions } from "./foods.actions";

export const initialState: ReadonlyArray<Food> = [];

// A simple reducer. When we receive a list of foods from the API, 
// we set that to the state
export const foodsReducer = createReducer(
  initialState,
  on(FoodsApiActions.retrievedFoodList, (_state, { foods }) => foods)
)
