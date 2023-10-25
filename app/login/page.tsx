import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
import { LoginOptions } from "./login-options";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage() {
  return (
    <div className="w-full grid-cols-1 lg:grid">
      <div className="container flex py-32 flex-col items-center justify-center">
        {/* <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 text-white md:left-8 md:top-8"
          )}
        >
          <>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Link> */}
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[300px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-extrabold">로그인</h1>
            <p className="text-sm text-muted-foreground">
              학교 이메일을 입력해 로그인하세요.
            </p>
          </div>

          <LoginOptions />
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p> */}
        </div>
      </div>
    </div>
  );
}
