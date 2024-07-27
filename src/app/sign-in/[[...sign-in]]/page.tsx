import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex bg-primary h-screen items-center justify-center">
      <SignIn />
    </div>
    
  )
  
}