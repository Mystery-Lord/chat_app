import React from "react";
import { Modal, Fade, Box, Typography, Backdrop } from "@mui/material";

interface AddGroupchatModalProps {
  open: boolean;
  onClose: () => void;
}

const AddGroupchatModal: React.FC<AddGroupchatModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      aria-labelledby="transition-group-modal-title"
      aria-describedby="transition-group-modal-description"
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
            p: 4,
          }}
        >
          <Typography
            id="transition-group-modal-title"
            variant="h6"
            component="h2"
          >
            Create a New Group
          </Typography>
          <Typography id="transition-group-modal-description" sx={{ mt: 2 }}>
            Please fill in the group details.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddGroupchatModal;
