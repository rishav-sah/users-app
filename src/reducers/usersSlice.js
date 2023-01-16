import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (thunkAPI) => {
  console.log(thunkAPI);
  const res = await axios.get("https://randomuser.me/api/?results=12");
  return res?.data?.results;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    listOfUsers: [],
    error: "",
  },
  reducers: {
    getItems: (state) => {
      console.log(state)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfUsers = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.listOfUsers = [];
      state.error = action.error.message;
    });
  }
});

export const { getItems } = usersSlice.actions;
export default usersSlice.reducer;