import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="sm:bg-deskstop  bg-mobile ">
        <SignUp />
      </div>
    </>
  );
}
