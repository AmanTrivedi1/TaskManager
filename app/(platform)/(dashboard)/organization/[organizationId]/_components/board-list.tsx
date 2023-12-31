import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { HelpCircle, Plus, User2, X } from "lucide-react";

import { db } from "@/lib/db";
// import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";
import { Hint } from "@/components/hint";
import { FormPopover } from "@/components/form/form-popover";

// import { MAX_FREE_BOARDS } from "@/constants/boards";
// import { getAvailableCount } from "@/lib/org-limit";
// import { checkSubscription } from "@/lib/subscription";

export const BoardList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return redirect("/select-org");
  }

  const boards = await db.board.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  //   const availableCount = await getAvailableCount();
  //   const isPro = await checkSubscription();

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-400">
        <User2 className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-brown rounded-sm h-full w-full p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-white">{board.title}</p>
          </Link>
        ))}
        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video relative h-full w-full border border-brown bg-blur-sm bg-transparent rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Create new board</p>
            {/* <span className="text-xs">
              {isPro
                ? "Unlimited"
                : `${MAX_FREE_BOARDS - availableCount} remaining`}
            </span> */}
            <Plus />
            <Hint
              sideOffset={40}
              description={`
             This is a free webapp for now , in future may be paid with 99/months only
              `}
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover>
        {/* <FormPopover sideOffset={10} side="right">
          <div className=" cursor-pointer  aspect-video relative h-full  w-full bg-dark rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition ">
            <p className="text-sm ">Create New Board</p>
            <span className="">5 Remaining</span>
            <Hint
              sideOffset={40}
              description={`
                Free Workspaces can have up to 5 open boards. For unlimited boards upgrade this workspace.
              `}
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover> */}
      </div>
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid gird-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="aspect-video bg-brown h-full w-full p-2" />
      <Skeleton className="aspect-video bg-brown h-full w-full p-2" />
      <Skeleton className="aspect-video bg-brown h-full w-full p-2" />
      <Skeleton className="aspect-video bg-brown h-full w-full p-2" />
      <Skeleton className="aspect-video bg-brown h-full w-full p-2" />
      <Skeleton className="aspect-video bg-brown h-full w-full p-2" />
      <Skeleton className="aspect-video bg-brown h-full w-full p-2" />
      <Skeleton className="aspect-video bg-brown h-full w-full p-2" />
    </div>
  );
};
