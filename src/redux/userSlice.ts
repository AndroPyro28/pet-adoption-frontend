import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import Cookies from "js-cookie";

export const authUser = createAsyncThunk('User/auth', async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_DEV_URL}auth/me`, {
            headers: {
                Authorization: `Bearer ${Cookies.get('userToken')}`
            }
        })
        return res.data
    } catch (error) {
        console.error('error auth user', error)
        Cookies.remove('userToken');
    }
})

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
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.fulfilled, (state, action) => {
            console.log('extra reducers', action.payload);
            state = action.payload
            return state;
        })
    }
})

export const {authenticationSuccess, authenticationFailed} =  userSlice.actions;

export default userSlice.reducer;