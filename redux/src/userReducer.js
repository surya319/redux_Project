import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      age: 0,
      email: "",
    },
  },
  reducers: {
    login: (state, action) => {
      return {...state, value: action.payload};
    },
  },
});

export default userSlice.reducer;
export const { login } = userSlice.actions;
