import { connectMongoDB } from "../config/dbconfig";
import UserModel from "../models/user-model";
import { currentUser, User } from '@clerk/nextjs/server';

connectMongoDB();

export const GetCurrentUserFromMongoDB = async() => {
  try {
    const clerkUser = await currentUser();

    const mongoUser = await UserModel.findOne ({clerkUserId: clerkUser?.id});
    
  } catch (error: any) {
    return{
      error: error.message
    }
  }
}