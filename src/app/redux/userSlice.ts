import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTypes } from "../interfaces/types";
import { User } from "@clerk/nextjs/server";

export interface ReduxUserTypes {
  currentUserData: UserTypes | null;
  currentUserId: string;
}

const initialState: ReduxUserTypes = {
  currentUserData: null,
  currentUserId: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SetCurrentUser: (state, action: PayloadAction<UserTypes>) => {
      state.currentUserData = action.payload;
    },
    SetCurrentUserId: (state, action: PayloadAction<string>) => {
      state.currentUserId = action.payload;
    }
  }
});

export const { SetCurrentUser, SetCurrentUserId } = userSlice.actions;
export default userSlice.reducer;
