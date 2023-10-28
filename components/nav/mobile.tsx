import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import gsap from "gsap";
export const MobileNav = () => {
  return (
    <div
      id="mobile-nav"
      className=" p-6 dark bg-black pt-3 z-[200] fixed inset-0 translate-x-[150vw] w-full md:hidden"
    >
      <div className="flex  h-[24px]">
        <Link href="/" className="invert logo hidden select-none ">
          <Image
            className="h-[24px] w-[55px]"
            src="/dksh-logo.png"
            width={55}
            height={24}
            quality={100}
            alt=""
          />
        </Link>
        <button
          className="flex justify-end flex-1"
          onClick={() => {
            const mobileNav = document.querySelector("#mobile-nav");
            const nav = document.querySelector("#nav");

            if (mobileNav?.classList.contains("active")) {
              gsap.to(mobileNav, {
                x: "105vw",
                ease: "power3.out",
              });
              if (!nav?.classList.contains("was-dark"))
                nav?.classList.remove("dark");
              nav?.classList.remove("was-dark");
            } else {
              gsap.to(mobileNav, {
                x: 0,
                ease: "power3.out",
              });

              if (nav?.classList.contains("dark"))
                nav?.classList.add("was-dark");

              nav?.classList.add("dark");
            }

            document
              .querySelector("#mobile-nav .logo")
              ?.classList.toggle("hidden");
            mobileNav?.classList.toggle("active");
            document.querySelector("html")?.classList.toggle("overflow-hidden");
          }}
        >
          <X className="text-white" />
        </button>
      </div>

      <div className="text-gray-12 mt-8">
        <h1 className="uppercase text-sm text-dksh-200 font-bold tracking-wide">
          Navigation
        </h1>{" "}
        <Accordion type="single" collapsible className="w-full mt-8">
          <Item
            title="소개"
            data={[
              {
                title: "소개",
                href: "/about",
              },
              {
                title: "학과 소개",
                href: "/about/departments",
              },
              { title: "인사말", href: "/about/greeting" },
              {
                title: "연혁",
                href: "/about/history",
              },
              {
                title: "학교 상징",
                href: "/about/symbol",
              },
            ]}
          />
          {/* <NavigationMenuTrigger>학교생활</NavigationMenuTrigger>
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
                  </NavigationMenuContent> */}
          <Item
            title="학교생활"
            data={[
              {
                title: "가정통신문",
                href: "/gatongs",
              },
              {
                title: "공지사항",
                href: "/notices",
              },
              {
                title: "급식 메뉴",
                href: "/accpetance",
              },
              {
                title: "일반자료실",
                href: "/rules-and-layout",
              },
              {
                title: "학사일정",
                href: "/rules-and-layout",
              },
              {
                title: "방과후학교",
                href: "/rules-and-layout",
              },
            ]}
          />
          <Item
            title="입학과 진학"
            data={[
              {
                title: "합격자 조회",
                href: "/accpetance",
              },
              {
                title: "입학 안내",
                href: "/accpetance",
              },
              {
                title: "진학자료실",
                href: "/accpetance",
              },
            ]}
          />
        </Accordion>
      </div>
    </div>
  );
};

const Item = ({
  title,
  data,
}: {
  title: string;
  data: { title: string; href: string }[];
}) => (
  <AccordionItem value={title}>
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>
      <ul className="flex flex-col text-lg font-medium text-gray-11 p-2 gap-4">
        {data.map(({ title, href }) => (
          <li key={href}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </AccordionContent>
  </AccordionItem>
);
