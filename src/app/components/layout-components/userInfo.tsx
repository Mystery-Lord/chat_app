"use client";

import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { UserTypes } from "@/app/interfaces/user";
import { GetCurrentUserFromMongoDB } from "@/app/server-actions/user";
import {
  randomColor,
  stringAvatar,
  formatDate,
} from "../../utilities/userInfoStyle";
import { motion } from "framer-motion";

export default function UserInfo() {
  const [currentUser, setCurrentUser] = useState<UserTypes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [displayUserInfo, setDisplayUserinfo] = useState(false);
  const [avatarBgColor, setAvatarBgColor] = useState<string>("");

  const fetchCurrentUser = async () => {
    try {
      const response = await GetCurrentUserFromMongoDB();
      if (response.error) throw new Error(response.error);
      setCurrentUser(response);
      console.log(response);
      setAvatarBgColor(randomColor());
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className="flex gap-x-4 items-center justify-between">
      {currentUser ? (
        <>
          <span className=" font-bold">Welcome, {currentUser.username}</span>
          <motion.div
            initial={false}
            animate={displayUserInfo ? "open" : "closed"}
            className="relative"
          >
            <button
              className="bg-transparent border-none rounded-full cursor-pointer p-0 inset-0"
              onClick={() => setDisplayUserinfo(!displayUserInfo)}
            >
              <Avatar
                {...stringAvatar(currentUser.formalName)}
                sx={{
                  width: 27,
                  height: 27,
                  padding: 2,
                  bgcolor: avatarBgColor,
                  color: "black",
                  fontWeight: "600",
                }}
                alt="avatar"
              />
            </button>
            <motion.div
              className="absolute top-[3.4rem] right-[-2.5rem] w-64 bg-[#04A377] bg-opacity-30 border-b-2 shadow-inner px-4 pb-2 z-10"
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  y: -20,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{ pointerEvents: displayUserInfo ? "auto" : "none" }}
            >
              <div className="flex flex-col justify-center items-center ">
                <h2 className="text-2xl font-bold mb-2">Profile</h2>
                <Avatar
                  {...stringAvatar(currentUser.formalName)}
                  sx={{
                    width: 70,
                    height: 70,
                    bgcolor: avatarBgColor,
                    color: "black",
                    fontSize: 40,
                    fontWeight: "600",
                  }}
                  alt="avatar"
                />
                <div className="flex flex-col justify-center items-start w-full gap-y-1">
                  <div className="flex justify-between w-full border-b-2">
                    <p><strong>Name:</strong></p>
                    <p>{currentUser.formalName}</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p><strong>Email:</strong></p>
                    <p>{currentUser.email}</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p><strong>Joined On:</strong></p>
                    <p>{formatDate(currentUser.createdAt)}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      ) : (
        <div>{error && <p className="text-red-600">Error: {error}</p>}</div>
      )}
    </div>
  );
}
