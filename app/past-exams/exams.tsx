"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function GradeExams({
  grade,
  data,
}: {
  grade: number;
  data: Record<
    string,
    {
      midterm: {
        previewUrl: string;
        downloadUrl: string;
        subject: string;
      }[];
      final: { previewUrl: string; downloadUrl: string; subject: string }[];
    }
  >;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {Object.keys(data).map((yearhakgi) => {
        const year = yearhakgi.split("-")[0];
        const hakgi = yearhakgi.split("-")[1];

        return (
          <AccordionItem value={yearhakgi} key={yearhakgi}>
            <AccordionTrigger className="font-bold text-xl">
              {year}년 {hakgi}학기
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-[0.4fr_1fr] lg:grid-cols-2 gap-8">
                <h3> 중간고사 </h3>
                <ul>
                  {data[yearhakgi].midterm?.map((exam) => (
                    <li key={exam.subject}>
                      <h4>{exam.subject}</h4>
                      <div className="flex items-center gap-2">
                        <a href={exam.previewUrl} target="_blank">
                          미리보기
                        </a>
                        <a href={exam.downloadUrl} target="_blank">
                          다운로드
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
                <h3>기말고사</h3>
                <ul>
                  {data[yearhakgi].final.map((exam) => (
                    <li key={exam.subject}>
                      <h4>{exam.subject}</h4>
                      <div className="flex items-center gap-2">
                        {" "}
                        <a href={exam.previewUrl} target="_blank">
                          미리보기
                        </a>
                        <a href={exam.downloadUrl} target="_blank">
                          다운로드
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
