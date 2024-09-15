"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetCurrentUser } from "@/app/redux/userSlice";
import { GetCurrentUserFromMongoDB } from "@/app/server-actions/user";

const FetchUser = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await GetCurrentUserFromMongoDB();
        if (response.error) throw new Error(response.error);
        dispatch(SetCurrentUser(response));
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [dispatch]);

  return null;
};

export default FetchUser;
