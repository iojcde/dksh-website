import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Router } from "lucide-react";
const DepartmentsPage = () => (
  <div className="container py-24">
    <span className="text-center block text-dksh-500 pb-4 tracking-wide font-semibold text-sm">
      DEPARTMENTS
    </span>
    <h1 className="text-4xl font-extrabold text-center">세부 학과 소개</h1>
    <p className="text-gray-11  text-center max-w-prose mx-auto mt-4">
      단대소고에서는 2학년에 진학할 때 세부 학과를 선택하게 되며, <br /> 선택한
      세부 학과에 따라 학생이 희망하는 진로에 전문화된 교육 과정을 이수하게
      됩니다.
    </p>
    <Tabs defaultValue="ai" className="mt-16  max-w-3xl  mx-auto">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="ai" className="flex items-center gap-2 ">
          <BrainCircuit className="text-pink-500" size={16} /> AI SW
        </TabsTrigger>
        <TabsTrigger value="iot" className="flex items-center gap-2 ">
          <Router className="text-dksh-500" size={16} />
          IOT SW
        </TabsTrigger>
        <TabsTrigger value="game">GAME SW</TabsTrigger>
      </TabsList>
      <TabsContent value="ai" className="prose  p-6">
        <AI />
      </TabsContent>

      <TabsContent value="iot" className="prose  p-6">
        <IoT />
      </TabsContent>
    </Tabs>
  </div>
);

export default DepartmentsPage;

const AI = () => (
  <>
    <h2>AI SOFTWARE</h2>
    <h3>학과 소개</h3>
    <p>
      인공지능소프트웨어과는 4차 산업혁명과 함께 산업 전 분야에서의 AI 응용
      기술에 대한 수요가 급격히 증가함에 따라, 데이터 과학 기초 교육, 기초
      AI원리 교육 및 응용 실습을 통한 융·복합 인재 양성을 목표로 하고 있습니다.
      전통 학문적 사고와 구현의 틀에서 벗어나, 창의적이고 혁신적인 사고력을
      갖추고 신기술 개발 및 시장 창출에 기여할 핵심 인력을 양성하여 국제적 기술
      경쟁력을 확보할 수 있도록 할 것입니다.
    </p>
    <h3>교육과정</h3>
    <p>
      프로그래밍, 컴퓨터시스템일반, 자료구조, 시스템프로그래밍,
      데이터베이스프로그래밍, 응용프로그래밍화면구현, 빅데이터분석, 로봇지능개발
    </p>
    <h3>자격증 취득</h3>
    <p>
      프로그래밍, 컴퓨터시스템일반, 자료구조, 시스템프로그래밍,
      데이터베이스프로그래밍, 응용프로그래밍화면구현, 빅데이터분석, 로봇지능개발
    </p>
    <h3>진학분야</h3>
    <p>인공지능 관련 학과, 정보통신 관련 학과, 네트워크 관련 학과 등</p>
  </>
);

const IoT = () => (
  <>
    <h2>IoT SOFTWARE</h2>

    <h3>학과 소개</h3>
    <p>
      사물인터넷소프트웨어과는 지능화된 사물들과 인터넷을 통해 새로운 서비스와
      효용이 창출될 수 있도록 기초 기술에서 응용기술까지 이론과 실무 능력을 고루
      갖춘 수준 높은 엔지니어를 양성하는 학과입니다. 스마트 디바이스, 유무선
      네트워크, IoT서비스 플랫폼 등을 이용하여 자율적인 소통을 통해 수많은
      데이터를 수집하여 가공 처리하고 실행하는 과정을 거치는 첨단 분야의 종합
      학문 분야입니다. 커넥티드 홈, 커넥티드 카, 스마트 팩토리, 스마트 시티 등
      다양한 산업 분야에서 사물인터넷(IoT)를 통해 혁신을 주도하고, 새로운 가치를
      창출하는 창의적인 능력을 갖춘 인재 양성을 목표로 하고 있습니다.
    </p>

    <h3>교육과정</h3>
    <p>
      프로그래밍, 디지털논리회로, 자료구조, 시스템프로그래밍,
      정보통신기기소프트웨어개발, 네트워크프로그래밍, 응용프로그래밍개발,
      사물인터넷서비스기획
    </p>

    <h3>자격증 취득</h3>
    <p>
      임베디드 관련 자격증, 정보처리기능사, 리눅스마스터, 정보기술자격,
      정보보호전문가 자격증 등
    </p>

    <h3>진학분야</h3>
    <p>사물인터넷 관련 학과, 정보통신 관련 학과, 네트워크 관련 학과 등</p>
  </>
);

const Game = () => (
  <>
    <h2>GAME SOFTWARE</h2>

    <h3>학과 소개</h3>
    <p>
      21세기 문화산업의 중심이 되고 있는 게임 산업은 자체 규모만으로도 이미 다른
      문화산업을 선도할 정도로 급성장하였으며 IT, 영화, 애니메이션, 캐릭터 산업
      등에도 연계파급 효과가 큰 대표문화산업으로 자리매김하고 있습니다. 정부
      또한 게임, 음악, 캐릭터, 영화, 뮤지컬 등 5대 글로벌 킬러 콘텐츠를 집중
      육성하고, 지원을 아끼지 않는 상황에서 국내에서 개발된 우수한 게임들이
      해외로 수출되어 디지털 한류의 중심이 되는 사례처럼 그 주역이 되는 게임
      개발자가 되기 위하여 게임콘텐츠과에서 배우는 모든 과정은 창조하고 도전하는
      현장맞춤형 실무능력을 보유한 인재 양성을 목표로 하고 있습니다.
    </p>

    <h3>교육과정</h3>
    <p>
      프로그래밍, 컴퓨터그래픽, 문화콘텐츠산업일반, 게임디자인, 게임프로그래밍,
      스마트문화앱콘텐츠제작, 응용프로그래밍화면구현, 캐릭터 제작
    </p>

    <h3>자격증 취득</h3>
    <p>
      게임프로그래밍 전문가 자격증, 게임 그래픽 전문가 자격증, 게임기획 전문가
      자격증, 컴퓨터 그래픽 운영 기능사 등
    </p>

    <h3>진학분야</h3>
    <p>게임 관련 학과, 그래픽 관련 학과, 네트워크 관련 학과 등</p>
  </>
);
