import { mongo } from "mongoose";
import { connectMongoDB } from "../config/dbconfig";
import UserModel from "../models/user-model";
import { currentUser, User } from '@clerk/nextjs/server';

connectMongoDB();

export const GetCurrentUserFromMongoDB = async() => {
  try {
    const clerkUser = await currentUser();

    const mongoUser = await UserModel.findOne ({clerkUserId: clerkUser?.id});
    if (mongoUser) {
      return JSON.parse(JSON.stringify(mongoUser))
    }

    const newUserProps = {
      clerkUserId: clerkUser?.id,
      formalName: clerkUser?.firstName + " " + clerkUser?.lastName,
      username: clerkUser?.username,
      email: clerkUser?.emailAddresses[0]?.emailAddress || "",
      avartar: clerkUser?.imageUrl
    }

    const newUser = await UserModel.create(newUserProps);
    
    return JSON.parse(JSON.stringify(newUser))
    
  } catch (error: any) {
    return{
      error: error.message
    }
  }
}