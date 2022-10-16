import {createSlice, current} from "@reduxjs/toolkit";
import { Blog } from "../models/Blog";
const initialState =  {
    id: '',
    title: '',
    content: '',
    path: '',
    photos: [],
    isUpdate: false,
    isUpload: false
}

const blogSlice = createSlice({
    name: "blog",
    initialState: <Blog> initialState,

    reducers: {
        getForUpdateBlog: (state, action) => {
            // state = JSON.parse(JSON.stringify(current(state)));
             return { 
                ...action.payload,
                isUpdate: true,
                isUpload: false
            }
        },
        remove: (state, action) => {
            return 
        }
    }
})

export const {getForUpdateBlog} =  blogSlice.actions;

export default blogSlice.reducer;