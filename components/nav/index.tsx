import Link from "next/link";
import { Button } from "../ui/button";
const Nav = () => {
  return (
    <div className="py-4 lg:px-12 w-full flex text-white justify-between text-lg items-center">
      <Link href="/" className="font-bold text-2xl tracking-tight">
        DKSH
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/about">소개</Link>
        <Link href="/login">로그인</Link>
        <button>메뉴</button>
      </div>
    </div>
  );
};
export default Nav;
