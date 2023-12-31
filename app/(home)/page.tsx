import QuickMenu from "@/components/home/quick-menu";
import { Suspense } from "react";
import { BrainCircuit, Router, Gamepad, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Details } from "../details";
import dynamic from "next/dynamic";
import { AmbientLight } from "./ambient-light";
import { JinhakTable } from "./jinhak-table";
import { CollegeLogos } from "./college-logos";
import { Outline } from "./outline/outline";

const Ohjangwon = dynamic(() => import("./ohjangwon"));

export default async function Home() {
  return (
    <>
      <main
        id="hero"
        className="-mt-12 bg-gradient-tob bg-[#000212] dark flex items-center  text-gray-12 relative min-h-screen overflow-hidden  pb-24 justify-between w-full  h-full"
      >
        <div className="inset-0 absolute lmao"></div>

        <div className="w-full container flex flex-col h-full pt-16  pb-8   text-center justify-center items-center gap-6 ">
          <div className="relative z-30 mt-12">
            <div className="select-none mb-8 max-w-min whitespace-nowrap mx-auto rounded-full px-4 py-1 text-xs text-gray-12 border bg-gray-12/10">
              2023학년 졸업생 카이스트, 한국뉴욕주립대 합격
            </div>

            <h1 className="hero-title tracking-wide font-bold text-6xl sm:text-7xl  lg:text-8xl bg-clip-text bg-gradient-to-br from-gray-12 via-gray-12 to-gray-9 text-transparent ">
              단대소고
            </h1>
            <p className="mt-4 text-gray-11 sm:text-lg mx-auto max-w-[48ch] break-normal ">
              <Balancer>
                강남구 대치동에 위치한 단국대학교부속소프트웨어고등학교는 수도권
                유일 소프트웨어 고등학교입니다.
              </Balancer>
            </p>
            <div className="mt-8 justify-center flex items-center gap-2">
              <Link
                href="/about"
                className=" inline-block select-none rounded-full bg-gradient-to-br from-indigo-500 to-dksh-500  p-2 px-8 text-white  text-sm transition hover:opacity-95 hover:shadow"
              >
                더 알아보기
              </Link>

              <Link
                href="/dashboard"
                className="inline-block select-none rounded-full bg-gradient-to-br bg-gray-1 border border-gray-4 p-2 px-8 text-gray-12 transition  text-sm hover:opacity-95 hover:shadow"
              >
                재학생 포털
              </Link>
            </div>
          </div>

          <div className="w-full relative max-w-2xl mt-16  z-20 ">
            <div className="-mx-2 promote-video ambilight relative z-20 bg-gray-2  shadow-xl rounded-xl border-gray-5 border p-1 lg:rounded-2xl  ">
              <div className="overflow-hidden rounded-[8px] lg:rounded-xl aspect-video border border-gray-4 relative">
                <iframe
                  className="absolute  top-0 left-0 w-full h-[calc(100%+1px)] inset-y-0  border-0 right-1"
                  src="https://www.youtube.com/embed/8wrRpArJJ8I?si=vGB7VFqldKZseDR8&autoplay=1&mute=1&loop=1&modestbranding=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>

            <AmbientLight />
            <Ohjangwon />

            {/* <Image
              alt=""
              src="/blob.png"
              className="-top-[35%] scale-[105%] -rotate-45 blur-3xl inset-x-0 absolute mx-auto"
              width={800}
              height={800}
            /> */}
          </div>
        </div>
        <Suspense>
          <QuickMenu />
        </Suspense>
      </main>

      <Outline />

      <section className="bg-gradient-to-br  relative mt-20 from-white via-white to-dksh-25 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 container sm:pr-0">
          <div className="py-24 sm:text-lg relative z-10  bg-transparent">
            <h1 className="text-3xl font-extrabold">소개</h1>

            <p className="text-dksh-800 mt-4">
              강남구 대치동에 위치한 단국대학교부속소프트웨어고등학교는
              <br className="hidden sm:block" /> 대학 진학을 목표로 하는
              소프트웨어 전문 특성화고등학교입니다.
            </p>
            <p className="text-dksh-800 max-w-[45ch]  mt-4">
              학생들이 자신의 적성을 찾고 역량을 강화해 대학에 진학할 수 있도록
              전문적인 교사진을 구성해 진로 지도에 힘써오고 있습니다.
            </p>
          </div>

          <div className="w-full h-full min-h-[9rem] relative">
            <Image
              fill
              quality={100}
              alt=""
              src="/wow.png"
              className="object-cover z-10  object-top  select-none h-full "
            />
          </div>
        </div>
      </section>

      {/*       
      <section className=" py-24 relative text-sm">
        <div className="lg:px-8 container max-w-6xl text-center mx-auto">
          <span className="text-pink-500 font-semibold mt-8">
            단대소고만의 장점
          </span>

          <h1 className="font-extrabold text-4xl lg:text-5xl mt-4">
            이래서 단대소고다!
          </h1>
          <p className=" mt-4 max-w-[50ch] mx-auto break-keep">
            <Balancer>
              단국대학교부속소프트웨어고등학교는 소프트웨어 전문 고등학교로써
              소프트웨어 분야에 특화된 교육과정으로 학생들의 미래를 준비합니다.
            </Balancer>
          </p>
        </div>
        <div className="hide-scrollbar h-56 sm:h-auto w-full container overflow-auto flex snap-x snap-mandatory sm:grid mt-12 items-stretch max-w-5xl gap-4 sm:grid-cols-[1fr_0.19fr_1fr]">
          <div className="min-w-full snap-center border border-gray-4  p-6 rounded-lg sm:col-span-2">
            <span className="flex items-center gap-2">
              <Cpu className="stroke-dksh-400" />
              <h2 className="text-xl tracking-tight font-bold">
                SOFTWARE 전공 학과 운영
              </h2>
            </span>
            <p className="mt-2">
              단대소고 학생들은 2학년부터
              인공지능소프트웨어·사물인터넷소프트웨어·게임콘텐츠의 전공 학과를
              선택하게 됩니다. 학생들은 2학년부터 원하는 학과를 선택하여 심화된
              교육을 받을 수 있습니다.
            </p>
          </div>
          <div className="min-w-full snap-center border border-gray-4  p-6 rounded-lg">
            <span className="flex items-center gap-2">
              <Library className="stroke-violet-600" />
              <h2 className="text-xl tracking-tight  font-bold">
                우수한 교사진
              </h2>
            </span>
            <p className="mt-2">
              단대소고는 우수한 소프트웨어 교사진을 보유하고 있습니다. 학생들의
              진로를 위해 교사들은 끊임없이 노력하고 있습니다.
            </p>
          </div>
          <div className="min-w-full snap-center border border-gray-4  p-6 rounded-lg">
            <span className="flex items-center gap-2">
              <School className="stroke-pink-500" />
              <h2 className="text-xl tracking-tight font-bold">최고의 시설</h2>
            </span>
            <p className="mt-2">
              각 교실은 전자칠판이 설치되어 있으며, 학생들은 노트북을
              지참합니다. 학생들은 스터디카페, 다수의 실습실 등 쾌적한 시설을
              사용할 수 있습니다.
            </p>
          </div>
          <div className="min-w-full snap-center border border-gray-4  p-6 rounded-lg sm:col-span-2">
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
              학생들이 자율적으로 개설한 21개의 창체동아리가 있으며, 학생들은
              동아리에서 자신의 역량을 키우고 진로를 탐색할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 h-1 w-52 rounded-full bg-gradient-to-r from-transparent to-dksh-400 sm:hidden"></div>
      </section> */}

      <section className="pt-32">
        <div className="pb-10">
          <div className="container">
            <span className="text-violet-500 pl-1  font-bold tracking-wide">
              세부 전공 소개
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mt-4">
              각 분야에 특화된 학과
            </h1>

            <p className="text-gray-11 mt-6  max-w-prose">
              단대소고는 소프트웨어 전문 고등학교로써 소프트웨어 분야에 특화된
              교육과정으로 학생들의 미래를 준비합니다. 학생들은 2학년부터 원하는
              학과를 선택하여 심화된 교육을 받을 수 있습니다.
            </p>

            <Link
              href="/about/departments"
              className="inline-flex items-center bg-violet-50 hover:bg-violet-200 focus:ring-violet-600 focus:outline-none focus:ring-2 text-violet-900 rounded-full gap-2 px-4 py-2 text-sm mt-8 text-dksh-900 font-bold"
            >
              더 알아보기 <ChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className=" pt-8 pb-24  relative">
          <div className="absolute  -z-10 inset-0 overflow-hidden [mask-image:linear-gradient(0deg,transparent,black)]">
            <Image src="/jumbo.png" className="object-cover " fill alt="" />
            <div className="absolute inset-0 opacity-80 bg-grid  z-20" />
          </div>

          <div className="container max-w-[88rem] grid xl:grid-cols-3 mt-2 gap-4  xl:gap-12 text-sm text-gray-11 justify-center  place-items-center sm:place-items-stretch">
            <div className="ring-1 ring-gray-4 rounded-lg px-8 py-6 bg-white shadow-lg">
              <div className="bg-pink-500 text-white h-10 w-10 rounded-full  flex items-center justify-center">
                <BrainCircuit />
              </div>
              <h2 className="text-xl mt-2 font-bold tracking-wide text-gray-12">
                AI SOFTWARE
              </h2>
              <p className="mt-2 break-keep">
                4차 산업혁명과 함께 산업 전 분야에서 AI 응용 기술에 대한 수요가
                급격히 증가함에 따라, 데이터 과학 기초 교육, 기초 AI 원리 교육
                및 응용실습을 통한 융·복합 인재 양성을 목표로 하고 있습니다.
              </p>
            </div>
            <div className="ring-1 ring-gray-4 rounded-lg px-8 py-6 bg-white shadow-lg">
              <div className="bg-dksh-400 text-white h-10 w-10 rounded-full  flex items-center justify-center">
                <Router />
              </div>

              <h2 className="text-xl mt-2 font-bold tracking-wide text-gray-12">
                IoT SOFTWARE
              </h2>
              <p className="mt-2 break-keep">
                지능화된 사물들과 인터넷을 통해 새로운 서비스와 효용이 창출될 수
                있도록 기초 기술에서 응용 기술까지 이론과 실무 능력을 고루 갖춘
                수준 높은 엔지니어를 양성하는 학과입니다.
              </p>
            </div>
            <div className="ring-1 ring-gray-4 rounded-lg px-8 py-6 bg-white shadow-lg">
              <div className="bg-violet-500 text-white h-10 w-10 rounded-full  flex items-center justify-center">
                <Gamepad />
              </div>
              <h2 className="text-xl mt-2 font-bold tracking-wide text-gray-12">
                GAME SOFTWARE
              </h2>
              <p className="mt-2 break-keep">
                21세기 문화 산업의 중심이 되고 있는 게임 산업의 주역이 되는 게임
                개발자가 되기 위해 게임 컨텐츠과에서 배우는 모든 과정은 창조하고
                도전하는 현장맞춤형 실무능력을 보유한 인재 양성을 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <span className="text-indigo-500 pl-1 font-bold tracking-wide">
            2023학년도 대입 결과
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-4">
            대학 입시 실적
          </h1>

          <p className="text-gray-11 mt-6 break-keep max-w-prose">
            2023학년도(1기) 단대소고 졸업생 100명 중 84명이 대학에 합격했습니다.
            서울대, 연세대, 고려대, 서강대, 성균관대, 한양대 등 서울 지역 주요
            6개 대학에 진학했고, 수도권 주요 대학에 79명의 합격생을
            배출했습니다.
          </p>

          <Link
            href="https://www.etnews.com/20230314000103"
            target="_blank"
            className="inline-flex items-center bg-indigo-50 hover:bg-indigo-200 focus:ring-indigo-600 focus:outline-none focus:ring-2 text-indigo-900 rounded-full gap-2 px-4 py-2 text-sm mt-8 text-dksh-900 font-bold"
          >
            더 알아보기 <ChevronRight size={16} />
          </Link>
        </div>
        <div className="relative pt-10 xl:pt-0 mt-10">
          <div className="absolute  -z-10 inset-0 overflow-hidden [mask-image:linear-gradient(0deg,transparent,black)]  xl:top-8">
            <Image src="/jumbo.png" className="object-cover" fill alt="" />
            <div className="absolute inset-0 opacity-80 bg-grid  z-20" />
          </div>

          <div className="container lg:grid lg:grid-cols-7 grid grid-cols-1 gap-6 lg:gap-8 ">
            <div className="bg-white lg:col-span-3 my-auto lg:mt-[4.5rem] rounded-xl shadow-xl p-6 lg:p-8 border">
              <CollegeLogos />
            </div>

            <div className="-mx-6 sm:mx-0 sm:rounded-2xl lg:col-span-4 bg-slate-900 shadow-2xl relative overflow-clip h-full border border-slate-700 dark">
              <div className="flex-none border-b border-slate-700">
                <div className="flex items-center h-8 space-x-1.5 px-3">
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                </div>
              </div>
              <h3 className="text-sm sm:text-center px-6 sm:px-8 mt-4 font-semibold tracking-wide text-slate-100">
                2023학년도 단대소고 졸업생 대학교 합격 정보
              </h3>
              <JinhakTable />
            </div>
          </div>
        </div>
      </section>

      <div className="container pt-24" id="where">
        <div className="flex items-center justify-center flex-wrap gap-8">
          <div className=" max-w-xl overflow-hidden rounded-xl bg-white w-full relative p-4 z-10 shadow-md border">
            <Image
              alt="단대소고 위치"
              src="/map.png"
              width={1140}
              height={789}
            />
            <div className="absolute inset-x-0 inset-y-4 border-t border-b border-slate-100 pointer-events-none dark:border-slate-700"></div>
            <div className="absolute inset-x-4 inset-y-0 border-l border-r border-slate-100 pointer-events-none dark:border-slate-700"></div>
          </div>
          <div className=" max-w-sm">
            <h1 className="text-4xl font-extrabold">오시는 길</h1>
            <p className=" text-gray-11 mt-8">
              단대소고는 교육 1번지 강남구 대치동의 중심에 위치해 있습니다.
              한티역 3번 출구에서 도보 5분 거리에 위치해 있어 통학에 용이합니다.
            </p>
            <h2 className="font-bold mt-8">세부 주소</h2>
            <p className="mt-2 text-gray-11">
              [06278] 서울 강남구 도곡로64길 21 <br />
              (대치동 1013, 단국대학교부속소프트웨어고등학교)
            </p>
          </div>
        </div>
      </div>

      <div className="container w-full py-24 pt-32 relative">
        <span className="text-dksh-500 text-sm font-bold tracking-wide">
          SLOGAN
        </span>
        <h2 className="font-extrabold break-keep tracking-wide bg-clip-text bg-gradient-to-br from-black to-dksh-400 text-transparent text-5xl max-w-[10ch] sm:max-w-none  leading-[1.2] lg:text-6xl mt-2">
          탁월함을 넘어 감동으로!
        </h2>
        <p className="text-gray-11 mt-8 max-w-prose">
          단대소고는 학생들이 탁월함을 넘어 감동을 주는 인재로 성장할 수 있도록
          최선을 다하고 있습니다.
        </p>
      </div>
    </>
  );
}

export const metadata = {
  title: "단국대학교부속소프트웨어고등학교",
  description:
    "강남구 대치동에 위치한 단국대학교부속소프트웨어고등학교는 수도권 유일 소프트웨어 고등학교입니다.",
};
