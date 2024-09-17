import React from 'react'
import ChatsListHeader from './chatsListHeader'
import ChatsList from './chatsList'

export default function ContactList() {
  return (
    <div className='w-[400px] h-full p-8'>
      <ChatsListHeader/>
      <ChatsList/>
    </div>
  )
}
