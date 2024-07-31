import React from 'react'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'

import { GoSidebarCollapse } from "react-icons/go";

export default function Header() {
  return (
    <div className=' flex justify-between items-center bg-[#04A377] bg-opacity-30 border-b-2 px-10 shadow-inner'>
      <button className='bg-transparent border-none rounded-md hover:bg-[#05AB7D] p-2 transition ease-in-out duration-150 cursor-pointer'>
        <GoSidebarCollapse size={30}/>
      </button>
      <div className=' flex justify-between items-center gap-x-3 font-Heading text-[0.85rem] uppercase'>
        <Image src="/soultouch-logo.png" width="60" height="43" alt='logo'/>
        <h1>
          SoulTouch
        </h1>
      </div>
      <div >
        <UserButton/>
      </div>
      
    </div>
  )
}
