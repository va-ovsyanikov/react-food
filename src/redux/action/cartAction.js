export const ADD_PIZZA_CART = "ADD_PIZZA_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const PLUS_CART_ITEM = "PLUS_CART_ITEM";
export const MINUS_CART_ITEM = " MINUS_CART_ITEM ";

export const addPizzaToCart = (pizzaObj) => {
  return {
    type: ADD_PIZZA_CART,
    payload: pizzaObj,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  };
};

export const plusCartItem = (id) => {
  return {
    type: PLUS_CART_ITEM,
    payload: id,
  };
};

export const minusCartItem = (id) => {
  return {
    type: MINUS_CART_ITEM,
    payload: id,
  };
};
