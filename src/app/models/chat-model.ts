import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    users: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "users",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    admins: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "users",
    },
    groupName: {
      type: String,
      default: "",
    },
    groupDescription: {
      type: String,
      default: "",
    },
    groupProfileImage: {
      type: String,
      default: "",
    },
  },
  {timestamps: true}
);

if (mongoose.models && mongoose.models["chats"]) {
  mongoose.deleteModel("chats");
}

const chatModel = mongoose.model("chats", chatSchema);

export default chatModel;