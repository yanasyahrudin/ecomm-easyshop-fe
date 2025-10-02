import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_dashboard_index_data = createAsyncThunk(
  "dashboard/get_dashboard_index_data",
  async (userId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/home/customer/get-dashboard-date/${userId}`
      );
      console.log(data);
    //   return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const orderReducer = createSlice({
  name: "dashboard",
  initialState: {
    loading: false,
    errorMessage: "",
    successMessage: "",
    totalOrders: 0,
    pendingOrders: 0,
    cancelledOrders: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {},
});

export const { messageClear } = dashboardReducer.actions;
export default dashboardReducer.reducer;
