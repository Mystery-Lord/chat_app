import React from 'react'
import SearchBar from '../chats-creation/searchbar'
//import AddOperation from '../chats-creation/addOperation'
import ChatsCreation from '../chats-creation/chatsCreation'


export default function ChatsListHeader() {
  return (
    <div className=' flex flex-col gap-y-2'>
      <h2 className=' p-0 m-0 text-center text-3xl' style={{fontWeight:"300"}}>My Contacts</h2>
      <div className="flex justify-between items-center">
        <SearchBar/>
        <ChatsCreation/>
        {/*<AddOperation/> old non-refactor component */}
      </div>
    </div>
  )
}
