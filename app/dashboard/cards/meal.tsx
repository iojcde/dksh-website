import { getMeal } from "@/actions/meal/get-meal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Utensils } from "lucide-react";

export const MealCard = async () => {
  const { meal, img } = await getMeal();

  return (
    <Card className="sm:max-w-sm w-full">
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
      <CardContent className="flex gap-8 items-start">
        <p className=" leading-8 text-lg font-medium">
          {typeof meal === "string"
            ? meal
            : meal?.map((d) => (
                <span key={d}>
                  {d}
                  <br />
                </span>
              ))}
        </p>

        {img && (
          <img
            className="rounded-md w-48 overflow-clip object-cover"
            src={img}
            alt=""
          />
        )}
      </CardContent>
    </Card>
  );
};

MealCard.loader = () => <Card className="sm:max-w-sm w-full" />;
