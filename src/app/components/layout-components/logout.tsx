import React from "react";
import { Button } from "@mui/material";

export default function Logout() {
  return (
    <div className=" mt-6">
      <Button
        variant="contained"
        sx={{
          ":hover": {
            backgroundColor: "red",
          },
        }}
      >
        Logout
      </Button>
    </div>
  );
}
