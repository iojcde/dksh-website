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


  return (
    <Card className="col-span-3 w-full">
      <CardHeader>
        <CardTitle>{new Date().getMonth()}월 학사일정</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="prose prose-sm"
          dangerouslySetInnerHTML={{
            __html: document.querySelector(".calendar_type01")
              ?.innerHTML as string,
          }}
        />
      </CardContent>
    </Card>
  );
};
