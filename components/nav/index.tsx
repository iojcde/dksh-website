"use client";
import Link from "next/link";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const nav = document.getElementById("nav");
      if (hero && nav) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        if (heroBottom < 0) {
          nav.style.color = "black";
        } else {
          nav.style.color = "white";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="nav"
      className="py-4 px-6 transition  fixed lg:px-12 w-full flex z-[100] justify-between  items-center"
    >
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
    </nav>
  );
};
export default Nav;
