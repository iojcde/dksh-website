"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import {
  Backpack,
  CalendarDays,
  Component,
  File,
  FileText,
  GraduationCap,
  Hand,
  History,
  Megaphone,
  Menu,
  Shapes,
  Text,
  Utensils,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import React from "react";
import UserSection from "./user-section";
import { MobileNav } from "./mobile";
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
        start: "bottom top+=30px",
        endTrigger: "#container",
        scrub: true,
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
    <>
      <nav
        id="nav"
        className={cn(
          "py-4 px-6 h-12 flex items-center  text-foreground justify-between sticky 2xl:px-12 top-0 text-sm font-medium w-full z-[100]",
          path == "/" ? "dark" : ""
        )}
      >
        <div className={"bien-glass glass"} />
        <div className={"bien-glass-edge glass "} />
        <div className="flex items-center gap-10 z-[400] relative">
          <Link
            id="logo"
            href="/"
            className={cn(
              path == "/" && "dark:invert invert-0  ",
              "select-none logo"
            )}
          >
            <Image
              src="/dksh-logo.png"
              width={55}
              height={24}
              quality={100}
              alt=""
            ></Image>
          </Link>

          <div className=" md:flex items-center gap-10 hidden ">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>소개</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-6 md:w-[400px] text-lg font-semibold lg:w-[500px] lg:grid-cols-[0.75fr_1fr]">
                      <li className="row-span-5">
                        <NavigationMenuLink asChild>
                          <a
                            className="h-full w-full relative overflow-hidden border-1 border-gray-12 bg-transparent flex select-none rounded-sm transition-colors duraiton-100 p-6 no-underline outline-none "
                            href="/"
                          >
                            <Image
                              src="/dksh.webp"
                              fill
                              className="brightness-[65%] object-cover object-right relative z-10"
                              alt=""
                            />
                            <div className="absolute inset-0 backdrop-blur-[1px] rounded-sm bg-gray-12" />
                            <div className=" relative z-20  w-full h-full flex flex-col justify-end">
                              <Image
                                alt=""
                                src="/dksh-logo.png"
                                className="w-12  invert object-contain object-left"
                                width={500}
                                height={46}
                                quality={100}
                              />
                              <h2 className="mb-2 mt-4 text-xl font-extrabold text-white">
                                학교 소개
                              </h2>
                              <p className="text-sm leading-tight text-gray-300 font-normal">
                                단대소고에 대해 알아보기
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/about/departments"
                        className="flex items-center gap-2 "
                      >
                        <Shapes className="text-pink-500" />
                        학과 소개
                      </ListItem>
                      <ListItem
                        href="/about/greeting"
                        className="flex items-center gap-2 "
                      >
                        <Text className="text-sky-400" />
                        인사말
                      </ListItem>
                      <ListItem
                        href="/about/history"
                        className="flex items-center gap-2 "
                      >
                        <History className="text-teal-400" /> 연혁
                      </ListItem>

                      <ListItem
                        href="/about/symbols"
                        className="flex items-center gap-2 "
                      >
                        <Component className="text-yellow-400" />
                        학교 상징
                      </ListItem>

                      <ul className="grid grid-cols-2 gap-1 px-3 text-gray-11 text-xs font-normal">
                        <li className="text-sm">
                          <Link href="/">설립 및 창학 정신</Link>
                        </li>{" "}
                        <li className="text-sm">
                          <Link href="/">교직원 조직도</Link>
                        </li>
                        <li className="text-sm">
                          <Link href="/">교가</Link>
                        </li>
                        <li className="text-sm">
                          <Link href="/">오시는 길</Link>
                        </li>
                      </ul>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>학교생활</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] font-medium md:w-[450px] gap-1 p-6 grid-cols-[0.8fr_1fr]">
                      <li className="row-span-6 flex justify-end flex-col border-r p-3 mr-3">
                        <div className="mb-2 mt-4 text-xl font-extrabold">
                          학교생활
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          학교생활 관련 자료
                        </p>
                      </li>
                      <ListItem
                        href="/gatongs"
                        className="flex items-center gap-2 "
                      >
                        <FileText className="text-gray-11" size={16} />
                        가정통신문
                      </ListItem>
                      <ListItem
                        href="/notices"
                        className="flex items-center gap-2 "
                      >
                        <Megaphone className="text-gray-11" size={16} />
                        공지사항
                      </ListItem>

                      <ListItem
                        href="/accpetance"
                        className="flex items-center gap-2 "
                      >
                        <Utensils className="text-gray-11" size={16} />
                        급식 메뉴
                      </ListItem>

                      <ListItem
                        href="/rules-and-layout"
                        className="flex items-center gap-2 "
                      >
                        <File className="text-gray-11" size={16} />
                        일반자료실
                      </ListItem>
                      <ListItem
                        href="/rules-and-layout"
                        className="flex items-center gap-2 "
                      >
                        <CalendarDays className="text-gray-11" size={16} />
                        학사일정
                      </ListItem>
                      <ListItem
                        href="/rules-and-layout"
                        className="flex items-center gap-2 "
                      >
                        <Backpack className="text-gray-11" size={16} />
                        방과후학교
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>입학과 진학</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2  ">
                      <li className="row-span-6 flex justify-end flex-col border-r p-3 mr-3">
                        <div className="mb-2 mt-4 text-xl font-extrabold">
                          입학과 진학
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          학교생활 관련 자료
                        </p>
                      </li>
                      <ListItem href="/accpetance">합격자 조회</ListItem>

                      <ListItem href="/accpetance">입학 안내</ListItem>
                      <ListItem
                        href="/accpetance"
                        className="flex items-center gap-2 "
                      >
                        진학자료실
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>수업과 평가</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2  ">
                      <ListItem href="">평가계획</ListItem>

                      <ListItem href="/past-exams">기출문제</ListItem>

                      <ListItem href="">수업 운영 계획</ListItem>
                      <ListItem href="">알고리즘 문제풀이</ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/dashboard" passHref legacyBehavior>
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
          <UserSection />
          <button
            className=" md:hidden"
            onClick={() => {
              const mobileNav = document.querySelector("#mobile-nav");
              const nav = document.querySelector("#nav");

              if (mobileNav?.classList.contains("active")) {
                gsap.to(mobileNav, {
                  x: "150vw",
                  ease: "power3.out",
                });
              } else {
                gsap.to(mobileNav, {
                  x: 0,
                  ease: "power3.out",
                });
              }

              document
                .querySelector("#mobile-nav .logo")
                ?.classList.toggle("hidden");
              mobileNav?.classList.toggle("active");
              document
                .querySelector("html")
                ?.classList.toggle("overflow-hidden");
            }}
          >
            <Menu />
          </button>
        </div>
      </nav>
      <MobileNav />
    </>
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
            "block select-none rounded-md p-3 transition-colors duration-100 leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
