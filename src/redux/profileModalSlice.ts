import {createSlice} from "@reduxjs/toolkit";

const profileModalSlice = createSlice({
    name: "profile",
    initialState: false,

    reducers: {
        toggleModal: (state, action) => {
            console.log(action);
             return action.payload
        },
    }
})

export const {toggleModal} =  profileModalSlice.actions;

export default profileModalSlice.reducer;