import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <>
      <div className="md:max-w-screen-xl  pb-4 border-brown border-b mt-4 mx-auto flex items-center w-full justify-between">
        <div className="">
          <Button
            size="sm"
            variant="primary"
            className=" xl:ml-0 ml-2 rounded-sm hidden md:block  hover:opacity-90"
          >
            Create
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="  lg:ml-0 ml-2 rounded-sm block md:hidden"
          >
            <Plus className="h-4  w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-x-1 xl:ml-0 mr-2">
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
                  height: 40,
                  width: 40,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
