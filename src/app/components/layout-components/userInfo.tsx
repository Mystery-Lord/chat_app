import React from 'react';
import { Avatar } from '@mui/material';

export default function UserInfo() {
  return (
    <div className='flex flex-col justify-center items-center p-3'>
      <h2 className='text-xl font-bold mb-4'>Profile</h2>
      <Avatar 
        alt="User Profile Picture" 
        src="/path-to-profile-picture.jpg" // replace with the actual path to the profile picture
        sx={{ width: 50, height: 50, mb: 2 }}
      />
      <div className='flex flex-col justify-center items-start w-full'>
        <p><strong>Name:</strong> Messi L</p>
        <p><strong>Id:</strong> 6598e9f9b33a93f3392a7a6e</p>
        <p><strong>Joined On:</strong> 06 Jan 2024 11:19 AM</p>
      </div>
    </div>
  );
}
