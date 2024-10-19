import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

import { GetAllUsers } from "@/app/server-actions/user";
import { CreateNewChat } from "@/app/server-actions/chats";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

import UserMenu from "./userMenu";
import AddContactModal from "./addContactModal";
import AddGroupchatModal from "./addGroupchatModal";

export default function ChatsCreation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isClicked, setIsClicked] = useState(false);
  const [openAddContactsModal, setOpenAddContactsModal] = useState(false);
  const [openGroupModal, setOpenGroupModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<any[]>([]); // Replace 'any' with your actual user type
  const { currentUserData } = useSelector((state: RootState) => state.user);
  const { chats } = useSelector((state: RootState) => state.chat);

  useEffect(() => {
    if (openAddContactsModal) {
      const fetchUsers = async () => {
        setLoading(true);
        try {
          const response = await GetAllUsers();
          if (response.error) {
            throw new Error("No users found");
          }
          setUsers(response);
        } catch (error: any) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchUsers();
    }
  }, [openAddContactsModal]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsClicked(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setIsClicked(false);
  };

  const handleOpenAddContactsModal = () => {
    setOpenAddContactsModal(true);
    handleCloseMenu();
  };

  const handleCloseAddContactsModal = () => {
    setOpenAddContactsModal(false);
  };

  const handleOpenGroupModal = () => {
    setOpenGroupModal(true);
    handleCloseMenu();
  };

  const handleCloseGroupModal = () => {
    setOpenGroupModal(false);
  };

  const onAddToChat = async (userId: string) => {
    try {
      setLoading(true);
      const response = await CreateNewChat({
        users: [userId, currentUserData?._id],
        createdBy: currentUserData?._id,
        isGroupChat: false,
      });
      if (response.error) throw new Error(response.error.message);
      toast.success("Add new chat successfully! ");
      setOpenAddContactsModal(false);
    } catch (error: any) {
      toast.error("Failed to add the user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableElevation
        disableRipple
        sx={{
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <IoMdAddCircle
          size={38}
          className={`p-1 rounded-lg ease-in-out duration-300 ${
            isClicked
              ? "bg-black text-white"
              : "text-black hover:bg-black hover:text-white"
          }`}
        />
      </Button>

      <UserMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        onOpenAddContactsModal={handleOpenAddContactsModal}
        onOpenGroupModal={handleOpenGroupModal}
      />

      <AddContactModal
        open={openAddContactsModal}
        loading={loading}
        users={users}
        onClose={handleCloseAddContactsModal}
        onAddToChat={onAddToChat}
        currentUserData={currentUserData}
        chats={chats}
      />

      <AddGroupchatModal open={openGroupModal} onClose={handleCloseGroupModal} />

      <Toaster />
    </div>
  );
}
