import { deleteBoard } from "@/actions/delete-board";

import FormDelete from "./form-delet";

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <>
      <form action={deleteBoardWithId} className="flex items-center gap-x-2 ">
        <p className="line-clamp-2 sm:text-base text-sm">Board Name: {title}</p>
        <FormDelete />
      </form>
    </>
  );
};
