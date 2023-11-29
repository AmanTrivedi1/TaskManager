"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(4, {
    message: "Minimum Length of 4 letters is required",
  }),
});

export async function create(prevState: State, formData: FormData) {
  console.log("I am server components");

  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }
  const { title } = validatedFields.data;
  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Database error",
    };
  }

  revalidatePath("/organization/org_2YqGxpWPSetK9muLrAn1v6YYn8I");
  redirect("/organization/org_2YqGxpWPSetK9muLrAn1v6YYn8I");
}
