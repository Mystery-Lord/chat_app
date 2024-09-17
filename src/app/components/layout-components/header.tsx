import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import UserInfo from "./userInfo";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathName = usePathname();
  const isPublicRoute =
    pathName.includes("sign-in") || pathName.includes("sign-up");
  //const [route, setRoute] = useState<boolean>(true);
  if (isPublicRoute) return null;

  // useEffect(() => {
  //   if (isPublicRoute) {
  //     setRoute(true);
  //   }
  // }, [route]);

  // if (route) {
  //   return null;
  // }
  return (
    <div className=" flex justify-between items-center bg-stone-950 bg-opacity-90 border-b-8 border-b-slate-200 px-8 shadow-inner">
      <Link href="/" className=" no-underline">
        <div className=" flex justify-between items-center gap-x-1 font-Heading text-[0.85rem] uppercase text-white">
          <Image
            src="/soultouch-logo.svg"
            width="45"
            height="45"
            alt="logo"
            color="white"
          />
          <h1>SoulTouch</h1>
        </div>
      </Link>
      <UserInfo />
    </div>
  );
}
