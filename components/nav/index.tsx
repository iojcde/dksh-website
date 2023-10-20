"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import React from "react";
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const path = usePathname();

  useEffect(() => {
    if (path != "/") {
      document.getElementById("nav")?.classList.remove("dark");
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top+=50px",
        endTrigger: "html",
        end: "bottom top",
        onToggle: () => {
          document.getElementById("nav")?.classList.toggle("dark");
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, [path]);

  return (
    <nav
      id="nav"
      className={cn(
        "py-4 px-6 h-12 flex items-center   text-foreground justify-between sticky xl:px-12 top-0 text-sm font-medium w-full z-[100]",
        path == "/" ? "dark" : ""
      )}
    >
      <div className={"bien-glass glass"} />
      <div className={"bien-glass-edge glass "} />
      <div className="flex items-center gap-10 z-[100] relative">
        <Link
          id="logo"
          href="/"
          className={cn(path == "/" && "dark:invert invert-0  ", "select-none")}
        >
          <Image
            src="/dksh-logo.png"
            width={55}
            height={24}
            quality={100}
            alt=""
          ></Image>
        </Link>

        <div className="sm:flex items-center gap-10 hidden ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>소개</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[550px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-background to-gray-2 dark:to-dksh-900 transition-colors duraiton-100  shadow-inner p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-xl font-bold">
                            <Image
                              alt=""
                              src="/dksh-logo.png"
                              className="w-12 black-to-dksh mb-4  object-contain object-left"
                              width={500}
                              height={46}
                              quality={100}
                            />
                            학교 소개
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            단대소고에 대해 알아보기
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="학과 소개">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="인사말">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="연혁">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>입학과 진학</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/accpetance" title="합격자 조회" />

                    <ListItem href="/accpetance" title="입학자료실" />

                    <ListItem href="/accpetance" title="진학자료실" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>수업과 평가</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="" title="평가계획" />
                    <ListItem href="" title="기출문제" />

                    <ListItem href="" title="수업 운영 계획" />
                    <ListItem href="" title="알고리즘 문제풀이" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle())}
                  >
                    재학생 포털
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="relative z-[100] flex gap-4 lg:gap-10 items-center">
        <Link href="/login">로그인</Link>
        <button>
          <Menu />
        </button>
      </div>
    </nav>
  );
};
export default Nav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
