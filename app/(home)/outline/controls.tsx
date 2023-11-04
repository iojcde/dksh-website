"use client";

import "./controls.css";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

export const Controls = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    new CustomEase("wow", "0.23, 1, 0.32, 1");
    new ScrollTrigger({
      trigger: ".outline-control-container",
      start: "top center",
      end: "bottom center",
      onEnter: (self) => {
        disappearTl.pause();
        appearTl.restart();
      },
      onLeaveBack: (self) => {
        appearTl.pause();
        disappearTl.restart();
      },
      onLeave: () => {
        appearTl.pause();
        disappearTl.restart();
      },
      onEnterBack: () => {
        disappearTl.pause();
        appearTl.restart();
      },
      fastScrollEnd: true,
      preventOverlaps: true,
    });

    const appearTl = gsap.timeline({
      paused: true,
      onComplete: () => {
        document.querySelector(".outline-section")?.classList.remove("paused");
        document.querySelector(".outline-section")?.classList.add("running");
      },
    });

    const disappearTl = gsap.timeline({
      paused: true,
      onComplete: () => {
        document.querySelector(".outline-section")?.classList.remove("paused");
        document.querySelector(".outline-section")?.classList.remove("running");
      },
    });

    appearTl.add("appear");
    appearTl.fromTo(
      ".outline-control-inner",
      { scale: 0 },
      {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "back.out",
      },
      "appear"
    );

    appearTl.to(
      ".kekw",
      {
        scale: 1.5,
        duration: 0.4,
        ease: "back.out",
      },
      "appear"
    );

    appearTl.to(".kekw", {
      scale: 1,
      duration: 0.3,
      ease: "back.out",
    });

    appearTl.set(".kekw", { opacity: 0 });

    appearTl
      .add("slide", "+=0")
      .fromTo(
        ".outline-control-inner .tabs",
        {
          width: "56px",
          x: 0,
        },
        {
          width: "164px",
          x: "-95px",
          duration: 0.5,
          ease: "back.out",
        },
        "slide"
      )
      .fromTo(
        ".outline-control-inner .play-pause",
        {
          x: 0,
        },
        {
          x: "90px",
          duration: 0.5,
          ease: "back.out",
        },
        "slide"
      );

    appearTl.fromTo(
      ".outline-control-inner .dot",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.3,
      }
    );

    disappearTl.add("disappear");

    disappearTl.to(".outline-control-container .dot", {
      autoAlpha: 0,
      duration: 0.2,
    });

    disappearTl.to(
      ".outline-control-inner .tabs",

      {
        width: "56px",
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "disappear"
    );

    disappearTl.to(
      ".outline-control-inner .play-pause",
      {
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "disappear"
    );

    disappearTl.to(".outline-control-inner", {
      scale: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });

    document.querySelectorAll(".dot-inner").forEach((d, index) => {
      (d as HTMLElement).onanimationend = () => {
        activateSection((index + 1) % 4);
      };
    });

    (
      document.querySelector(".dot-inner:first-child") as HTMLElement
    ).onanimationstart = () => {
      const vid = document.querySelector(".video1") as HTMLVideoElement;
      vid.play();
    };

    document
      .querySelectorAll(".outline-section .section")
      .forEach((s, index) => {
        s.addEventListener("click", () => {
          activateSection(index);
        });
      });

    return () => {
      appearTl.kill();
    };
  }, []);

  const activateSection = (index: number) => {
    setActiveSection(index);

    document.querySelector(".outline-section")?.classList.add("running");
    document.querySelectorAll(".dot-inner")[index].classList.add("active");

    const sections = document.querySelectorAll(".section");
    const section = sections[index] as HTMLElement;

    gsap.to(".section-list", {
      duration: 1,

      x: -section.offsetLeft,
      ease: "wow",
    });
  };

  return (
    <div className="outline-control-container pointer-events-none absolute inset-0 z-20 flex my-8 justify-center items-end">
      <div className="outline-control-inner pointer-events-auto scale-0 translate-y-8 sticky bottom-8 h-14 w-14 rounded-full">
        <div className="relative">
          <div className="tabs  h-14 rounded-full bg-gray-4/70 backdrop-blur flex items-center">
            <div className="inline-flex h-full w-full items-center justify-center rounded-full  px-4">
              <button
                onClick={() => activateSection(0)}
                className="invisible relative w-auto dot flex h-2 mx-2  items-center justify-center"
              >
                <div
                  className={cn(
                    "dot-inner",
                    activeSection == 0 ? "min-w-[48px] active" : "min-w-[8px]"
                  )}
                ></div>
              </button>
              <button
                onClick={() => activateSection(1)}
                className="invisible relative w-auto dot flex h-2 mx-2 items-center justify-center"
              >
                <div
                  className={cn(
                    "dot-inner",
                    activeSection == 1 ? "min-w-[48px] active" : "min-w-[8px]"
                  )}
                ></div>
              </button>
              <button
                onClick={() => activateSection(2)}
                className="invisible relative w-auto dot flex h-2 mx-2 items-center justify-center"
              >
                <div
                  className={cn(
                    "dot-inner",
                    activeSection == 2 ? "min-w-[48px] active" : "min-w-[8px]"
                  )}
                ></div>
              </button>
              <button
                onClick={() => activateSection(3)}
                className="invisible relative w-auto dot flex h-2 mx-2 items-center justify-center"
              >
                <div
                  className={cn(
                    "dot-inner",
                    activeSection == 3 ? "min-w-[48px] active" : "min-w-[8px]"
                  )}
                ></div>
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setIsRunning((before) => !before);

              document
                .querySelector(".outline-section")
                ?.classList.toggle("running");
              document
                .querySelector(".outline-section")
                ?.classList.toggle("paused");
            }}
            className=" play-pause absolute top-0 flex h-14 w-14 items-center justify-center rounded-full bg-gray-4/70 backdrop-blur  "
          >
            {isRunning ? (
              <svg
                width="19"
                height="25"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="invisible dot text-black pause-button"
              >
                <g clip-path="url(#clip0_27_83)">
                  <path
                    d="M1.03906 12.7266H2.82031C3.5 12.7266 3.85938 12.3672 3.85938 11.6797V1.03906C3.85938 0.328125 3.5 0 2.82031 0H1.03906C0.359375 0 0 0.359375 0 1.03906V11.6797C0 12.3672 0.359375 12.7266 1.03906 12.7266ZM6.71875 12.7266H8.49219C9.17969 12.7266 9.53125 12.3672 9.53125 11.6797V1.03906C9.53125 0.328125 9.17969 0 8.49219 0H6.71875C6.03125 0 5.67188 0.359375 5.67188 1.03906V11.6797C5.67188 12.3672 6.03125 12.7266 6.71875 12.7266Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                className="invisible dot text-black play-button"
                viewBox="0 0 56 56"
              >
                <path d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>
              </svg>
            )}
          </button>
          <div className="absolute -z-10 rounded-full inset-0 bg-blue-500 kekw"></div>
        </div>
      </div>
    </div>
  );
};
