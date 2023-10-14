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
        color: "white",
      },
      {
        color: "black",
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
        "py-4 px-6 h-12 flex items-center justify-between  sticky top-0 font-medium lg:px-12 w-full z-[100]",
        path != "/" ? "text-black" : "text-white"
      )}
    >
      <div className={"bien-glass glass "} />
      <div className={"bien-glass-edge glass "} />
      <div className="flex justify-between w-full items-center z-[100] relative">
        <Link
          id="logo"
          href="/"
          className={cn(
            "font-bold text-2xl tracking-tight",
            path == "/" && "invert"
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

        <div className="flex items-center sm:gap-12">
          <Link className="hidden sm:block" href="/about">
            소개
          </Link>
          <Link className="hidden sm:block" href="/about/greeting">
            인사말
          </Link>
          <Link className="hidden sm:block" href="/login">
            로그인
          </Link>
          <button>메뉴</button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
