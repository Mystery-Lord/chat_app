import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatTypes } from '../interfaces/types';


export interface ChatState {
  chats: ChatTypes[];
}

const initialState: ChatState = {
  chats: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    SetChats: (state, action: PayloadAction<ChatTypes[]>) => {
      state.chats = action.payload;
    }
  }
});

export const { SetChats } = chatSlice.actions;
export default chatSlice.reducer;

