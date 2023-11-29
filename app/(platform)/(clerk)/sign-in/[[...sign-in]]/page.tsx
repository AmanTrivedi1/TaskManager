import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="bg-heropattern bg-red-500">
        <SignIn />
      </div>
    </>
  );
}
