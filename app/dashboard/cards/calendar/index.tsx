import { getCalendar } from "@/actions/board/get-calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JSDOM } from "jsdom";

const removeEl = (document: Document, queryselector: string) => {
  document.querySelectorAll(queryselector).forEach((el) => {
    el.remove();
  });
};

export const CalendarCard = async () => {
  const data = await getCalendar({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  const dom = new JSDOM(data);
  const document = dom.window.document;

  removeEl(document, "script");
  removeEl(document, ".calendar_top_button");
  removeEl(document, "form[name=searchForm]");
  removeEl(document, "#cntTitle");

  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>
          {new Date().getFullYear()}년 {new Date().getMonth()}월 학사일정
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-scroll">
        <div
          className="prose prose-sm prose-ul:list-disc prose-td:min-w-[7rem] prose-td:h-[8rem] prose-td:border prose-thead:border-0 max-w-none prose-li:line-clamp-1 prose-td:px-3 prose-td:py-1 prose-ul:px-1 sm:prose-ul:px-2 border-collapse calendar"
          dangerouslySetInnerHTML={{
            __html: document.querySelector(".calendar_type01")
              ?.innerHTML as string,
          }}
        />
      </CardContent>
    </Card>
  );
};
