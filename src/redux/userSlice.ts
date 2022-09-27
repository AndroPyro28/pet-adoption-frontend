import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {},

    reducers: {
        authenticationSuccess: (state, action) => {
             return action.payload
        },
        authenticationFailed: (state, action) => {
            return action.payload
        }
    }
})

export const {authenticationSuccess, authenticationFailed} =  userSlice.actions;

export default userSlice.reducer;