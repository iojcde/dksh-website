"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Controls = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".outline-control-wrapper", {
      y: 0,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="outline-control-container absolute inset-0 flex mt-16 justify-center items-end">
      <div className="sticky bottom-8">
        <div className="outline-control-inner h-14 rounded-full bg-gray-4/70 backdrop-blur flex items-center">
          <div>
            <div className="flex h-full w-full items-center justify-between rounded-full  px-4">
              <button className="flex h-6 min-w-[24px] items-center justify-center">
                <div className="h-2 rounded-full bg-gray-11 w-2"></div>
              </button>
              <button className="flex h-6 min-w-[24px] items-center justify-center">
                <div className="h-2 rounded-full bg-gray-11 mx-2 w-12"></div>
              </button>
              <button className="flex h-6 min-w-[24px] items-center justify-center">
                <div className="h-2 rounded-full bg-gray-11 w-2"></div>
              </button>
              <button className="flex h-6 min-w-[24px] items-center justify-center">
                <div className="h-2 rounded-full bg-gray-11 w-2"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
