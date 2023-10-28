import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Utensils } from "lucide-react";

export const DishCard = async () => {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const res = await fetch(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010137&MLSV_YMD=${date}`,
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
    <Card  className="sm:max-w-xs w-full">
      <CardHeader>
        <div className="rounded-full text-white mb-1 bg-pink-500 p-2 aspect-square max-w-min">
          <Utensils />
        </div>
        <CardTitle className="font-bold">오늘의 급식</CardTitle>
        <CardDescription>
          {new Date().toLocaleDateString("ko-KR", {
            month: "long",
            day: "numeric",
            weekday: "long",
          })}{" "}
          급식
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className=" leading-8 text-lg font-medium"
          dangerouslySetInnerHTML={{
            __html:
              dish?.replaceAll(/\(.*?\)/g, "").replaceAll(/☆|★/g, "") ||
              "오늘은 급식이 없습니다.",
          }}
        ></p>
      </CardContent>
    </Card>
  );
};
