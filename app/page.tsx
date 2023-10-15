import Outline from "@/components/home/outline";
import QuickMenu from "@/components/home/quick-menu";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import { School, Cpu, Library, Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function Home() {
  return (
    <>
      <Outline />
      <main
        id="hero"
        className="-mt-12 bg-gradient-to-br from-black via-black to-dksh-800 dark text-gray-12 relative min-h-screen overflow-clip text-white  justify-between pb-24  md:items-center w-full h-full"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 pt-24 lg:pt-32 gap-12">
          <div className="mt-16">
            {/* <div className="border select-none mb-2 border-dksh-600 bg-dksh-600 max-w-min whitespace-nowrap rounded-full px-2 py-1 text-xs">
              <span className="font-semibold uppercase">New</span> 와우
            </div> */}

            <h1 className="font-display font-bold -ml-[0.06em] mt-2 text-6xl  lg:text-8xl">
              단대소고
            </h1>
            <p className="mt-4 text-gray-300  max-w-[48ch]">
              <Balancer>
                서울 강남 대치동에 위치한 단국대학교부속소프트웨어고등학교는
                수도권 유일 소프트웨어 고등학교입니다.
              </Balancer>
            </p>
            <div className="mt-8 flex items-center gap-2">
              <Link
                href="/login"
                className=" inline-block select-none rounded-md border border-dksh-600 bg-gradient-to-br from-dksh-500 to-dksh-400  p-2 px-8 text-white  transition  text-sm hover:opacity-95 hover:shadow"
              >
                더 알아보기
              </Link>

              <Link
                href="https://gall.dcinside.com/mgallery/board/lists/?id=dksw"
                className="inline-block select-none rounded-md bg-gradient-to-br bg-gray-1 border border-gray-6 p-2 px-8 text-gray-12 transition  text-sm hover:opacity-95 hover:shadow"
              >
                재학생 포털
              </Link>
            </div>
          </div>

          <div className="lg:mt-12 w-full  relative rounded-[16px] shadow-xl">
            <div className="w-full overflow-clip bg-black rounded-sm border lg:rounded-2xl  ">
              <iframe
                className="w-full  h-full aspect-video  outline-none border-none relative z-20"
                src="https://www.youtube.com/embed/8wrRpArJJ8I?si=vGB7VFqldKZseDR8&autoplay=1&mute=1&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>{" "}
              <Image
              alt=''
                src="/blob.png"
                className="-top-[40%] -rotate-45 blur-3xl  inset-x-0 absolute"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>

        <QuickMenu />
      </main>
      <div className="bg-gradient-to-br relative shadow-inner from-white via-white to-[hsl(208,95%,85%)] ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 container sm:pr-0">
          <div className="py-24 sm:text-lg relative z-10">
            <h1 className="text-2xl font-bold">소개</h1>

            <p className="text-gray-11 max-w-[45ch]  mt-4 ">
              강남구 대치동에 위치한 단국대학교부속소프트웨어고등학교는 대학
              진학을 목표로 하는 소프트웨어 전문 특성화 고등학교입니다.
            </p>
            <p className="text-gray-11 max-w-[45ch]  mt-4">
              학생들이 소프트웨어, AI 등을 기반으로 대학에 진학할 수 있도록
              전문적인 교사진을 구성해 진로 지도에 힘써오고 있습니다.
            </p>
          </div>
          <div className="relative w-full h-full">
            <Image
              fill
              alt=""
              src="/wow.png"
              className="object-cover w-[50%] object-center select-none "
            />
          </div>
        </div>
      </div>
      <div className=" py-24  ">
        <div className="container text-sm">
          <h1 className="text-center  font-bold text-4xl">
            이래서 단대소고다!
          </h1>
          <p className="text-center mt-4 max-w-[50ch] mx-auto">
            <Balancer>
              단국대학교부속소프트웨어고등학교는 소프트웨어 전문 고등학교로써
              소프트웨어 분야에 특화된 교육과정으로 학생들의 미래를 준비합니다.
            </Balancer>
          </p>

          <div className="grid mt-12 items max-w-5xl mx-auto -center gap-4 grid-cols-1 lg:grid-cols-[1fr_0.19fr_1fr]">
            <div className="border p-6 rounded-md lg:col-span-2">
              <span className="flex items-center gap-2">
                <Cpu className="stroke-dksh-500" />
                <h2 className="text-xl font-semibold">
                  SOFTWARE 전공 학과 운영
                </h2>
              </span>
              <p className="mt-4">
                단대소고 학생들은 2학년부터
                인공지능소프트웨어·사물인터넷소프트웨어·게임콘텐츠의
                <br />
                전공 학과를 선택하게 됩니다.
                <br />
                학생들은 2학년부터 원하는 학과를 선택하여 심화된 교육을 받을 수
                있습니다.
              </p>
            </div>

            <div className="border p-6 rounded-md">
              <span className="flex items-center gap-2">
                <Library className="stroke-violet-600" />
                <h2 className="text-xl font-semibold">전문 교사진</h2>
              </span>
              <p className="mt-4">
                단대소고는 소프트웨어 전문 교사진을 보유하고 있습니다.
                <br />
                학생들의 진로를 위해 교사들은 끊임없이 노력하고 있습니다.
              </p>
            </div>

            <div className="border p-6 rounded-md">
              <span className="flex items-center gap-2">
                <School className="stroke-pink-500" />
                <h2 className="text-xl font-semibold">최고의 시설</h2>
              </span>
              <p className="mt-4">
                각 교실은 전자칠판이 설치되어 있으며, 학생들은 노트북을
                지참합니다.
                <br />
                학생들은 스터디카페, 다수의 실습실 등 쾌적한 시설을 사용할 수
                있습니다.
              </p>
            </div>

            <div className="border p-6 rounded-md lg:col-span-2">
              <span className="flex items-center gap-2">
                <Pen className="stroke-black-500" />
                <h2 className="text-xl font-semibold">
                  학생들이 직접 만들고 이끄는 동아리 시스템
                </h2>
              </span>
              <p className="mt-4">
                단대소고는 학생들이 직접 만들고 이끄는 동아리 시스템을 운영하고
                있습니다.
                <br />
                학생들은 각자의 동아리에서 자신의 능력을 발휘하고 즐겁게 활동할
                수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl ">
        <h1 className="text-3xl text-center font-bold">학교 전경</h1>

        <div className="relative  mt-8 rounded-xl overflow-clip shadow aspect-[16/9] h-full">
          <Image
            fill
            alt=""
            src="/dksh.webp"
            className="object-cover h-full object-center select-none "
          />
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "단국대학교부속소프트웨어고등학교",
};
