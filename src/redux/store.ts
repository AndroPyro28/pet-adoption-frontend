import {configureStore} from "@reduxjs/toolkit";
import PublicApis from "../services/publicApis"

    const store = configureStore({
        reducer: {
            [PublicApis.reducerPath]: PublicApis.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: false,
        }).concat(
            PublicApis.middleware,
        )
    })

    export default store;