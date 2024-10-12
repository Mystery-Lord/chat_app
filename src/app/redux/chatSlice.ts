import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ChatState {
  chats: string[];
}

const initialState: ChatState = {
  chats: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    SetChats: (state, action: PayloadAction<string[]>) => {
      state.chats = action.payload;
    }
  }
});

export const { SetChats } = chatSlice.actions;
export default chatSlice.reducer;

