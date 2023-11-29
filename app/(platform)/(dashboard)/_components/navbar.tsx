import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <>
      <div className="md:max-w-screen-xl  pb-2 border-brown border-b mt-4 mx-auto flex items-center w-full justify-between">
        <div className="flex items-start">
          <MobileSidebar />
          <div className="">
            <Button
              size="sm"
              variant="primary"
              className=" xl:ml-0 ml-2  rounded-sm hidden md:block  hover:opacity-90"
            >
              Create
            </Button>
            <Button
              size="sm"
              className=" hover:bg-brown hover:text-neutral-400  lg:ml-0 ml-2 rounded-sm block md:hidden"
            >
              <Plus className="h-4  w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center shadow-sm  shadow-dark_red/90 px-1    rounded-lg gap-x-1 xl:ml-0 mr-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBpx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
