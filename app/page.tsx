import { QuickMenu } from "@/components/home/quick-menu";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <Nav />
        <main className="container grid lg:mt-20 text-white grid-cols-1 justify-between pb-24  lg:grid-cols-[1fr_1fr] md:items-center w-full h-full">
          <div className="py-20 md:px-6">
            {/* <div className="border select-none mb-2 border-orange-5 bg-orange-4 max-w-min whitespace-nowrap rounded-full px-2 py-1 text-xs">
                <span className="font-semibold uppercase">New</span> Kaiwa is
                now in alpha!
              </div> */}

            <h1 className="font-display font-bold -ml-[0.06em] mt-2 text-6xl lg:tracking-tight lg:text-8xl">
              단대소고
            </h1>
            <p className="mt-4 max-w-[32ch] text-gray-300 md:text-xl">
              단대소고는 수도권 유일 소프트웨어 고등학교입니다.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <Link
                href="/login"
                className=" inline-block select-none rounded-md border border-dksh-600 bg-gradient-to-br from-dksh-500 to-dksh-400  p-2 px-8 text-white  transition  hover:opacity-95 hover:shadow"
              >
                더 알아보기
              </Link>

              <Link
                href="/login"
                className="inline-block select-none rounded-md bg-gradient-to-br bg-gray-1 border  p-2 px-8 text-gray-12 transition  hover:opacity-95 hover:shadow"
              >
                재학생 포털
              </Link>
            </div>
          </div>

          <div className="lg:mt-12 w-full rounded-[16px] shadow-xl">
            <div className="w-full overflow-clip rounded-md lg:rounded-2xl ">
              <iframe
                className="w-full h-full aspect-video  outline-none border-none"
                src="https://www.youtube.com/embed/8wrRpArJJ8I?si=vGB7VFqldKZseDR8&autoplay=1&mute=1&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          <QuickMenu />

          <div className=" -z-10  absolute inset-0 h-full">
            <Image
              src="/dksh.webp"
              fill
              alt=""
              className=" object-cover sm:object-center object-[80%_40%] select-none "
            />
            <div className="bg-black/40 sm:bg-black/[35%] absolute inset-0 z-0"></div>
          </div>
        </main>
      </div>

      <div className="bg-gradient-to-br from-black via-black to-dksh-900 pt-24">
        <div className="container">
          <div>소개</div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "단국대학교부속소프트웨어고등학교",
};
