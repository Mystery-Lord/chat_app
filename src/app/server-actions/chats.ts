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
