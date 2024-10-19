import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsPersonFillAdd } from "react-icons/bs";
import { BiSolidGroup } from "react-icons/bi";

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onOpenAddContactsModal: () => void;
  onOpenGroupModal: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onOpenAddContactsModal,
  onOpenGroupModal,
}) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
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
        onClick={onOpenAddContactsModal}
        className="flex justify-start items-center gap-x-2"
        sx={{ fontSize: "1.0rem" }}
      >
        <BsPersonFillAdd size={20} />
        Add Contacts
      </MenuItem>
      <MenuItem
        onClick={onOpenGroupModal}
        className="flex justify-start items-center gap-x-2"
        sx={{ fontSize: "1.0rem" }}
      >
        <BiSolidGroup size={20} />
        Create Group
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
