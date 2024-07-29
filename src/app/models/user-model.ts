import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      require: true,
      unique: true,
    },
    formalName: {
      type: String,

    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    profilePicture: {
      type: String,
      required: false
    },
    bio: {
      type: String,
      required: false
    }
  },
  {timestamps: true}
);

if (mongoose.models && mongoose.models["users"]) {
  mongoose.deleteModel("users");
}

const UserModel = mongoose.model("users", schema);
export default UserModel;