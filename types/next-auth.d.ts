import NextAuth, { DefaultSession } from "next-auth";

// @link: https://next-auth.js.org/getting-started/typescript

// using "module augmentation"
declare module 'next-auth' {
  // Extend the build-in session types
  interface Session {
    accessToken?: string | unknown;
    user?: {
      id: string | unknown;
      email?: string;
      picture?: string;
      image?: string;
    } & DefaultSession['user'];
  }
}
