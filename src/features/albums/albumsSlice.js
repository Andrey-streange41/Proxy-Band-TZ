import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAlbumsByUserIdAction } from "./albumsAPI";

const initialState = {
  list: [],
  status: "idle",
};

export const getAlbums = createAsyncThunk("albums/getAlbumsByUserIdAction", async (id) => {
  try {
    const data = await getAlbumsByUserIdAction(id);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAlbums.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAlbums.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = [...action.payload];
      });
  },
});

export const selectAlbums = (state) => state.albums.list;
export  const selectLoading = (state) => state.albums.status;

export default albumsSlice.reducer;
