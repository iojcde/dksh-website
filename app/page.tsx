import QuickMenu from "@/components/home/quick-menu";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main
        id="hero"
        className="dark text-gray-12 relative min-h-screen text-white  justify-between pb-24  md:items-center w-full h-full"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 pt-24 lg:pt-32 gap-12">
          <div className="mt-16">
            <div className="border select-none mb-2 border-dksh-600 bg-dksh-600 max-w-min whitespace-nowrap rounded-full px-2 py-1 text-xs">
              <span className="font-semibold uppercase">New</span> 와우
            </div>

            <h1 className="font-display font-bold -ml-[0.06em] mt-2 text-6xl lg:tracking-tight lg:text-8xl">
              단대소고
            </h1>
            <p className="mt-4 max-w-[32ch] text-gray-300 md:text-xl">
              단대소고는 수도권 유일 소프트웨어 고등학교입니다.
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

          <div className="lg:mt-12 w-full rounded-[16px] shadow-xl">
            <div className="w-full overflow-clip rounded-sm lg:rounded-2xl  ">
              <iframe
                className="w-full h-full aspect-video  outline-none border-none relative z-20"
                src="https://www.youtube.com/embed/8wrRpArJJ8I?si=vGB7VFqldKZseDR8&autoplay=1&mute=1&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>

        <QuickMenu />

        <div className=" -z-20  absolute inset-0 h-full">
          <Image
            priority
            src="/dksh.webp"
            fill
            alt=""
            className="blur-[2px] scale-[1.05] object-cover sm:object-center object-[80%_40%] select-none "
          />
          <div className="bg-black/40 sm:bg-black/[35%] absolute inset-0 z-0"></div>
        </div>
      </main>

      <div className="bg-gradient-to-br relative shadow-inner from-white via-white to-[hsl(208,95%,85%)] ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 container pr-0">
          <div className="py-24 text-lg relative z-10">
            <h1 className="text-2xl font-bold">소개</h1>

            <p className="text-gray-11 max-w-[45ch]  mt-4 ">
              강남구 대치동 단국대학교부속소프트웨어고등학교(이하 단대소고)는
              대학 진학을 목표로 하는 소프트웨어 전문 특성화 고등학교입니다.
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

      <div className=" py-24 dark ">
        <div className="container">
          <h1 className="text-center  font-bold text-2xl">단대소고만의 장점</h1>

          <div>
            <h2 className="text-xl font-semibold">Software 전공 학과 운영</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "단국대학교부속소프트웨어고등학교",
};
