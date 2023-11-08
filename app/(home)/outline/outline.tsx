import { Controls } from "./controls";
import Image from "next/image";
export const Outline = async () => {
  return (
    <div className="outline-section pt-12 overflow-clip">
      <div className="container px-0 sm:px-6 h-full w-full">
        <div className="px-6 sm:px-0">
          <h2 className="text-4xl font-extrabold">개요</h2>
        </div>
        <div className="mt-8 w-full  relative pb-32">
          <div className="section-container snap-x snap-mandatory h-[36rem] lg:h-[42rem] overflow-x-scroll lg:overflow-visible   ">
            <div className="section-list  flex items-stretch xl:gap-24 h-full">
              <div className="section snap-center relative bg-gradient-to-br min-w-full from-black to-dksh-500 lg:rounded-[1.8rem] dark text-gray-12 tracking-wide w-full  overflow-hidden  font-extrabold">
                <div className="text-4xl font-extrabold z-10 bg-gradient-to-t bottom-0 inset-x-0 absolute from-black/80 p-16 to-transparent">
                  단대소고는 수도권 유일
                  <br /> 소프트웨어 고등학교입니다.
                </div>
                <video
                  src="https://res.cloudinary.com/iojcde/video/upload/c_limit,w_1280/f_auto/q_auto/video1_ux4tjz.mp4"
                  className="video1 absolute inset-0 object-cover w-full object-top  h-full"
                  autoPlay
                  muted
                ></video>
              </div>
              <div className="section  snap-center  bg-gradient-to-br min-w-full from-black to-dksh-500 lg:rounded-[1.8rem] dark text-gray-12 tracking-wide w-full flex items-center text-3xl justify-center  font-extrabold">
                준비중 2
              </div>
              <div className="section  snap-center  bg-gradient-to-br min-w-full from-black to-dksh-500 lg:rounded-[1.8rem] dark text-gray-12 tracking-wide w-full flex items-center  text-3xl  justify-center  font-extrabold">
                준비중 3
              </div>
              <div className="section  snap-center  bg-gradient-to-br min-w-full from-black to-dksh-500 lg:rounded-[1.8rem] dark text-gray-12 tracking-wide w-full flex items-center  text-3xl  justify-center  font-extrabold">
                준비중 4
              </div>
            </div>{" "}
          </div>
          <Controls />
        </div>
      </div>
    </div>
  );
};
