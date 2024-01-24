## Food App
The following application displays a list of food items and some details about them, the "Market". Each food item also has an "Add To Cart" button that currently doesn't do anything. Your overall task is to implement this functionality. Upon adding a food item to the cart, the food item should be displayed in the "Cart" section, right under the "Market" section. Each item in the cart should also have a "Remove from Cart" button. This should be accomplished using NgRx.

### The Current State of the App
As of right now, the app utilizes NgRx to display the list of food items in the "Market" section. The list of food items is stored in the `FoodState` and is retrieved using a selector. The `FoodState` also contains a list of food items that have been added to the cart. This list is currently empty and the "Cart" section is not displaying any food items.

Take some time to explore the app and see how things are functioning. In particular, note the following:
- [Market Component](src/app/market/market.component.ts) - This component is responsible for displaying the list of food items in the "Market" section. It retrieves the list of food items from the `FoodState` using a selector.
- [Food Service](src/app/food.service.ts) - This service is responsible for retrieving the list of food items from the "server". Mock data is used for this example so the app does not actually consume an external API. Feel free to edit the mock data in the service to add more food items.
- [Food Reducer](src/app/food.reducer.ts) - This reducer is responsible for updating the `FoodState` when the mock server is called. It simply populates the state with the contents of the mock data.
- [App Module](src/app/app.module.ts) - This module is where the NgRx store is configured. The `FoodState` is registered with the store and the `FoodReducer` is used to update the state.
- [Actions](src/app/actions) - This folder contains the actions that are used to update the `FoodState`. Currently, there is only one action, `LoadFoodItems`, which is dispatched when the mock server is called. You will need to add more actions to implement the functionality described above.
- [Selectors](src/app/selectors) - This folder contains the selectors that are used to retrieve data from the `FoodState`. Currently, there is only one selector, `getFoodItems`, which is used to retrieve the list of food items from the `FoodState`. You will need to add more selectors to implement the functionality described above.


### To Do:
Look out for TODO statements in the following places
- [Cart Actions](src/app/actions/cart.actions.ts) - This file already contains an action that is used to populate the market state based on the mock data. You will need to add more actions to implement the ability to add/remove items from the cart.
- [Cart Reducer](src/app/cart.reducer.ts) - This reducer should be responsible for updating the cart when a food item is added. The file is currently empty and you will need to add the necessary code to implement this functionality.
- [Cart Selectors](src/app/selectors/cart.selectors.ts) - This file already contains a selector that is used to retrieve the list of food items for the market. You will need to add another selector to retrieve the list of food items in the cart.
- [Cart Component](src/app/cart/cart.component.ts) - This component is responsible for displaying the list of food items in the "Cart" section. Currently, it does not have functionality to remove items from the cart. You will need to add this functionality.
- [App Component](src/app/app.component.ts) - This component is responsible for displaying the "Market" and "Cart" sections, as well as ensuring functionality across all components. You will need to look out for TODO statements in order to fill out this functionality.
- [App Module](src/app/app.module.ts) - This module is where the NgRx store is configured. You will need to add the newly created reducer to the store.