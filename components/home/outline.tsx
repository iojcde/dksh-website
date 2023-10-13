"use client";
import { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Outline = () => {
  useEffect(() => {
    const show = gsap.fromTo(
      "#outline",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom top",
          scrub: true,
        },
      }
    );
    return () => {
      show.kill();
    };
  });

  return (
    <div
      id="outline"
      className="fixed invisible inset-x-0 z-40 top-8 w-full container h-6"
    ></div>
  );
};

export default Outline;
