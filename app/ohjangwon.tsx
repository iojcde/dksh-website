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

    var keyHandler = async function (event: any) {
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
        });

        // await tl.to(".hand", { skewX: 10, translateX: -10 });
        await tl.to(".promote-video", {
          translateY: -100,
          translateX: 160,
          skewY: 80,
          // rotate: 80,
          scale: 0.5,
        });

        document.getElementsByTagName("html")[0].style.cursor =
          "url('/oh-cursor.png'), auto";

        document.body.innerHTML = document.body.innerHTML.replaceAll(
          "단대소고",
          "단대부고"
        );
        document.body.innerHTML = document.body.innerHTML.replaceAll(
          "단국대학교부속소프트웨어고등학교",
          "단국대학교사범대학부속고등학교"
        );
        console.log(
          "%c ==> 탁월함을 넘어 감동으로! <== ",
          "background: #222; color: #bada55; font-size: 30px;"
        );
        const song = document.getElementById("schoolsong") as HTMLAudioElement;
        song.paused ? song.play() : song.pause();
        // wait 1s
        await new Promise((resolve) => setTimeout(resolve, 500));

        window.alert("탁월함을 넘어 감동으로!");
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
    <>
      <div className="group">
        <Image
          src="/oh.png"
          alt=""
          className="object-fill transition group-hover:scale-105 object-top invisible ohjangwon"
          fill
        />
        <Image
          src="/oh-hand.png"
          alt=""
          className="object-fill transition hand group-hover:scale-105 object-top z-[500] invisible ohjangwon "
          fill
        />
      </div>
      <audio
        id="schoolsong"
        src="https://dankook.sen.hs.kr/crosseditor/binary/files/schoolsong/SEI_00001178/schoolSong.mp3"
        loop
      ></audio>
    </>
  );
};
export default Ohjangwon;
