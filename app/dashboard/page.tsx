import { getSession } from "@/lib/auth";
import { DishCard } from "./cards/dish";
import { CalendarCard } from "./cards/Calendar";

const DashboardPage = async () => {
  const session = await getSession();

  return (
    <div className="py-8">
      <div className="container py-8">
        <span className="text-dksh-500 text-sm font-semibold tracking-wide">
          STUDENT DASHBOARD
        </span>
        <h1 className="text-4xl font-extrabold mt-2">
          안녕하세요, {session?.user.name}님!
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 mt-16 container max-w-[85rem]">
        <DishCard />
        <CalendarCard />
      </div>
    </div>
  );
};
export default DashboardPage;
