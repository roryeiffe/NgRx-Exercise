import { createActionGroup, props } from "@ngrx/store";
import { Food } from "../models/food.model";

// This action group is used to dispatch actions that are related to the Food API:
export const FoodsApiActions = createActionGroup({
  source: 'Food API',
  events: {
    'Retrieved Food List': props<{ foods: Food[] }>(),
  }
})

// TODO: Define Actions for adding/removing food from cart: