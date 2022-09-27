import {createSlice} from "@reduxjs/toolkit";

const logoutModalSlice = createSlice({
    name: "User",
    initialState: false,

    reducers: {
        toggleModal: (state, action) => {
            console.log(action);
             return action.payload
        },
    }
})

export const {toggleModal} =  logoutModalSlice.actions;

export default logoutModalSlice.reducer;