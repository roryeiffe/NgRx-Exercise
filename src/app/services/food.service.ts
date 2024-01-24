import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoods(): Observable<Array<Food>> {
    // The of method from rxjs will create an observable from any value
    // Thus simulating an API call
    return of(this.getFoodsHelper());
  }

  // This is a helper method to generate some fake food data
  getFoodsHelper(): Array<Food> {
    const foods: Array<Food> = [
      {
        name: 'Pizza',
        group: 'grain',
        description: 'A delicious pie',
        calories: 300,
        ingredients: ['cheese', 'tomato sauce', 'dough']
      },
      {
        name: 'Salad',
        group: 'vegetable',
        description: 'A healthy mix of vegetables',
        calories: 100,
        ingredients: ['lettuce', 'tomato', 'carrot']
      },
      {
        name: 'Burger',
        group: 'meat',
        description: 'A delicious sandwich',
        calories: 500,
        ingredients: ['bun', 'patty', 'lettuce', 'tomato']
      },
      {
        name: 'Ice Cream',
        group: 'dairy',
        description: 'A delicious dessert',
        calories: 200,
        ingredients: ['milk', 'cream', 'sugar']
      },
      {
        name: 'Tacos',
        group: 'meat',
        description: 'A delicious mexican dish',
        calories: 400,
        ingredients: ['tortilla', 'beef', 'lettuce', 'tomato']
      }
    ];
    return foods;
  }
}
