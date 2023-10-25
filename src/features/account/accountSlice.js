import { createSlice } from "@reduxjs/toolkit";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  nationalId: "G300303",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  user: null,
  isAuth: false,
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    login(state, action) {
      (state.user = action.payload), (state.isAuth = true);
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
      state.balance = 0;
      state.loan = 0;
      state.loanPurpose = "";
      state.isLoading = false;
    },
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan(state, action) {
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance = state.balance + action.payload.amount;
    },
    payLoan(state) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { logout, withdraw, requestLoan, payLoan } = accountSlice.actions;

export function login(email, password) {
  if (email === FAKE_USER.email && password === FAKE_USER.password) {
    return {
      type: "account/login",
      payload: FAKE_USER,
    };
  }
}

export function deposit(amount, currency) {
  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: amount,
    };
  }

  return async function (dispatch, getState) {
    dispatch({
      type: "account/convertingCurrency",
    });

    // API call;
    const host = "api.frankfurter.app";
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    // return action;
    dispatch({
      type: "account/deposit",
      payload: converted,
    });
  };
}

export default accountSlice.reducer;
