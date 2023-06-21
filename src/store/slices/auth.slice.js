import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      // state.loggedIn = (action.payload && action.payload.length > 0) || false;
    }
  }
});

export const setToken = authSlice.actions.setToken;

const AuthSlice = authSlice.reducer;
export default AuthSlice;