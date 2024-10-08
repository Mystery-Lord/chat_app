"use client";

import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MdDriveFileRenameOutline, MdOutlineMailOutline } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import Logout from "./logout";
import AvatarUpdate from "./avatar-update";
import {
  randomColor,
  stringAvatar,
  formatDate,
} from "../../utilities/userInfoStyle";
import { RootState } from "@/app/redux/store";

export default function UserInfo() {
  const { currentUserData } = useSelector((state: RootState) => state.user);
  const [displayUserInfo, setDisplayUserinfo] = useState(false);
  const [avatarBgColor, setAvatarBgColor] = useState("");
  const [avatarURL, setAvatarURL] = useState<string | null>(null);

  const handleAvatarUpdate = (newUrl: string) => {
    setAvatarURL(newUrl);
  };
  
  useEffect(() => {
    if (currentUserData) {
      setAvatarBgColor(randomColor());
      setAvatarURL(currentUserData.avatar || null);
    }
  }, [currentUserData]);

  return (
    <div className="flex gap-x-4 items-center justify-between">
      {currentUserData ? (
        <>
          <span className=" font-bold text-white text-[1.2rem] leading-tight">:) Welcome, {currentUserData.username} !</span>
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
                src={avatarURL || undefined}
                {...stringAvatar(currentUserData.formalName)}
                sx={{
                  width: 35,
                  height: 35,
                  bgcolor: avatarBgColor,
                  color: "black",
                  fontWeight: "600",
                  fontSize: 12,
                  alignItems: "center"
                }}
                alt="avatar"
              />
            </button>
            <motion.div
              className="absolute top-[3.9rem] right-[-2.0rem] w-[16rem] bg-stone-950 bg-opacity-90 text-white border-2 shadow-inner px-2 pb-4 z-10"
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
                <p className="text-lg font-bold m-2">Profile</p>
                <Avatar
                  {...stringAvatar(currentUserData.formalName)}
                  sx={{
                    width: 45,
                    height: 45,
                    bgcolor: avatarBgColor,
                    color: "black",
                    fontSize: 20,
                    fontWeight: "600",
                    alignItems: "center"
                  }}
                  alt="avatar"
                />
                <AvatarUpdate onAvatarUpdated={handleAvatarUpdate}/>
                <div className="flex flex-col justify-center items-start w-full gap-y-2 text-stone-950">
                  <div className="flex justify-between w-full tracking-tighter items-center bg-sky-300 px-2 rounded-lg text-[0.85rem]">
                    <p className=" flex items-center gap-x-1 flex-wrap ">
                      <MdDriveFileRenameOutline size={15} color="black" />
                      <strong>Name:</strong>
                    </p>
                    <p>{currentUserData.formalName}</p>
                  </div>
                  <div className="flex justify-between w-full tracking-tighter items-center bg-orange-300 px-2 rounded-lg text-[0.85rem]">
                    <p className=" flex items-center gap-x-1 flex-wrap">
                      <MdOutlineMailOutline size={15} />
                      <strong>Email:</strong>
                    </p>
                    <p>{currentUserData.email}</p>
                  </div>
                  <div className="flex justify-between w-full tracking-tighter items-center bg-purple-300 px-2 rounded-lg text-[0.85rem]">
                    <p className=" flex items-center gap-x-1 flex-wrap">
                      <BsCalendarDate size={15} />
                      <strong>Joined On:</strong>
                    </p>
                    <p>{formatDate(currentUserData.createdAt)}</p>
                  </div>
                </div>

                <Logout setDisplayUserinfo={setDisplayUserinfo} />
              </div>
            </motion.div>
          </motion.div>
        </>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
}
