import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button
        disabled={pending}
        className="ml-2 px-5 py-5"
        type="submit"
        variant="custom"
        size="sm"
      >
        Submit
      </Button>
    </>
  );
};

export default FormButton;
