import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@jsx-email/all";
import * as React from "react";

export const VerificationEmail = ({ url }: { url: string }) => {
  const previewText = `단대소고에 로그인하세요.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto bg-white font-sans">
          <Container className="mx-auto mb-[40px] max-w-2xl p-[20px]">
            <Text className="text-xl font-extrabold">단대소고</Text>

            <Heading as="h1" className="text-3xl"></Heading>
            <Text className="text-base leading-[16px]"> 안녕하세요,</Text>
            <Text className="text-base">
              아래 링크를 눌러 단대소고에 로그인하세요.
            </Text>

            <Button
              pX={20}
              pY={12}
              className="rounded-lg bg-[#000000] font-semibold text-white no-underline"
              href={url}
            >
              로그인
            </Button>

            <Text className="mt-8">단대소고</Text>
            <Text className="mt-8 text-gray-500">
              {/* If you didn&apos;t try to login, you can safely ignore this email. */}
              로그인 시도를 하지 않았다면, 이 이메일을 무시해 주세요.
            </Text>
          </Container>
          <Hr />
        </Body>
      </Tailwind>
    </Html>
  );
};
export default VerificationEmail;
