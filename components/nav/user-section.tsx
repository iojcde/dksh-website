"use client";
import { CreditCard, LogOut, PlusCircle, Settings, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signOut, useSession } from "next-auth/react";

export default function UserSection() {
  const { data: session, status } = useSession();
  if (status === "loading")
    return <div className="h-8 w-8 animate-pulse bg-gray-5 rounded-full" />;

  if (status == "authenticated")
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="h-8 w-8 select-none border">
            <AvatarImage
              src={session?.user.image as string}
              alt={session?.user.name || session.user.email!}
            />
            <AvatarFallback>
              <div className="h-8 w-8 animate-pulse bg-gray-5 rounded-full" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 top-2 relative z-50"
          align="end"
          forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session?.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>New Team</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              signOut();
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  if (status == "unauthenticated") {
    return <Link href="/login">로그인</Link>;
  }
}
