import { Controls } from "./controls";

export const Outline = () => {
  return (
    <div className=" pt-12 ">
      <div className="container h-full w-full">
        <h2 className="text-4xl font-extrabold">개요</h2>
        <div className="mt-8 w-full h-[calc(100vh-64px)] relative pb-32">
          <div className="bg-gradient-to-br from-black to-dksh-500 rounded-[1.8rem] dark text-gray-12 tracking-wide w-full h-full flex items-center justify-center text-9xl font-extrabold">
            준비중...
          </div>
          <Controls />
        </div>
      </div>
    </div>
  );
};
