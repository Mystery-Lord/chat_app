"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import UserInfo from "./userInfo";

export default function Header() {
  return (
    <div className=" flex justify-between items-center bg-[#04A377] bg-opacity-30 border-b-2 border-b-slate-400 px-10 shadow-inner">
      <div className=" flex justify-between items-center gap-x-3 font-Heading text-[0.85rem] uppercase">
        <Image src="/soultouch-logo.png" width="60" height="43" alt="logo" />
        <h1>SoulTouch</h1>
      </div>
      <UserInfo/>
    </div>
  );
}
