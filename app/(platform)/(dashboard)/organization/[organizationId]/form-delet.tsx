"use client";
import { MdDelete } from "react-icons/md";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const FormDelete = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button
        className="px-4 py-2 bg-dark_red  hover:shadow-dark_red text-neutral-100 hover:shadow-md  "
        disabled={pending}
        size="sm"
        variant="custom"
      >
        <MdDelete className="text-xl" />
      </Button>
    </>
  );
};

export default FormDelete;
