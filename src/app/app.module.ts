import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './components/market/market.component';
import { StoreModule } from '@ngrx/store';
import { foodsReducer } from './state/foods.reducer';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // TODO: Add the cart reducer to this declaration:
    StoreModule.forRoot({foods:foodsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
