import { createActionGroup, props } from "@ngrx/store";
import { Food } from "../models/food.model";

export const FoodsApiActions = createActionGroup({
  source: 'Food API',
  events: {
    'Retrieved Food List': props<{ foods: Food[] }>(),
  }
})

// TODO: Define Actions for adding/removing food from cart: