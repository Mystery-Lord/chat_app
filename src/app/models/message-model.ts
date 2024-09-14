import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chats",
      require: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
    text: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    readBy: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "users",
      require: true,
    },
  },
  {timestamps: true}
);

if (mongoose.models && mongoose.models["messages"]) {
  mongoose.deleteModel("messages");
}

const chatModel = mongoose.model("messages", messageSchema);

export default chatModel;