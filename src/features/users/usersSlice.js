import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsersAction } from "./usersAPI";

const initialState = {
  list: [],
  status: "idle",
};

export const getUsers = createAsyncThunk("users/getUsersAction", async () => {
  try {
    const data = await getUsersAction();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = [...action.payload];
      });
  },
});

export const selectUsers = (state) => state.users.list;
export  const selectLoading = (state) => state.users.status;

export default usersSlice.reducer;
