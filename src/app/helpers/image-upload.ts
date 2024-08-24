import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import firebaseDB from "../config/firebase-config";

export const AvatarUploadAndReturnUrl = async (file: File) => {
  try {
    const storage = getStorage(firebaseDB);
    const storageRef = ref(storage, "images" + "/" + file.name);
    const uploadedImageResponse = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(uploadedImageResponse.ref);
    return downloadURL;
    
  } catch (error:any) {
    throw new Error(error.message);
  }
}

