import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const customer_register = createAsyncThunk(
  "auth/customer_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/customer/customer-register", info);
      // console.log(data)
      localStorage.setItem("customerToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);
//end method

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    loader: false,
    userInfo: "",
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(customer_register.pending, (state, {payload})=>{
      state.loader = true;
    })
    .addCase(customer_register.rejected, (state, { payload }) => {
      state.errorMessage = payload.error
      state.loader = false;
    })
    .addCase(customer_register.fulfilled, (state, {payload}) => { 
      state.successMessage = payload.message;
      state.loader = false;
    })
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
