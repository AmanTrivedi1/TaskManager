import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div
        className="fixed top-0 pt-10 w-full h-14 
      flex items-center"
      >
        <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
          <Logo />
        </div>
        <div>
          <Button
            asChild
            size="sm"
            className="border-neutral-400 text-neutral-400 border px-4  mr-4 sm:mr-20"
          >
            <Link href="/sign-up">Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
