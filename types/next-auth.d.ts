import { User, Profile } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    grade: number | null;
    class: number | null;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface User extends Omit<DefaultUser, "id"> {
    id: number;
    grade: number | null;
    class: number | null;
  }

  interface Profile extends Profile {
    email_verified?: boolean;
  }
}
