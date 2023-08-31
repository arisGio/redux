import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["pepperoni"],
  gluten: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten; // mutate here
    },
    addTopping: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
  },
});
