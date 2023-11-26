import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Logo from "../../../../components/logo";

export const Navbar = () => {
  return (
    <>
      <div className="fixed z-50  top-0 w-full h-14  shadow-sm bg-dark flex items-center">
        <div className="flex items-center gap-x-4 ">
          <div className="hidden md:flex">
            <h1 className="text-xl font-bold">TaskManager</h1>
          </div>
          <Button
            size="sm"
            className="bg-dark_red rounded-sm hidden md:block hover:bg-dark_red hover:opacity-90"
          >
            Create
          </Button>
          <Button size="sm" className="rounded-sm block md:hidden">
            <Plus className="h-4  w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
