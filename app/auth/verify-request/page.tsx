import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const VerifyRequestPage = () => {
  return (
    <div className="container py-24 text-center">
      <div className="mx-auto flex items-center p-2 rounded-full justify-center bg-pink-500 aspect-square max-w-min text-white">
        <Mail />
      </div>
      <h1 className="text-4xl font-extrabold mt-4">이메일을 확인해주세요.</h1>
      <p className="mt-8">
        이메일을 확인하고, 이메일에 있는 링크를 클릭하여 로그인을 완료해주세요.
      </p>

      <Button asChild className="mt-16">
        
        <a  href="https://mail.google.com" target="_blank">Gmail로 바로가기</a>
      </Button>
    </div>
  );
};
export default VerifyRequestPage;
