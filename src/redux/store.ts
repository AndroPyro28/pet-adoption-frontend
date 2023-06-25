import {configureStore, combineReducers} from "@reduxjs/toolkit";
import PublicApis from "../services/publicApis"
import AuthApis from "../services/authApis"
import userSlice from "./userSlice";
import logoutModalSlice from "./logoutModalSlice";
import profileModalSlice from "./profileModalSlice"
import loaderSlice from "./loaderSlice";
import {baseApi, passwordResetApi, publicApi} from "../services/Apis"
import dataSlice from "./dataSlice";
import blogSlice from "./blogSlice";
import refetchSlice from "./refetchSlice";

    const store = configureStore({
        reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
            [passwordResetApi.reducerPath]: passwordResetApi.reducer,
            [publicApi.reducerPath]: publicApi.reducer,
            user: userSlice,
            logoutModal: logoutModalSlice,
            profileModal: profileModalSlice,
            loader: loaderSlice,
            dataRecord: dataSlice,
            blog: blogSlice,
            refetchData: refetchSlice
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            baseApi.middleware,
            passwordResetApi.middleware,
            publicApi.middleware,
        )
    })

    export default store;