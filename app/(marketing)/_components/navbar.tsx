import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
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
            className="   sm:flex hidden sm:text-base text-xs  bg-gradient-to-br from-[#16E370] to-[#096BDE] sm:py-6 py-4 text-white sm:px-6 px-4  mr-4 sm:mr-20"
          >
            <Link href="/sign-up">
              Signup for management <FaArrowRight className="text-xl ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};
