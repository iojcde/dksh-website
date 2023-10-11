export const QuickMenu = () => (
  <div className="quick-menu absolute bottom-0 inset-x-0 text-xs border-b border-gray-2 sm:text-sm text-gray-11">
    <div className="w-full bg-gradient-to-b from-transparent to-black/50 h-8"></div>
    <div className="bg-black/50">
      <div className="flex items-center container justify-center w-full  pb-2">
        <div className="w-full hidden sm:block">
          <span className="font-bold mr-4  ">최근 학교소식</span>
          <span>오장원 선생님이 단대부고로 가심</span>
        </div>

        <div className="seperator h-8 w-1 border-white" />

        <div className="w-full">
          <span className="font-bold mr-4">오늘의 급식</span>
          <span className="tracking-wide">
            혼합잡곡밥 다시마무채국 고구마닭갈비 치즈어묵바 깻잎쌈 배추김치
          </span>
        </div>
      </div>
    </div>
  </div>
);
