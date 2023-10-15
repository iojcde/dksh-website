"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const path = usePathname();

  useEffect(() => {
    if (path != "/") {
      gsap.set("#nav", {
        color: "black",
      });

      gsap.set("#logo", {
        filter: "invert(0)",
      });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top+=50px",
        scrub: true,
      },
    });

    tl.fromTo(
      "#nav",
      {
        color: "#f9f9f9",
      },
      {
        color: "#202020",
      }
    );

    tl.fromTo("#logo", { filter: "invert(1)" }, { filter: "invert(0)" });

    return () => {
      tl.kill();
    };
  }, [path]);

  return (
    <nav
      id="nav"
      className={cn(
        "py-4 px-6 h-12 flex items-center justify-between sticky lg:px-12 top-0 text-sm font-medium w-full z-[100]",
        path != "/" ? "text-gray-2" : "text-gray-12"
      )}
    >
      <div className={"bien-glass glass "} />
      <div className={"bien-glass-edge glass "} />
      <div className="flex items-center gap-12 z-[100] relative">
        <Link id="logo" href="/" className={cn(path == "/" && "invert")}>
          <Image
            src="/dksh-logo.png"
            width={55}
            height={24}
            quality={100}
            alt=""
          ></Image>
        </Link>

        <Link href="/about">학교소개</Link>
        <Link href="/about/major">학과소개</Link>
        <Link href="/admission">입학과 진학</Link>
        <Link href="/login">학교생활</Link>
      </div>
      <div className="relative z-[100] flex items-center">
        <Link href="/login">로그인</Link>
      </div>
    </nav>
  );
};
export default Nav;
