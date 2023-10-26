import { Card } from "@/components/ui/card";
import Image from "next/image";
const BrandingPage = () => (
  <div className="container max-w-6xl py-24">
    <span className="text-dksh-500 text-sm font-bold">SYMBOLS</span>
    <h1 className="text-6xl font-extrabold mt-2">학교 상징</h1>
    <p className="mt-4">단대소고의 상징에 대해 알아보세요.</p>
    <div className="py-20">
      <h2 className="text-5xl font-extrabold ">로고</h2>
      <p className="max-w-[62ch] text-gray-11 mt-8">
        단대소고 로고는 영문 이니셜 DKSH를 중심으로 역동적으로 회전하는 빛을
        상징화하였습니다. 또한, 회전하는 궤도 안의 DKSH는 단국인의 하나된 마음과
        면학에 대한 굳은 의지를 담고 있습니다.
      </p>
      <div className="flex items-center justify-center p-8 rounded-xl border mt-8 shadow-inner bg-gray-1">
        <Image
          src="/dksh-logo.png"
          className="black-to-dksh mt-4 select-none"
          width={220}
          height={96}
          quality={100}
          alt="단대소고 로고"
        />
      </div>
    </div>

    <div className="py-20">
      <h2 className="mt-8 text-5xl font-extrabold">교훈</h2>
      <div className="mt-8 max-w-xl space-y-8 w-full">
        <div className="text-xl xl:text-4xl font-extrabold w-full bg-gradient-to-br text-transparent from-gray-12 to-dksh-500 bg-clip-text">
          나를 알며, 참에 살고, 공부하며 일하자.
        </div>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4">
            <h3 className="text-xl font-semibold">나를 알며</h3>
            <p className="text-gray-11">
              학생으로서, 한국인으로서, 세계인으로서 나
            </p>
            <span className="sm:ml-auto text-dksh-600">가치관 확립</span>
          </div>
          <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4">
            <h3 className="text-xl font-semibold">참에 살고</h3>
            <p className="text-gray-11">정의 구현, 충효심 양양, 인류애 발휘</p>
            <span className="sm:ml-auto text-dksh-600"> 진리추구</span>
          </div>

          <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4">
            <h3 className="text-xl font-semibold">공부하며 일하자</h3>
            <p className="text-gray-11">학업충실, 일인일기 습득, 실천봉공</p>

            <span className="sm:ml-auto text-dksh-600"> 보은보국</span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-20 grid grid-cols-2">
      <div>
        <h2 className="mt-8 text-2xl font-extrabold">교목 - 향나무</h2>
        <Image
         className="mt-4"
          alt="향나무"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Miryang_juniperus_chinensis.jpg"
          width={450}
          height={600}
        />
      </div>
      <div>
        <h2 className="mt-8 text-2xl font-extrabold">교화 - 철쭉</h2>
        <Image className="mt-4" alt="철쭉" src="/flower.webp" width={390} height={261} />
      </div>
    </div>
  </div>
);

export default BrandingPage;
