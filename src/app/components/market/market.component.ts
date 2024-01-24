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
  @Output() add = new EventEmitter<Food>();

  addFood(food: Food) {
    this.add.emit(food);
  }

}
