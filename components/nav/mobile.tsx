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
      className=" p-6 dark bg-black pt-3 z-[200] fixed flex flex-col justify-between inset-0 translate-x-[150vw] w-full md:hidden"
    >
      <div className="flex  h-[24px] ">
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
            document.querySelector("html")?.classList.toggle("overflow-hidden");
          }}
        >
          <X className="text-white" />
        </button>
      </div>

      <div className="text-gray-12 mt-8 pb-24">
        <h1 className="uppercase text-sm text-dksh-200 font-bold tracking-wide">
          Navigation
        </h1>{" "}
        <Accordion type="single" collapsible className="w-full mt-4">
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
          <Item
            title="수업과 평가"
            data={[
              {
                title: "평가계획",
                href: "/acceptance",
              },
              {
                title: "기출문제",
                href: "/past-exams",
              },
              {
                title: "수업 운영 계획",
                href: "/acceptance",
              },
              {
                title: "알고리즘 문제풀이",
                href: "/acceptance",
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
