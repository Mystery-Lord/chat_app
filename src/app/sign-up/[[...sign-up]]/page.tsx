import { SignUp} from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex bg-signin h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}
