"use client";

import React from "react";
import Image from "next/image";
import UserInfo from "./userInfo";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const isPublicRoute = pathName.includes("sign-in") || pathName.includes("sign-up");

  if (isPublicRoute) {
    return null;
  }

  return (
    <div className=" flex justify-between items-center bg-[#bedddc] bg-opacity-70 border-b-2 border-b-slate-400 px-10 shadow-inner">
      <div className=" flex justify-between items-center gap-x-3 font-Heading text-[0.85rem] uppercase">
        <Image src="/soultouch-logo.png" width="60" height="43" alt="logo" />
        <h1>SoulTouch</h1>
      </div>
      <UserInfo/>
    </div>
  );
}
