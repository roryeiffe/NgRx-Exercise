import { createReducer, on } from "@ngrx/store";

import { Food } from "../models/food.model";
import { FoodsApiActions } from "./foods.actions";

export const initialState: ReadonlyArray<Food> = [];

export const foodsReducer = createReducer(
  initialState,
  on(FoodsApiActions.retrievedFoodList, (_state, { foods }) => foods)
)
