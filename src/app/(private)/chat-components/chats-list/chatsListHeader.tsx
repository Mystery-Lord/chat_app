import React from 'react'
import SearchBar from '../functional-section/searchbar'
import AddOperation from '../functional-section/addOperation'


export default function ChatsListHeader() {
  return (
    <div className=' flex flex-col gap-y-2'>
      <h2 className=' p-0 m-0 text-center'>My Contacts</h2>
      <div className="flex justify-between items-center">
        <SearchBar/>
        <AddOperation/>
      </div>
    </div>
  )
}
