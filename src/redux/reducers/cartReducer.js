import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        burger: {
          price: 150,
          quantity: 0,
        },
        pizza: {
          price: 400,
          quantity: 0,
        },
        milkshake: {
          price: 70,
          quantity: 0,
        },
        thali: {
          price: 250,
          quantity: 0,
        },
        softdrink: {
          price: 60,
          quantity: 0,
        },
        chowmein: {
          price: 100,
          quantity: 0,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  burgerIncrement: (state) => {
    state.cartItems.burger.quantity += 1;
  },
  pizzaIncrement: (state) => {
    state.cartItems.pizza.quantity += 1;
  },
  milkshakeIncrement: (state) => {
    state.cartItems.milkshake.quantity += 1;
  },
  thaliIncrement: (state) => {
    state.cartItems.thali.quantity += 1;
  },
  softdrinkIncrement: (state) => {
    state.cartItems.softdrink.quantity += 1;
  },
  chowmeinIncrement: (state) => {
    state.cartItems.chowmein.quantity += 1;
  },

  burgerDecrement: (state) => {
    state.cartItems.burger.quantity -= 1;
  },
  pizzaDecrement: (state) => {
    state.cartItems.pizza.quantity -= 1;
  },
  milkshakeDecrement: (state) => {
    state.cartItems.milkshake.quantity -= 1;
  },
  thaliDecrement: (state) => {
    state.cartItems.thali.quantity -= 1;
  },
  softdrinkDecrement: (state) => {
    state.cartItems.softdrink.quantity -= 1;
  },
  chowmeinDecrement: (state) => {
    state.cartItems.chowmein.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.burger.price * state.cartItems.burger.quantity +
      state.cartItems.pizza.price * state.cartItems.pizza.quantity +
      state.cartItems.milkshake.price * state.cartItems.milkshake.quantity +
      state.cartItems.thali.price * state.cartItems.thali.quantity +
      state.cartItems.softdrink.price * state.cartItems.softdrink.quantity +
      state.cartItems.chowmein.price * state.cartItems.chowmein.quantity;

    state.tax = state.subTotal * 0.18;

    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;

    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      burger: {
        price: 150,
        quantity: 0,
      },
      pizza: {
        price: 400,
        quantity: 0,
      },
      milkshake: {
        price: 70,
        quantity: 0,
      },
      thali: {
        price: 250,
        quantity: 0,
      },
      softdrink: {
        price: 60,
        quantity: 0,
      },
      chowmein: {
        price: 100,
        quantity: 0,
      },
    };
    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShipingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      country: action.payload.country,
      state: action.payload.state,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});
