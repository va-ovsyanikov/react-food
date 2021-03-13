import { combineReducers } from "redux";
import { filtersReducer } from "./filtersReducer";
import { pizzasReducer } from "./pizzasReducer";
import { cartReducer } from "./cartReducer";

export const rootReducers = combineReducers({
  filters:filtersReducer,
  pizzas:pizzasReducer,
  cart:cartReducer
});
