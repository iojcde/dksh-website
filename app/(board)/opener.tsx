"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Opener = ({ boardName }: { boardName: string }) => {
  const router = useRouter();
  useEffect(() => {
    document.fnView = (boardName: string, nttId: number) => {
      router.push(`/${boardName}/${nttId}`);
    };
  });

  return <></>;
};
