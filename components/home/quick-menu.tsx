const QuickMenu = async () => {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const res = await fetch(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7011489&MLSV_YMD=${date}`,
    {
      next: { revalidate: 3600 },
    }
  );

  const data = await res.text();
  const match = data.match(
    /<DDISH_NM>\s*<!\[CDATA\[\s*(.*?)\s*\]\]>\s*<\/DDISH_NM>/
  );

  const dish = match ? match[1] : null;

  return (
    <div className="quick-menu absolute bottom-0 z-20 inset-x-0 text-xs border-b border-gray-7 sm:text-sm text-gray-11">
      <div>
        <div className="flex items-center container justify-center w-full  pb-2">
          <div className="w-full hidden md:block">
            <span className="font-bold mr-4  ">최근 학교소식</span>
            <span>망상하지 마세요.</span>
          </div>

          <div className="seperator h-8 w-1 border-white" />

          <div className="w-full sm:flex">
            <div className="font-bold mr-4">오늘의 급식</div>
            <div className="tracking-wide mt-1 sm:mt-0">
              {dish
                ?.replaceAll("<br/>", "")
                .replaceAll(/\(.*?\)/g, "")
                .replaceAll(/☆|★/g, "")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuickMenu;
