import axios from "axios";

// initalState:
const initalState = { products: [] };
// action type:
const GOT_PRODUCTS = "GOT_PRODUCTS";

// action creators:
const gotAllProducts = (products) => ({ type: GOT_PRODUCTS, products });

// thunk creators:
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products/");
      dispatch(gotAllProducts(data));
    } catch (error) {
      console.error(error);
    }
  };
};

// reducer:
export default function productsReducer(state = initalState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
