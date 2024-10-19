import React from "react";
import { Modal, Fade, Box, Typography, Backdrop, CircularProgress } from "@mui/material";
import AvailableUsers from "./availableUsers";
import { UserTypes } from "@/app/interfaces/types";
import SearchBar from "./searchbar";

interface AddContactModalProps {
  open: boolean;
  loading: boolean;
  users: UserTypes[];
  onClose: () => void;
  onAddToChat: (userId: string) => void;
  currentUserData: any; 
  chats: any[]; 
}

const AddContactModal: React.FC<AddContactModalProps> = ({
  open,
  loading,
  users,
  onClose,
  onAddToChat,
  currentUserData,
  chats,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            paddingX: 2,
            paddingY: 4,
            borderRadius: 4,
            justifyContent: "center",
          }}
        >
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: 300,
            }}
          >
            Add Contacts
          </Typography>
          <SearchBar/>
          {loading && (
            <div className="flex justify-center items-center mt-2">
              <CircularProgress />
            </div>
          )}
          {!loading && (users?.length ?? 0) > 0 && (
            <div className="flex flex-col gap-y-2 text-[1.0rem] mt-2">
              {users.map((user) => {
                const userExistsInChats = chats.some(
                  (ch) => ch.createdBy._id === user._id
                );

                if (user._id === currentUserData?._id || userExistsInChats) {
                  return null;
                }

                return (
                  <AvailableUsers
                    key={user._id}
                    user={user}
                    isLoading={loading}
                    onAddToChat={onAddToChat}
                  />
                );
              })}
            </div>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddContactModal;
