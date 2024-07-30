import {
  UserButton,
  
} from '@clerk/nextjs'
import { connectMongoDB } from './config/dbconfig';
import { GetCurrentUserFromMongoDB } from './server-actions/user';

connectMongoDB();

export default async function Home() {
  const currentUserData = await GetCurrentUserFromMongoDB();
  //console.log(currentUserData);
  
  return (
    <div className=" p-10">
      <div className='flex flex-col gap-4 text-xl'>
        <UserButton/>
        <span>Name: {currentUserData.formalName}</span>
        <span>Username: {currentUserData.username}</span>
        <span>Email: {currentUserData.email}</span>
      </div>
    </div>
  );
}
