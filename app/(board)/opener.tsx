"use client";

declare global {
  interface Document {
    fnView: any;
  }
}

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Opener = ({ boardName }: { boardName: string }) => {
  const router = useRouter();
  useEffect(() => {
    document.fnView = (nttId: number) => {
      router.push(`/${boardName}/${nttId}`);
    };
  });

  return <></>;
};
