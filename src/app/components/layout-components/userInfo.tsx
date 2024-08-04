"use client";

import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { UserTypes } from "@/app/interfaces/user";
import { GetCurrentUserFromMongoDB } from "@/app/server-actions/user";
import Logout from "./logout";
import {
  randomColor,
  stringAvatar,
  formatDate,
} from "../../utilities/userInfoStyle";
import { motion } from "framer-motion";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

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
                  width: 35,
                  height: 35,
                  bgcolor: avatarBgColor,
                  color: "black",
                  fontWeight: "600",
                  fontSize: 15,
                }}
                alt="avatar"
              />
            </button>
            <motion.div
              className="absolute top-[3.3rem] right-[-2.5rem] w-[20rem] bg-[#cfe8e4] bg-opacity-70 border-2 shadow-inner px-4 pb-4 z-10"
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
                <p className="text-2xl font-bold">Profile</p>
                <Avatar
                  {...stringAvatar(currentUser.formalName)}
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: avatarBgColor,
                    color: "black",
                    fontSize: 25,
                    fontWeight: "600",
                  }}
                  alt="avatar"
                />
                <div className="flex flex-col justify-center items-start w-full gap-y-2 mt-6">
                  <div className="flex justify-between w-full tracking-tighter items-center bg-sky-300 px-2 rounded-lg">
                    <p className=" flex items-center gap-x-1">
                      <MdDriveFileRenameOutline size={20}/>
                      <strong>Name:</strong>
                    </p>
                    <p>{currentUser.formalName}</p>
                  </div>
                  <div className="flex justify-between w-full tracking-tighter items-center bg-orange-300 px-2 rounded-lg">
                    <p className=" flex items-center gap-x-1">
                      <MdOutlineMailOutline size={20}/>
                      <strong>Email:</strong>
                    </p>
                    <p>{currentUser.email}</p>
                  </div>
                  <div className="flex justify-between w-full tracking-tighter items-center bg-purple-300 px-2 rounded-lg">
                    <p className=" flex items-center gap-x-1">
                      <BsCalendarDate size={20}/>
                      <strong>Joined On:</strong>
                    </p>
                    <p>{formatDate(currentUser.createdAt)}</p>
                  </div>
                </div>
                
                <Logout setDisplayUserinfo={setDisplayUserinfo}/>
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
