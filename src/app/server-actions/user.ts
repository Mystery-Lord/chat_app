"use server";

import { connectMongoDB } from "../config/dbconfig";
import UserModel from "../models/user-model";
import { currentUser, User } from "@clerk/nextjs/server";

connectMongoDB();

export const GetCurrentUserFromMongoDB = async () => {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      throw new Error("No current user found");
    }

    const mongoUser = await UserModel.findOne({ clerkUserId: clerkUser?.id });
    if (mongoUser) {
      return JSON.parse(JSON.stringify(mongoUser));
    }

    const formalName = `${clerkUser.firstName?.toUpperCase()} ${clerkUser.lastName?.toUpperCase()}`;
    const username = clerkUser.username || formalName;

    const newUserProps = {
      clerkUserId: clerkUser?.id,
      formalName: formalName,
      username: username,
      email: clerkUser?.emailAddresses[0]?.emailAddress || "",
      avartar: clerkUser?.imageUrl,
    };

    const newUser = await UserModel.create(newUserProps);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const UpdateUserProfile = async (userId: string, payload: any) => {
  try {
    const updateUser = await UserModel.findByIdAndUpdate(userId, payload, {
      new: true,
    });
    return JSON.parse(JSON.stringify(updateUser));
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const GetAllUsers = async () => {
  try {
    const users = await UserModel.find({});
    return JSON.parse(JSON.stringify(users));
  } catch (error:any) {
    return {
      error: error.message,
    }
  };
}