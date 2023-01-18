import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsByUserIdAction } from "./postsAPI";

const initialState = {
  list: [],
  status: "idle",
};

export const getPosts = createAsyncThunk("posts/getPostsByUserIdAction", async (id) => {
  try {
    const data = await getPostsByUserIdAction(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = action.payload;
      });
  },
});

export const selectPosts = (state) => state.posts.list;

export const selectStatus = (state) => state.posts.status;

export default postsSlice.reducer;
