import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";



export const chatReducer = createSlice({
  name: "chat",
  initialState: {

  },
  reducers: {
    messageClear: (state, _) => {
      
    },
  },
  extraReducers: (builder) => {
  },
});

export default chatReducer.reducer;
