import { SignUp} from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex bg-auth h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}
