import { getMeal } from "@/actions/meal/get-meal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Utensils } from "lucide-react";

export const DishCard = async () => {
  const meal = await getMeal();

  return (
    <Card className="sm:max-w-xs w-full">
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
        <p className=" leading-8 text-lg font-medium">
          {typeof meal === "string"
            ? meal
            : meal?.map((d) => (
                <div key={d}>
                  {d}
                  <br />
                </div>
              ))}
        </p>
      </CardContent>
    </Card>
  );
};
