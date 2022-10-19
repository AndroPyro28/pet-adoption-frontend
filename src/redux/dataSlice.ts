import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "Data",
    initialState: <any[]>[],

    reducers: {
        getAllData: (state, action) => {
             return action.payload
        },
    }
})

export const {getAllData} =  dataSlice.actions;

export default dataSlice.reducer;