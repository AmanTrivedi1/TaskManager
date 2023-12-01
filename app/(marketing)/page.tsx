import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div
          className={cn(
            "flex items-center justify-center flex-col",
            headingFont.className
          )}
        >
          <div className="mb-4 gap-x-2 text-neutral-300 border-neutral-400 rounded-full uppercase flex items-center border shadow-sm px-4 py-2 ">
            <Image
              width={20}
              height={20}
              sizes="100vw"
              src="/medal.svg"
              alt="medalimage"
            />
            <h1>Manage all your task</h1>
          </div>
          <h1 className="text-4xl md:text-5xl text-center text-lime-50">
            I will help you to manage your task
          </h1>
          <div
            className="md:text-5xl text-4xl p-4 text-center font-bold text-dark_red
            "
          >
            Work Forward
          </div>
        </div>

        <p className={cn("text-xs text-center max-w-md text-neutral-100")}>
          Revolutionize your productivity with our intuitive task manager
          website, designed to streamline and organize your daily tasks
          effortlessly. Stay on top of your goals and deadlines with our
          user-friendly interface, making task management a breeze
        </p>
        <Button
          asChild
          size="sm"
          className=" mt-2   sm:text-base text-xs  bg-gradient-to-br from-[#16E370] to-[#096BDE] sm:py-6 py-4 text-white sm:px-6 px-4  mr-4 sm:mr-20"
        >
          <Link href="/sign-up">
            Get it for free <FaArrowRight className="text-xl ml-2" />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default MarketingPage;
