import React from "react";
import { Button } from "@mui/material";
import { useClerk } from "@clerk/nextjs";
import Router from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import { LogoutProps } from "@/app/interfaces/logout";

const Logout: React.FC<LogoutProps> = ({ setDisplayUserinfo }) => {
  const { signOut } = useClerk();
  
  const onLogOut = async () => {
    try {
      setDisplayUserinfo(false);
      await signOut();
      toast.success("Logged out successfully!");
      Router.push("/sign-in");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-4 text-[0.8rem]">
      <Button
        variant="contained"
        onClick={onLogOut}
        sx={{
          fontSize: 11,
          backgroundColor: "red",
          boxShadow: 0,
          ":hover": {
            backgroundColor: "red",
            boxShadow: "none",
            fontSize: 11,
            color: "black"
          },
        }}
      >
        Logout
      </Button>
      <Toaster />
    </div>
  );
};

export default Logout;
