import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: Record<string, any>;
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Input
        disabled={pending}
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className=""
      />

      {errors?.title ? (
        <div>
          {errors?.title.map((error: string) => (
            <p key={error} className="text-rose-400 text-xs ">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
};
