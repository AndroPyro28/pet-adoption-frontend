import {createSlice, current} from "@reduxjs/toolkit";
const initialState =  {
    id: '',
    title: '',
    content: '',
    path: '',
    photos: [],
}

const blogSlice = createSlice({
    name: "blog",
    initialState,

    reducers: {
        getForUpdateBlog: (state, action) => {
             return action.payload
        },
        remove: (state, action) => {
            return initialState
        }
    }
})

export const {getForUpdateBlog, remove} =  blogSlice.actions;

export default blogSlice.reducer;