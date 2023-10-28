import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-gray-2 py-12 mt-8 border-gray-4 shadow-inner">
    <div className="flex-col gap-4 flex lg:flex-row justify-between container ">
      <Image
        alt=""
        src="/dksh-logo.png"
        className="h-12 black-to-dksh mt-4  object-contain object-left"
        width={195}
        height={84}
        quality={100}
      />
      <div className="sm:w-[50%] font-bold">
        <h2>단국대학교부속소프트웨어고등학교</h2>
        <span className="text-gray-10 mt-4 font-normal text-xs block">
          [06278] 서울 강남구 도곡로64길 21 (대치동 1013,
          단국대학교부속소프트웨어고등학교)
        </span>
        <span className="text-gray-10 font-normal text-xs block mt-2">
          Made by <a>안지호</a>, <a>김남훈</a>, <a>김태일</a> in DKSH
        </span>
      </div>
    </div>
  </footer>
);
export default Footer;
