import { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AvatarUploadAndReturnUrl } from "@/app/helpers/image-upload";
import { UpdateUserProfile } from "@/app/server-actions/user";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { SetCurrentUser } from "@/app/redux/userSlice";
import CircularProgress from "@mui/material/CircularProgress";

interface AvatarUpdateProps {
  onAvatarUpdated: (url: string) => void;
}


export default function AvatarUpdate({ onAvatarUpdated }: AvatarUpdateProps) {
  const { currentUserData } = useSelector((state: RootState) => state.user);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useDispatch();

  const [uploading, setUploading] = useState<boolean>(false);

  const onAvatarUpdate = async () => {
    try {
      const url = await AvatarUploadAndReturnUrl(selectedFile!);
      const response = await UpdateUserProfile(currentUserData?._id!, {
        avartar: url,
      });
      dispatch(SetCurrentUser(response));
      onAvatarUpdated(url);
      // onAvatarUpdate(url);
    } catch (error: any) {
      return {
        error: error.message,
      };
    } finally {
      setSelectedFile(null);
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div className=" my-4 tracking-wide">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        // tabIndex={-1}
        sx={{
          fontSize: 11,
          color: "white",
          backgroundColor: "#2E2E2E",
          borderColor: "#ABABAB",
          ":hover": {
            backgroundColor: "#41FF64",
            boxShadow: "none",
            fontSize: 11,
            color: "black",
            borderColor: "#ABABAB",
          },
        }}
        disabled = {uploading}
      >
        {uploading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          "Upload New Avatar"
        )}
        <VisuallyHiddenInput type="file" />
      </Button>
    </div>
  );
}
