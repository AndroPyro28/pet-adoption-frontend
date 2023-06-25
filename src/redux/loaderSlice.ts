import {createSlice} from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "Loader",
    initialState: false,

    reducers: {
        toggleLoading: (state, action) => {
             return action.payload
        },
    }
})

export const {toggleLoading} =  loaderSlice.actions;

export default loaderSlice.reducer;