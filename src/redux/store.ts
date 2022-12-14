import {configureStore, combineReducers} from "@reduxjs/toolkit";
import PublicApis from "../services/publicApis"
import AuthApis from "../services/authApis"
import userSlice from "./userSlice";
import logoutModalSlice from "./logoutModalSlice";
import AnimalRecordApis from "../services/animalRecordApis";
import AdoptionRecordApis from "../services/adoptionRecordApis";
import UpdatePasswordApis from "../services/updatePasswordApis";

    const store = configureStore({
        reducer: combineReducers({
            [PublicApis.reducerPath]: PublicApis.reducer,
            [AuthApis.reducerPath]: AuthApis.reducer,
            [AnimalRecordApis.reducerPath]: AnimalRecordApis.reducer,
            [AdoptionRecordApis.reducerPath]: AdoptionRecordApis.reducer,
            [UpdatePasswordApis.reducerPath]: UpdatePasswordApis.reducer,
            user: userSlice,
            logoutModal: logoutModalSlice,
        }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: false,
        }).concat(
            PublicApis.middleware,
            AuthApis.middleware,
            AnimalRecordApis.middleware,
            AdoptionRecordApis.middleware,
            UpdatePasswordApis.middleware
        )
    })

    export default store;