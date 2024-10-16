import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllChats } from "@/app/server-actions/chats";
import { RootState } from "@/app/redux/store";
import { SetChats } from "@/app/redux/chatSlice";

export default function ChatsList() {
  const dispatch = useDispatch();
  const { currentUserData } = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const getChats = useCallback(async () => {
    try {
      setLoading(true);
      const response = await GetAllChats(currentUserData?._id!);
      //console.log(response);
      if (response.error) throw new Error(response.error);
      dispatch(SetChats(response));
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [currentUserData, dispatch]);

  useEffect(() => {
    getChats();
  }, [getChats]);

  return <div>ChatsList</div>;
}
