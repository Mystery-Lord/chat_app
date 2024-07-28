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
    {
      
    }
  },
  {timestamps: true}
)