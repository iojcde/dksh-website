import Outline from "@/components/home/outline";
import QuickMenu from "@/components/home/quick-menu";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import {
  School,
  Cpu,
  Library,
  Pen,
  Users2,
  PlusCircle,
  BrainCircuit,
  Router,
  Gamepad,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Details } from "./details";
import dynamic from "next/dynamic";
const Ohjangwon = dynamic(() => import("./ohjangwon"));

export default async function Home() {
  return (
    <>
      <main
        id="hero"
        className="-mt-12 bg-gradient-to-br flex items-center from-black  to-dksh-900 dark text-gray-12 relative min-h-screen overflow-hidden  pb-24 justify-between w-full  h-full"
      >
        <Details />
        <div className="container grid h-full pt-16  grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 ">
          <div className="relative z-30 mt-8">
            {/* <div className="border select-none mb-2 border-dksh-600 bg-dksh-600 max-w-min whitespace-nowrap rounded-full px-2 py-1 text-xs">
              <span className="font-semibold uppercase">New</span> 와우
            </div> */}

            <h1 className="hero-title font-extrabold -ml-[0.06em] mt-2 text-6xl  lg:text-8xl bg-clip-text bg-gradient-to-br from-white via-white to-gray-1 text-transparent ">
              단대소고
            </h1>
            <p className="mt-4 text-gray-11 sm:text-lg  max-w-[48ch]">
              <Balancer>
                강남구 대치동에 위치한 단국대학교부속소프트웨어고등학교는 수도권
                유일 소프트웨어 고등학교입니다.
              </Balancer>
            </p>
            <div className="mt-8 flex items-center gap-2">
              <Link
                href="/about"
                className=" inline-block select-none rounded-md  bg-gradient-to-br from-dksh-500 to-dksh-600  p-2 px-8 text-white  transition  text-sm hover:opacity-95 hover:shadow"
              >
                더 알아보기
              </Link>

              <Link
                href="https://gall.dcinside.com/mgallery/board/lists/?id=dksw"
                className="inline-block select-none rounded-md bg-gradient-to-br bg-gray-1 border border-gray-4 p-2 px-8 text-gray-12 transition  text-sm hover:opacity-95 hover:shadow"
              >
                재학생 포털
              </Link>
            </div>
          </div>

          <div className="w-full relative z-20 ">
            <div className="promote-video overflow-hidden relative z-20 bg-gray-2  shadow-xl rounded-xl border-gray-5 border p-1 lg:rounded-2xl  ">
              <div className="overflow-hidden rounded-[8px] lg:rounded-xl aspect-video border border-gray-4 relative">
                <iframe
                  className="absolute  top-0 left-0 w-full h-[calc(100%+1px)] inset-y-0  border-0 right-1"
                  src="https://www.youtube.com/embed/8wrRpArJJ8I?si=vGB7VFqldKZseDR8&autoplay=1&mute=1&loop=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>

            <Ohjangwon />
            <Image
              alt=""
              src="/blob.png"
              className="-top-[35%] scale-[105%] -rotate-45 blur-3xl inset-x-0 absolute"
              width={800}
              height={800}
            />
          </div>
        </div>
        <QuickMenu />
      </main>
      <div className="bg-gradient-to-br  relative shadow-inner from-white via-white to-dksh-25 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 container sm:pr-0">
          <div className="py-24 sm:text-lg relative z-10">
            <h1 className="text-2xl font-extrabold">소개</h1>

            <p className="text-dksh-800 mt-4">
              강남구 대치동에 위치한 단국대학교부속소프트웨어고등학교는
              <br className="hidden sm:block" /> 대학 진학을 목표로 하는
              소프트웨어 전문 특성화고등학교입니다.
            </p>
            <p className="text-dksh-800 max-w-[45ch]  mt-4">
              학생들이 소프트웨어, AI 등을 기반으로 대학에 진학할 수 있도록
              전문적인 교사진을 구성해 진로 지도에 힘써오고 있습니다.
            </p>
          </div>
          <div className="w-full h-full min-h-[9rem] relative">
            <Image
              fill
              quality={100}
              alt=""
              src="/wow.png"
              className="object-cover z-10  object-center select-none h-full "
            />
          </div>
        </div>
      </div>
      <div className=" py-20  ">
        <div className="container  text-sm">
          <div className="lg:px-8 max-w-6xl text-center mx-auto">
            <span className="text-dksh-500 font-semibold mt-8">
              단대소고만의 장점
            </span>

            <h1 className="font-extrabold text-4xl mt-4">이래서 단대소고다!</h1>
            <p className=" mt-4 max-w-[50ch] mx-auto">
              <Balancer>
                단국대학교부속소프트웨어고등학교는 소프트웨어 전문 고등학교로써
                소프트웨어 분야에 특화된 교육과정으로 학생들의 미래를
                준비합니다.
              </Balancer>
            </p>
          </div>
          <div className="grid mt-12 items max-w-5xl mx-auto -center gap-4 grid-cols-1 lg:grid-cols-[1fr_0.19fr_1fr]">
            <div className="border border-gray-4 bg-gradient-to-br from-white via-gray-1 to-gray-2 p-6 rounded-lg lg:col-span-2">
              <span className="flex items-center gap-2">
                <Cpu className="stroke-dksh-400" />
                <h2 className="text-xl tracking-tight font-bold">
                  SOFTWARE 전공 학과 운영
                </h2>
              </span>
              <p className="mt-2">
                단대소고 학생들은 2학년부터
                인공지능소프트웨어·사물인터넷소프트웨어·게임콘텐츠의
                <br />
                전공 학과를 선택하게 됩니다.
                <br />
                학생들은 2학년부터 원하는 학과를 선택하여 심화된 교육을 받을 수
                있습니다.
              </p>
            </div>
            <div className="border border-gray-4 bg-gradient-to-br from-white via-gray-1 to-gray-2 p-6 rounded-lg">
              <span className="flex items-center gap-2">
                <Library className="stroke-violet-600" />
                <h2 className="text-xl tracking-tight  font-bold">
                  우수한 교사진
                </h2>
              </span>
              <p className="mt-2">
                단대소고는 소프트웨어 우수한 교사진을 보유하고 있습니다.
                <br />
                학생들의 진로를 위해 교사들은 끊임없이 노력하고 있습니다.
              </p>
            </div>
            <div className="border border-gray-4 bg-gradient-to-br from-white via-gray-1 to-gray-2 p-6 rounded-lg">
              <span className="flex items-center gap-2">
                <School className="stroke-pink-500" />
                <h2 className="text-xl tracking-tight font-bold">
                  최고의 시설
                </h2>
              </span>
              <p className="mt-2">
                각 교실은 전자칠판이 설치되어 있으며, 학생들은 노트북을
                지참합니다.
                <br />
                학생들은 스터디카페, 다수의 실습실 등 쾌적한 시설을 사용할 수
                있습니다.
              </p>
            </div>
            <div className="border border-gray-4 bg-gradient-to-br from-white via-gray-1 to-gray-2 p-6 rounded-lg lg:col-span-2">
              <span className="flex items-center gap-2">
                <Users2 className=" stroke-sky-500" />
                <h2 className="text-xl tracking-tight font-bold">
                  학생 주도 동아리 시스템
                </h2>
              </span>
              <p className="mt-2">
                단대소고는 학생들이 직접 만들고 이끄는 동아리 시스템을 운영하고
                있습니다.
                <br />
                학생들이 자율적으로 개설한 21개의창체동아리가 있으며, 학생들은
                동아리에서 자신의 역량을 키우고 진로를 탐색할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-24">
        <h1 className="text-4xl font-extrabold xl:px-8">세부 전공 소개</h1>
        <hr className="my-5 border-gray-4" />
        <div className=" grid xl:grid-cols-3  mx-auto gap-12 text-sm text-gray-11 justify-center place-items-center">
          <div className="max-w-xs">
            <div className="bg-pink-500 text-white h-10 w-10 rounded-full  flex items-center justify-center">
              <BrainCircuit />
            </div>
            <h2 className="text-xl mt-2 font-semibold tracking-wide text-gray-12">
              AI SOFTWARE
            </h2>
            <p className="mt-2">
              4차 산업혁명과 함께 산업 전 분야에서 AI 응용 기술에 대한 수요가
              급격히 증가함에 따라, 데이터 과학 기초 교육, 기초 AI 원리 교육 및
              응용실습을 통한 융·복합 인재 양성을 목표로 하고 있습니다.
            </p>
          </div>
          <div className="max-w-xs">
            <div className="bg-dksh-400 text-white h-10 w-10 rounded-full  flex items-center justify-center">
              <Router />
            </div>

            <h2 className="text-xl mt-2 font-semibold tracking-wide text-gray-12">
              IoT SOFTWARE
            </h2>
            <p className="mt-2">
              지능화된 사물들과 인터넷을 통해 새로운 서비스와 효용이 창출될 수
              있도록 기초 기술에서 응용 기술까지 이론과 실무 능력을 고루 갖춘
              수준 높은 엔지니어를 양성하는 학과입니다.
            </p>
          </div>
          <div className="max-w-xs">
            <div className="bg-violet-500 text-white h-10 w-10 rounded-full  flex items-center justify-center">
              <Gamepad />
            </div>
            <h2 className="text-xl mt-2 font-semibold tracking-wide text-gray-12">
              GAME SOFTWARE
            </h2>
            <p className="mt-2">
              21세기 문화 산업의 중심이 되고 있는 게임 산업의 주역이 되는 게임
              개발자가 되기 위해 게임 컨텐츠과에서 배우는 모든 과정은 창조하고
              도전하는 현장맞춤형 실무능력을 보유한 인재 양성을 목표로 합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-24">
        <div className="flex items-center justify-center flex-wrap gap-8">
          <div className=" max-w-xl overflow-hidden rounded-xl w-full shadow-inner">
            <Image
              className="hover:scale-105 transition duration-300"
              alt="단대소고 위치"
              src="/map.png"
              width={1140}
              height={789}
            />
          </div>
          <div className=" max-w-sm pb-16">
            <h1 className="text-3xl font-bold">오시는 길</h1>
            <p className=" text-gray-11 mt-8">
              단대소고는 교육 1번지 강남구 대치동의 중심에 위치해 있습니다.
              한티역 3번 출구에서 도보 5분 거리에 위치해 있어 통학이 유리합니다.
            </p>
            <h2 className="font-bold mt-8">세부 주소</h2>
            <p>
              [06278] 서울 강남구 도곡로64길 21 <br />
              (대치동 1013, 단국대학교부속소프트웨어고등학교)
            </p>
          </div>

          <div className="container gap-8 w-full py-24 relative">
            <span className="text-dksh-500 text-sm font-bold">SLOGAN</span>
            <h2 className="font-extrabold tracking-wide bg-clip-text bg-gradient-to-br from-black to-dksh-500 text-transparent text-6xl mt-2">
              탁월함을 넘어 감동으로!
            </h2>
            <p className="text-gray-11 mt-8 max-w-prose">
              단대소고는 학생들이 탁월함을 넘어 감동을 주는 인재로 성장할 수
              있도록 최선을 다하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "단국대학교부속소프트웨어고등학교",
};
