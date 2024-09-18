import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdAddCircle } from "react-icons/io";
import { BsPersonFillAdd } from "react-icons/bs";
import { BiSolidGroup } from "react-icons/bi";
import { Modal, Fade, Box, Typography, Backdrop } from "@mui/material";

export default function AddOperation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [openAddContactsModal, setOpenAddContactsModal] = useState(false);
  const [openGroupModal, setOpenGroupModal] = useState(false);
  const open = Boolean(anchorEl);

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

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleOpenAddContactsModal}
          className="flex justify-start items-center gap-x-2"
          sx={{ fontSize: "0.87rem" }}
        >
          <BsPersonFillAdd size={20} />
          Add Contacts
        </MenuItem>
        <MenuItem
          onClick={handleOpenGroupModal}
          className="flex justify-start items-center gap-x-2"
          sx={{ fontSize: "0.87rem" }}
        >
          <BiSolidGroup size={20} />
          Create Group
        </MenuItem>
      </Menu>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAddContactsModal}
        onClose={handleCloseAddContactsModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={openAddContactsModal}>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add a New Contact
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Please fill in the contact details.
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-group-modal-title"
        aria-describedby="transition-group-modal-description"
        open={openGroupModal}
        onClose={handleCloseGroupModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={openGroupModal}>
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
            <Typography id="transition-group-modal-title" variant="h6" component="h2">
              Create a New Group
            </Typography>
            <Typography id="transition-group-modal-description" sx={{ mt: 2 }}>
              Please fill in the group details.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
