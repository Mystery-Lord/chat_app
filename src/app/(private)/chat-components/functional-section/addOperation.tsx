import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CircularProgress } from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import { BsPersonFillAdd } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { BiSolidGroup } from "react-icons/bi";
import { Modal, Fade, Box, Typography, Backdrop } from "@mui/material";
import { GetAllUsers } from "@/app/server-actions/user";
import { UserTypes } from "@/app/interfaces/types";
import SearchBar from "./searchbar";

export default function AddOperation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [openAddContactsModal, setOpenAddContactsModal] = useState(false);
  const [openGroupModal, setOpenGroupModal] = useState(false);
  const [users, setUsers] = useState<UserTypes[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (openAddContactsModal) {
      const fetchUsers = async () => {
        setLoading(true);
        try {
          const response = await GetAllUsers();
          if (response.error) {
            throw new Error("No users found");
          }
          console.log(response);
          setUsers(response);
        } catch (error: any) {
          setError(error.message);
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
          sx={{ fontSize: "1.0rem" }}
        >
          <BsPersonFillAdd size={20} />
          Add Contacts
        </MenuItem>
        <MenuItem
          onClick={handleOpenGroupModal}
          className="flex justify-start items-center gap-x-2"
          sx={{ fontSize: "1.0rem" }}
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
              paddingX: 2,
              paddingY: 4,
              borderRadius: 4,
              justifyContent: "center"
            }}
          >
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: 300
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
                {users?.map((user) => (
                  <div
                    key={user._id}
                    className=" flex justify-between items-center bg-black px-4 py-2 rounded-lg shadow-md"
                  >
                    {/*
                      <Image src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                    */}
                    <span className=" text-white">{user.username}</span>
                    <div className="flex justify-between items-center gap-x-4">
                      <button className=" bg-transparent shadow-none border-none hover:cursor-pointer shake-on-hover">
                        <BsPersonFillAdd color="white" size={20}/>
                      </button>
                      <button className=" bg-transparent shadow-none border-none hover:cursor-pointer shake-on-hover">
                        <ImProfile color="white" size={20}/>
                      </button>
                      
                    </div>
                    
                  </div>
                ))}
              </div>
            )}
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
    </div>
  );
}
