import { Component } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // TODO: Refactor the following line to take foods as an input
  foods: ReadonlyArray<Food> = [];
  // TODO: Set up an output to emit the food that is being removed

}
