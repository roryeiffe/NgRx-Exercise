import { Component } from '@angular/core';

import { FoodService } from './services/food.service';
import { Store } from '@ngrx/store';
import { FoodsApiActions } from './state/foods.actions';
import { selectFoods } from './state/foods.selectors';
import { Food } from './models/food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  // Using the selector, select foods from the store
  foods$ = this.store.select(selectFoods);
  // Todo: Using the selector, select the cart from the store
  cart$ = []

  // TODO: Complete this function to add the selected food to the cart
  onAdd(food: Food) {
    console.log("Adding food to cart: ", food)
  }

  constructor(private foodService: FoodService, private store: Store) {  }

  ngOnInit() {
    // On startup, we want to retrieve the list of foods from the "API"
    // and then dispatch an action to store the list of foods in the store
    this.foodService.getFoods().subscribe((foods) => 
        this.store.dispatch(FoodsApiActions.retrievedFoodList({ foods }))      
    )
  }
}
 