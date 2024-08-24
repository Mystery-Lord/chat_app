import {useState} from "react";
import { Button } from "@mui/material";
import { AvatarUploadAndReturnUrl } from "@/app/helpers/image-upload";
import { UpdateUserProfile } from "@/app/server-actions/user";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { SetCurrentUser } from "@/app/redux/userSlice";



export default function AvatarUpdate() {
  const { currentUserData } = useSelector((state: RootState) => state.user);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  
  const onAvatarUpdate = async () => {
    try {
      const url = await AvatarUploadAndReturnUrl(selectedFile!);
      const response = await UpdateUserProfile(currentUserData?._id!, {avartar: url})
      dispatch(SetCurrentUser(response))
    } catch (error:any) {
      return {
        error: error.message,
      };
    } finally{
      setSelectedFile(null)
    }
  }

  return (
    <div className=" my-4 tracking-wide">
      <Button
        variant="outlined"
        sx={{
          fontSize: 11,
          color: "black",
          backgroundColor:"#A5F0DC",
          borderColor: "#ABABAB",
          ":hover": {
            backgroundColor: "#73FFCB",
            boxShadow: "none",
            fontSize: 11,
            color: "black",
            borderColor: "#ABABAB",
            
          },
        }}
      >
        Upload your avatar
      </Button>
    </div>
  );
}
