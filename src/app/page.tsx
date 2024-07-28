import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  
} from '@clerk/nextjs'
import { connectMongoDB } from './config/dbconfig';

connectMongoDB();

export default function Home() {
  return (
    <div className=" p-10">
        <UserButton />
    </div>
  );
}
