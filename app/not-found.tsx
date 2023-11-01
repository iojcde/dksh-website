import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="container py-24">
      <span className="text-pink-500 font-semibold">404 NOT FOUND</span>
      <h1 className="text-3xl sm:text-4xl font-bold mt-4">
        요청하신 페이지를 찾을 수 없습니다.
      </h1>

      <Link className={cn(buttonVariants(), "mt-8 group")} href="/">
        <ArrowLeft size={16} className=" group-hover:-translate-x-1 transition" /> 홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
