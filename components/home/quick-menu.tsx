import { getMeal } from "@/actions/meal/get-meal";
import { Suspense } from "react";

const QuickMenu = async () => {
  const dish = await getMeal();
  return (
    <div className="quick-menu absolute bottom-0 z-20 inset-x-0 text-xs border-b border-gray-7 sm:text-sm text-gray-11">
      <div>
        <div className="flex items-center container justify-center w-full  pb-2">
          <div className="w-full hidden md:block">
            <span className="font-bold mr-4  ">최근 학교소식</span>
            <span>[교무] 2023학년도 건강체력교실 운영 안내</span>
          </div>

          <div className="seperator h-8 w-1 border-white" />

          <div className="w-full sm:flex">
            <div className="font-bold mr-4">오늘의 급식</div>

            <div className="tracking-wide mt-1 sm:mt-0">
              {typeof dish === "string" ? dish : dish?.join(" ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuickMenu;
