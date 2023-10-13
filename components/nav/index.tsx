"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
const Nav = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top+=50px",
        scrub: true,
      },
    });
    let mm = gsap.matchMedia();
    mm.add("(min-width: 640px)", () => {
      const toggleGlass = tl.fromTo(
        ".glass",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      );
      return () => {
        toggleGlass?.kill();
      };
    });

    const toggleText = tl.fromTo(
      "#nav",
      {
        color: "white",
      },
      {
        color: "black",
      }
    );

    return () => {
      toggleText.kill();
    };
  }, []);

  return (
    <nav
      id="nav"
      className="py-4 px-6 h-14 flex items-center justify-between transition text-white fixed font-medium lg:px-12 w-full z-[100]"
    >
      <div className="bien-glass glass sm:invisible " />
      <div className="bien-glass-edge glass sm:invisible"></div>

      <div className="flex justify-between w-full items-center z-[100] relative">
        <Link href="/" className="font-bold text-2xl tracking-tight">
          DKSH
        </Link>

        <div className="flex items-center lg:gap-12">
          <Link className="hidden sm:block" href="/about">
            소개
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
