import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradeExams } from "./exams";

const PastExamsPage = () => {
  return (
    <div className="container py-24">
      <h1 className="font-extrabold text-4xl">기출문제</h1>

      <p className="mt-2">단대소고의 역대 기출문제를 모아놓은 페이지입니다.</p>
      <ExamsSection />
    </div>
  );
};
function ExamsSection() {
  return (
    <Tabs defaultValue="grade-1" className=" mt-8 max-w-3xl">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="grade-1">1학년</TabsTrigger>
        <TabsTrigger value="grade-2">2학년</TabsTrigger>
        <TabsTrigger value="grade-3">3학년</TabsTrigger>
      </TabsList>
      <TabsContent
        value="grade-1"
        className="container prose prose-sm max-w-none mt-8"
      >
        <h2 className="text-2xl font-bold">1학년 기출문제</h2>
        <GradeExams
          grade={1}
          data={{
            "2023-1": {
              midterm: [
                {
                  subject: "국어",
                  previewUrl: "",
                  downloadUrl: "",
                },
                {
                  subject: "영어",
                  previewUrl: "",
                  downloadUrl: "",
                },
              ],
              final: [
                {
                  subject: "국어",
                  previewUrl: "",
                  downloadUrl: "",
                },
                {
                  subject: "영어",
                  previewUrl: "",
                  downloadUrl: "",
                },
              ],
            },
            "2023-2": {
              midterm: [
                {
                  subject: "국어",
                  previewUrl: "",
                  downloadUrl: "",
                },
                {
                  subject: "영어",
                  previewUrl: "",
                  downloadUrl: "",
                },
              ],
              final: [
                {
                  subject: "국어",
                  previewUrl: "",
                  downloadUrl: "",
                },
                {
                  subject: "영어",
                  previewUrl: "",
                  downloadUrl: "",
                },
              ],
            },
          }}
        />
      </TabsContent>
      <TabsContent
        value="grade-2"
        className="container prose prose-sm  max-w-none mt-8"
      >
        <h2 className="text-2xl font-bold">2학년 기출문제</h2>
      </TabsContent>
      <TabsContent
        value="grade-3"
        className="container prose prose-sm  max-w-none mt-8"
      >
        <h2 className="text-2xl font-bold">3학년 기출문제</h2>
      </TabsContent>
    </Tabs>
  );
}

export default PastExamsPage;
