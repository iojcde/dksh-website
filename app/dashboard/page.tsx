import { getSession } from "@/lib/auth";
import { MealCard } from "./cards/meal";
import { CalendarCard } from "./cards/calendar";
import { TimeTableCard } from "./cards/time-table";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";

const DashboardPage = async () => {
  const session = await getSession();

  return (
    <div className="py-8">
      <div className="container flex justify-between items-center py-8">
        <div>
          <span className="text-dksh-500 text-sm font-semibold tracking-wide">
            STUDENT DASHBOARD
          </span>
          <h1 className="text-4xl font-extrabold mt-2">
            안녕하세요, {session?.user.name}님!
          </h1>
        </div>
        <div>
          <Link
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 font-semibold"
            )}
            href="/settings"
          >
            <Settings size={20} className="text-gray-11" /> 설정
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-16 container max-w-[85rem]">
        <Suspense fallback={<MealCard.loader />}>
          <MealCard />
        </Suspense>
        <TimeTableCard />
        <CalendarCard />
      </div>
    </div>
  );
};
export default DashboardPage;
