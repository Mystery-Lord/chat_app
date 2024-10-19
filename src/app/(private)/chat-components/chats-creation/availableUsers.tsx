import React from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

import { UserTypes } from "@/app/interfaces/types";

interface AvailableUsersProps {
  user: UserTypes;
  isLoading: boolean;
  onAddToChat: (userId: string) => void;
}

const AvailableUsers: React.FC<AvailableUsersProps> = ({ user, isLoading, onAddToChat }) => {
  return (
    <div
      key={user._id}
      className="flex justify-between items-center bg-black px-4 py-2 rounded-lg shadow-md"
    >
      <span className="text-white">{user.username}</span>
      <div className="flex justify-between items-center gap-x-4">
        <button
          onClick={() => onAddToChat(user._id)}
          disabled={isLoading}
          className="bg-transparent shadow-none border-none rounded-lg text-white hover:cursor-pointer hover:bg-white hover:text-black shake-on-hover"
        >
          <BsPersonFillAdd size={20} />
        </button>
        <button className="bg-transparent shadow-none border-none rounded-lg text-white hover:cursor-pointer hover:bg-white hover:text-black shake-on-hover">
          <ImProfile size={20} />
        </button>
      </div>
    </div>
  );
};

export default AvailableUsers;
