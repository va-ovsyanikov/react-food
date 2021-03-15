import axios from "axios";

export const SET_PIZZAS = "SET_PIZZAS";
export const SET_LOADED = "SET_LOADED";

export const setPizzas = (items) => {
  return {
    type: SET_PIZZAS,
    payload: items,
  };
};

export const setLoaded = (payload) => {
  return {
    type: SET_LOADED,
    payload,
  };
};

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get(`https://react-pizza-spa-test.herokuapp.com/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=dsc`).then(({ data }) => {
    dispatch(setPizzas(data)); 
  });
};
