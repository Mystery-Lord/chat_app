"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
// import { currentUser } from "@clerk/nextjs/server";
import { GetCurrentUserFromMongoDB } from "@/app/server-actions/user";
import UserInfo from "./userInfo";

interface User {
  username: string;
  formalName: string;
  avatar: string;
}

function randomColor() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#E74C3C",
    "#1ABC9C",
  ];

  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Header() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [displayUserInfo, setDisplayUserinfo] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      const response = await GetCurrentUserFromMongoDB();
      console.log(response);
      if (response.error) throw new Error(response.error);
      setCurrentUser(response);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className=" flex justify-between items-center bg-[#04A377] bg-opacity-30 border-b-2 border-b-slate-400 px-10 shadow-inner">
      <div className=" flex justify-between items-center gap-x-3 font-Heading text-[0.85rem] uppercase">
        <Image src="/soultouch-logo.png" width="60" height="43" alt="logo" />
        <h1>SoulTouch</h1>
      </div>
      <div className="flex gap-x-2 items-center justify-between">
        {currentUser ? (
          <>
            <span>Welcome, {currentUser.username}</span>
            <motion.div
              initial={false}
              animate={displayUserInfo ? "open" : "closed"}
              className="relative"
            >
              <button
                className="bg-transparent border-none rounded-full cursor-pointer p-0"
                onClick={() => setDisplayUserinfo(!displayUserInfo)}
              >
                <Avatar
                  {...stringAvatar(currentUser.formalName)}
                  sx={{
                    width: 27,
                    height: 27,
                    padding: 2,
                    bgcolor: randomColor,
                    color: "black",
                    fontWeight: "600",
                  }}
                  alt="avatar"
                />
              </button>
              <motion.div
                className="absolute top-[3.5rem] right-0 bg-white shadow-lg rounded-lg"
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: displayUserInfo ? "auto" : "none" }}
              >
                <UserInfo />
              </motion.div>
            </motion.div>
          </>
        ) : (
          <div>{error && <p className=" text-red-600">Error: {error}</p>}</div>
        )}
      </div>
    </div>
  );
}
