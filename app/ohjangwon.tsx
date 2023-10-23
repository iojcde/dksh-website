"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
const Ohjangwon = () => {
  const tl = gsap.timeline();
  useEffect(() => {
    var pattern = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    var current = 0;

    var keyHandler = async function (event) {
      // If the key isn't in the pattern, or isn't the current key in the pattern, reset
      if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
      }

      // Update how much of the pattern is complete
      current++;

      // If complete, alert and reset
      if (pattern.length === current) {
        current = 0;
        await tl.to(".ohjangwon", {
          autoAlpha: 1,
          delay: 0.5,
        });
        await tl.to(".promote-video", {
          translateY: -150,
          translateX: 120,
          skewX: 100,
          rotate: 70,
          scale: 0.5,
        });
        document.body.innerHTML = document.body.innerHTML.replaceAll(
          "단대소고",
          "단대부고"
        );
        document.body.innerHTML = document.body.innerHTML.replaceAll(
          "단국대학교부속소프트웨어고등학교",
          "단국대학교사범대학부속고등학교"
        );

        // wait 1s
        await new Promise((resolve) => setTimeout(resolve, 1000));

        window.alert("단대부고 개꿀");
      }
    };

    // Listen for keydown events
    document.addEventListener("keydown", keyHandler, false);

    () => {
      document.removeEventListener("keydown", keyHandler, false);
      tl.kill();
    };
  }, []);

  return (
    <Image
      src="/oh.png"
      alt=""
      className="object-fill object-top invisible ohjangwon"
      fill
    />
  );
};
export default Ohjangwon;
