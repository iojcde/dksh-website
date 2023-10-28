import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";
import { sendVerificationRequest } from "@/emails/sendVerificationEmail";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { is } from "date-fns/locale";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    EmailProvider({
      server: "",
      from: "auth@dksh.jcde.xyz",
      sendVerificationRequest,
      normalizeIdentifier(identifier: string): string {
        if (identifier.split("@").length > 2) {
          throw new Error("Only one email allowed");
        }

        // Get the first two elements only,
        // separated by `@` from user input.
        let [local, domain] = identifier.toLowerCase().trim().split("@");
        // The part before "@" can contain a ","
        // but we remove it on the domain part
        domain = domain.split(",")[0];

        if (domain != "dankook.sen.hs.kr") {
          throw new Error("Invalid email");
        }

        return `${local}@${domain}`;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      let isAllowedToSignIn = false;

      switch (account?.provider) {
        case "google":
          if (user.email?.endsWith("@dankook.sen.hs.kr")) {
            isAllowedToSignIn = true;
          }
          break;

        case "email":
          if (user.email?.endsWith("@dankook.sen.hs.kr")) {
            isAllowedToSignIn = true;
          }
          break;
      }

      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        throw new Error("단대소고 이메일로만 로그인할 수 있습니다.");
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token, trigger, user }) {
      let dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        throw new Error("User not found");
      }

      // if (!dbUser) {
      //   if (user) {
      //     token.id = user?.id;
      //     token.wsToken =
      //   }
      //   return token;
      // }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
  },
} satisfies NextAuthOptions;

export function getSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
