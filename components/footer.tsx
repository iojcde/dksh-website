import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-white flex-col gap-4 flex lg:flex-row justify-between container py-12 mt-8 border-t border-gray-4">
    <Image
      alt=""
      src="/dksh-logo.png"
      className="h-6 mt-4  object-contain object-left"
      width={500}
      height={46}
      quality={100}
    />

    <div className="w-[50%] font-semibold">
      <div className="flex gap-6 mb-2">
        <Link href="/about">소개</Link>
        <Link href="/login">재학생 포털</Link>
      </div>
      <span className="text-gray-10 font-normal text-xs block mt-2">
        [06278] 서울 강남구 도곡로64길 21 (대치동 1013,
        단국대학교부속소프트웨어고등학교)
      </span>
      <span className="text-gray-10 font-normal text-xs block mt-2">
        Made by 안지호,김태일 in DKSH
      </span>
    </div>
  </footer>
);
export default Footer;
