import { Component, Input } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  @Input() foods: ReadonlyArray<Food> = [];
  // This is the event that will be emitted when the user clicks the "Add" button
  // It signifies that the food is being added to the cart:
  @Output() add = new EventEmitter<string>();


  addFood(id: string) {
    this.add.emit(id);
  }

}
