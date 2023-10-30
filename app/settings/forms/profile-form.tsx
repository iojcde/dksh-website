"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";

export const ProfileForm = () => {
  const { data: session, update, status } = useSession();

  if (status == "loading") {
    return <div>loading...</div>;
  }

  if (status == "unauthenticated" || !session?.user) {
    return null;
  }

  return (
    <form
      action={async (formData: FormData) => {
        await update({
          grade: formData.get("grade") as string,
          class: formData.get("class") as string,
        });
      }}
      className="mt-4 space-y-6"
    >
      <div className="flex flex-wrap gap-4">
        <div className="space-y-2">
          <Label htmlFor="grade">학년</Label>
          <Select
            name="grade"
            defaultValue={
              session.user?.grade ? session.user?.grade.toString() : undefined
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="학년" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1학년</SelectItem>
              <SelectItem value="2">2학년</SelectItem>
              <SelectItem value="3">3학년</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="grade">반</Label>
          <Select
            name="class"
            defaultValue={
              session.user?.class ? session.user?.class.toString() : undefined
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="반" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1반</SelectItem>
              <SelectItem value="2">2반</SelectItem>
              <SelectItem value="3">3반</SelectItem>
              <SelectItem value="4">4반</SelectItem>
              <SelectItem value="5">5반</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit">저장</Button>
    </form>
  );
};
