import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="  pb-16">
        <main className="container grid text-white min-h-[calc(100vh-72px)] grid-cols-1 justify-between pb-24 md:h-auto md:grid-cols-[1fr_1fr] md:items-center w-full">
          <div>
            <div className="py-20 md:px-6">
              {/* <div className="border select-none mb-2 border-orange-5 bg-orange-4 max-w-min whitespace-nowrap rounded-full px-2 py-1 text-xs">
                <span className="font-semibold uppercase">New</span> Kaiwa is
                now in alpha!
              </div> */}

              <h1 className="font-display font-bold -ml-[0.06em] mt-2 text-8xl tracking-tight lg:text-8xl">
                단대소고
              </h1>
              <p className="mt-4 max-w-[32ch] text-gray-3 md:text-xl">
                단대소고는 어쩌고 저쩌고 소프트웨어 고등학교입니다.
              </p>
              <Link
                href="/login"
                className="mt-8 inline-block select-none rounded-full bg-gradient-to-br from-dksh-500 to-dksh-400  p-2 px-8 text-white  transition  hover:opacity-95 hover:shadow"
              >
                더 알아보기
              </Link>
            </div>
            <div className=" -z-10  absolute inset-0">
              <Image
                src="/dksh.webp"
                fill
                alt=""
                className=" object-cover object-center "
              />
              <div className="bg-black/30 absolute inset-0 z-0"></div>
            </div>
          </div>

          <div className="mt-12 hidden w-full rounded-[16px] border border-gray-12 bg-gray-12 p-1 shadow-xl dark:bg-background md:block">
            <div className="w-full overflow-clip rounded-xl ">
              <iframe
                className="w-full h-full aspect-video"
                src="https://www.youtube.com/embed/8wrRpArJJ8I?si=vGB7VFqldKZseDR8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export const metadata = {
  title: "Kaiwa - Collaborative document editor",
};
