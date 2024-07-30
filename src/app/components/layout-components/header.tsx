import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className=' flex justify-between items-center bg-[#A5F0DC] bg-opacity-75 border-b-2 rounded-lg py-2 px-4 '>
      <div className=' flex justify-between items-center gap-x-3 header-logo'>
        <Image src="/soultouch-logo.png" width="63" height="45" alt='logo'/>
        <h1>
          SoulTouch
        </h1>
      </div>
      
    </div>
  )
}
