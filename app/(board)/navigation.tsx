"use client";

import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const BoardNavigation = ({ boardName }: { boardName: string }) => {
  const pathname = usePathname();

  return (
    <div className="mt-8 flex items-center text-gray-9 relative border-t 2xl:-mx-8 mx-auto justify-center">
      {/* <MoveLeft className="left-0 absolute" /> */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Link
          href={`/${boardName}/${i}`}
          key={i}
          className={cn(
            "border-t-2  p-4 -mt-[1px] border-transparent transition-colors hover:border-gray-8",
            pathname.endsWith(i.toString()) &&
              "font-bold  border-t-2 border-dksh-500   hover:border-dksh-500 text-dksh-500"
          )}
        >
          {i}
        </Link>
      ))}
      {/* <MoveRight className="right-0 absolute" /> */}
    </div>
  );
};

export default BoardNavigation;
