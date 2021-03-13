import {
  ADD_PIZZA_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  PLUS_CART_ITEM,
  MINUS_CART_ITEM,
} from "../action/cartAction";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART:{
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    case CLEAR_CART:{
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }
    case REMOVE_CART_ITEM:{
      const removeItems = {
        ...state.items,
      };
      const currentTotalPrice = removeItems[action.payload].totalPrice;
      const currentTotalCount = removeItems[action.payload].items.length;
      delete removeItems[action.payload];
      return {
        ...state,
        items: removeItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case MINUS_CART_ITEM:{
      const oldItems =  state.items[action.payload].items
      const minusItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: minusItems,
          totalPrice: getTotalPrice(minusItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };


    }
    case PLUS_CART_ITEM:{
      const plusItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: plusItems,
          totalPrice: getTotalPrice(plusItems),
        },
      };




      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };

    }
    default:
      return state;
  }
};
