import {createSlice, current} from "@reduxjs/toolkit";

const refetchSlice = createSlice({
    name: "refetch",
    initialState: <any> null,

    reducers: {
        getRefetchFunction: (state: any, action: any) => {
            // state = JSON.parse(JSON.stringify(current(state)))
            // const property = action.payload.path
            // Object.defineProperty(state, property, {
            //     value: action.payload.refetchPrivate,
            //     writable: true,
            //   });
            return action.payload
        },
    }
})

export const {getRefetchFunction} =  refetchSlice.actions;

export default refetchSlice.reducer;