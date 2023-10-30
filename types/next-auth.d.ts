import { User, Profile } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    grade: number;
    class: number;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface User extends Omit<DefaultUser, "id"> {
    id: number;
    grade: number;
    class: number;
  }

  interface Profile extends Profile {
    email_verified?: boolean;
  }
}
