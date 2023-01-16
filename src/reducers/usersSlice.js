import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get("https://randomuser.me/api/?results=12");
  return res?.data?.results;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    listOfUsers: [],
    filteredUsers: [],
    error: "",
  },
  reducers: {
    searchUsers: (state, action) => {
      state.filteredUsers = state.listOfUsers.filter((user) => {
        for (const value of Object.values(user)) {
          if (value.toString().toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())) return true;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfUsers = action.payload;
      state.filteredUsers = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.listOfUsers = [];
      state.error = action.error.message;
    });
  },
});

export const { searchUsers } = usersSlice.actions;

export default usersSlice.reducer;