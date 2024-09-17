"use client";

import { Divider } from "@mui/material";
import ContactList from "./chat-components/chats-list";
import ChatArea from "./chat-components/chat-area";

export default function Home() {
  return (
    <div className=" flex h-[85vh]">
      <ContactList />
      <Divider orientation="vertical" flexItem className=" h-full border-gray-500 shadow-sm" />
      <ChatArea />
    </div>
  );
}
