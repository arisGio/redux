import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["pepperoni"],
  gluten: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
});
