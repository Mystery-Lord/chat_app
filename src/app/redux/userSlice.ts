import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUserData: null,
    currentUserId: "",
  },
  reducers: {
    SetCurrentUser: (state, action) => {
      state.currentUserData = action.payload;
    },
    SetCurrentUserId: (state, action) => {
      state.currentUserId = action.payload;
    }
  }
});

export const { SetCurrentUser, SetCurrentUserId } = userSlice.actions;
export default userSlice.reducer;
