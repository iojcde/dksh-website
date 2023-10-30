import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ProfileForm } from "./forms/profile-form";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SettingsPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container py-24">
      <div className="flex gap-4 items-center">
        <Avatar className="w-24 h-24 shadow-lg">
          <AvatarImage
            src={session.user.image as string}
            alt={session.user.name as string}
          />
          <AvatarFallback>
            <div className="w-full h-full animate-pulse bg-gray-5 rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div className="">
          <span className="block text-2xl font-bold">{session.user.name}</span>
          <span className="text-gray-11"> {session.user.email} </span>
        </div>
      </div>

      <div className="py-10">
        <h2 className="text-2xl font-bold">프로필 설정</h2>
        <Suspense
          fallback={
            <div className="flex items-center gap-4 mt-8">
              <Skeleton className=" h-8 w-[250px]" />
              <Skeleton className="h-8 w-[250px]" />
            </div>
          }
        >
          <ProfileForm />
        </Suspense>
      </div>
    </div>
  );
};

export default SettingsPage;
