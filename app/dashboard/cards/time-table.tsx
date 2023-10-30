import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/auth";
import convert from "xml-js";

function convertToDate(dateString: string) {
  let year = dateString.slice(0, 4);
  let month = dateString.slice(4, 6);
  let day = dateString.slice(6, 8);

  let date = new Date(`${year}-${month}-${day}`);

  return date;
}

function getNextMonday() {
  const today = new Date();
  const day = today.getDay();
  let nextMonday;

  // If today is Sunday (0) or Saturday (6)
  if (day == 1) {
    nextMonday = today;
  } else if (day === 0 || day === 6) {
    nextMonday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (day === 0 ? 2 : 3)
    );
  } else {
    nextMonday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (1 - day)
    );
  }

  return nextMonday;
}

const replaceArray: Record<string, string> = {
  "디지털 논리 회로": "디논",
  프로그래밍: "프로",
  "컴퓨터 시스템 일반": "컴일",
  통합사회: "통사",
  통합과학: "통과",
  동아리활동: "CA",
  자율활동: "자율",
  진로활동: "진로",
  봉사활동: "자율",
};

export const TimeTableCard = async () => {
  const session = await getSession();

  const grade = session?.user?.grade;
  const _class = session?.user?.class;

  if (!grade || !_class) return null;

  const monday = getNextMonday().toISOString().slice(0, 10).replaceAll("-", "");

  const friday = new Date(
    getNextMonday().setDate(getNextMonday().getDate() + 4)
  )
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", "");

  const res = await fetch(
    `https://open.neis.go.kr/hub/hisTimetable?ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7011489&AY=2023&TI_FROM_YMD=${monday}&TI_TO_YMD=${friday}&GRADE=${grade}&CLASS_NM=${_class}&KEY=db0fd655b1eb4b6bb43edcf250d4b9d1`,
    {
      next: { revalidate: 3600 },
    }
  );

  const data = await res.text();

  const json: any = convert.xml2js(data, {
    compact: true,
    ignoreDeclaration: true,
  });

  let classes = new Array(5).fill("").map(() => new Array(7).fill(""));

  json.hisTimetable.row.forEach(
    (item: {
      ALL_TI_YMD: { _cdata: string };
      PERIO: { _cdata: string };
      ITRT_CNTNT: { _cdata: string };
    }) => {
      const day = convertToDate(item.ALL_TI_YMD._cdata).getDay() - 1;

      const period = parseInt(item.PERIO._cdata) - 1;
      const subject = item.ITRT_CNTNT._cdata;

      //replace from replaceArray
      classes[day][period] =
        subject in replaceArray ? replaceArray[subject] : subject;
    }
  );

  const today = new Date().getDay() - 1;

  return (
    <Card className="w-full sm:max-w-xl">
      <CardHeader>
        <CardTitle>시간표</CardTitle>
      </CardHeader>
      <div className="pt-0 p-2 sm:p-4">
        <table className=" prose-th:first:px-2 prose-td:font-medium prose-td:border w-full prose-td:last:pr-4 prose prose-sm prose-td:text-center max-w-none">
          <thead>
            <tr>
              {["교시", "월", "화", "수", "목", "금"].map((d) => (
                <th scope="col" key={`day-${d}`}>
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(7)].map((_, i) => (
              <tr key={`${i}교시`}>
                <th className="text-xs">{i + 1}교시</th>
                {[...Array(5)].map((_, j) => (
                  <td
                    className={today == j ? "bg-yellow-2" : ""}
                    key={`${i}-${j}`}
                  >
                    {classes[j][i]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
