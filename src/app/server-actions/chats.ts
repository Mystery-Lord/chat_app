"use server";

import chatModel from "../models/chat-model";

export const CreateNewChat = async (payload:any) => {
  try {
    const newChat = await chatModel.create(payload);
    return JSON.parse(JSON.stringify(newChat));
  } catch (error:any) {
    return {
      error: console.log(error)
    }
  }
}

export const GetAllChats = async (userId: string) => {
  try {
    const users = await chatModel.find({
      users: {
        $in : [userId],
      }
    });
    return JSON.parse(JSON.stringify(users));
  } catch (error:any) {
    return {
      error: error.message
    }
  }
}
