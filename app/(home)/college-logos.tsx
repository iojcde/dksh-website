import Image from "next/image";

export const CollegeLogos = () => (
  <div className="flex flex-wrap gap-4 sm:gap-2 justify-center">
    <div className="h-20 w-20  rounded-full border inline-flex items-center  justify-center">
      <Image
        className="select-none"
        src="/college/snu.svg"
        alt="서울대학교"
        width={50}
        height={50}
        quality={100}
      />
    </div>
    <div className="h-20 w-20  rounded-full border inline-flex items-center justify-center">
      <Image
        className="select-none"
        src="/college/kaist.svg"
        alt="KAIST"
        width={60}
        height={60}
        quality={100}
      />
    </div>
    <div className="h-20 w-20  rounded-full border inline-flex items-center justify-center">
      <Image
        className="select-none"
        src="/college/yonsei.svg"
        alt="연세대학교"
        width={60}
        height={60}
        quality={100}
      />
    </div>
    <div className="h-20 w-20  rounded-full border inline-flex items-center justify-center">
      <Image
        className="select-none mt-2"
        src="/college/korea.svg"
        alt="고려대학교"
        width={40}
        height={40}
        quality={100}
      />
    </div>
    <div className="h-20 w-20  rounded-full border inline-flex items-center justify-center">
      <Image
        className="select-none"
        src="/college/skku.svg"
        alt="성균관대학교"
        width={60}
        height={60}
        quality={100}
      />
    </div>
    <div className="h-20 w-20  rounded-full border inline-flex items-center justify-center">
      <Image
        className="select-none"
        src="/college/hanyang.svg"
        alt="한양대학교"
        width={60}
        height={60}
        quality={100}
      />
    </div>

    <div className="h-20 w-20 overflow-hidden  rounded-full border inline-flex items-center justify-center">
      <Image
        className="select-none"
        src="/college/unist.png"
        alt="UNIST"
        width={55}
        height={55}
        quality={100}
      />
    </div>

    <div className="h-20 w-20 overflow-hidden  rounded-full border inline-flex items-center justify-center">
      <Image
        className="select-none"
        src="/college/sogang.svg"
        alt="서강대학교"
        width={60}
        height={60}
        quality={100}
      />
    </div>

    <div className="h-20 w-20 overflow-hidden  rounded-full border inline-flex items-center justify-center">
      <Image
        className="select-none"
        src="/college/cau.svg"
        alt="중앙대학교"
        width={55}
        height={55}
        quality={100}
      />
    </div>
  </div>
);
