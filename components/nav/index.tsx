import Link from "next/link";
import { Button } from "../ui/button";
const Nav = () => {
  return (
    <div className="py-4 px-6 lg:px-12 w-full flex text-white justify-between  items-center">
      <Link href="/" className="font-bold text-2xl tracking-tight">
        DKSH
      </Link>

      <div className="flex items-center lg:gap-12">
        <Link className="hidden sm:block" href="/about">
          소개
        </Link>
        <Link className="hidden sm:block" href="/login">
          로그인
        </Link>
        <button>메뉴</button>
      </div>
    </div>
  );
};
export default Nav;
