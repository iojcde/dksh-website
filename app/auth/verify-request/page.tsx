"use client";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import { Mail } from "lucide-react";
import { redirect } from "next/navigation";

const VerifyRequestPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  if (!searchParams) {
    redirect("/login");
  }

  return (
    <div className="container py-24 text-center">
      <div className="mx-auto flex items-center p-2 rounded-full justify-center bg-pink-500 aspect-square max-w-min text-white">
        <Mail />
      </div>
      <h1 className="text-4xl font-extrabold mt-4">이메일을 확인해주세요.</h1>
      <p className="mt-8">
        이메일을 확인하고, 이메일에 있는 링크를 클릭하여 로그인을 완료해주세요.
      </p>

      <Button asChild className="mt-16">
        <a
          href={`https://mail.google.com/mail/u/${searchParams.email}`}
          target="_blank"
        >
          Gmail로 바로가기
        </a>
      </Button>
    </div>
  );
};
export default VerifyRequestPage;
