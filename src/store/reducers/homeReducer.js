import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_category = createAsyncThunk(
    "product/get_category",
    async (_, {fulfillWithValue}) => {
        try {
            const {data} = await api.get("/home/get_categorys")
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response)
        }
    }
)
//end method

export const homeReducer = createSlice({
    name: "home",
    initialState: {
        categorys: [],
    },
    reducers : {

    },
    extraReducers: (builder) => {


    }

})

export default homeReducer.reducer;