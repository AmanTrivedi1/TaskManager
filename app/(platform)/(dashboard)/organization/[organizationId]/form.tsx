"use client";

import { create } from "@/actions/create-board";

import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import FormButton from "./form-button";

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);
  return (
    <form action={dispatch}>
      <div className="flex flex-row items-center justify-center">
        <FormInput errors={state?.errors} />
        <FormButton />
      </div>
    </form>
  );
};
