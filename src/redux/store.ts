import {configureStore, combineReducers} from "@reduxjs/toolkit";
import PublicApis from "../services/publicApis"
import AuthApis from "../services/authApis"
import userSlice from "./userSlice";
import logoutModalSlice from "./logoutModalSlice";
    const store = configureStore({
        reducer: combineReducers({
            [PublicApis.reducerPath]: PublicApis.reducer,
            [AuthApis.reducerPath]: AuthApis.reducer,
            user: userSlice,
            logoutModal: logoutModalSlice,
        }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: false,
        }).concat(
            PublicApis.middleware,
        )
    })

    export default store;