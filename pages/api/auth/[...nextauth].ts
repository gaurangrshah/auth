import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { User } from "next-auth"
import type { NextAuthOptions } from "next-auth"
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google"
import { JWT } from 'next-auth/jwt';


export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Username", type: "text", placeholder: "you@youremail.com", value: "test@test.com" },
        password: { label: "Password", type: "password", placeholder: 'password', value: "test" }
      },
      async authorize(credentials, req) {
        if(!credentials || !credentials?.email ||credentials?.password ) {
          const user = await prisma.user.findUnique({
            where: { email: credentials?.email },
          })
          if(!user || !user?.password) {
            return null
          };

          return user
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET)
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_SERVER_HOST,
        port: process.env.SMTP_SERVER_PORT,
        auth: {
          user: process.env.SMTP_SERVER_EMAIL,
          pass: process.env.SMTP_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
  ],
  session: {
    strategy: 'jwt' // required for credentials auth
  },
  callbacks: {
    jwt({ token, account, profile }) {
       // required for credentials auth
      if(account) {
        token.accessToken = account.access_token
        token.id = profile?.sub
      }
      return token
    },
    session({session, token, user}) {
      // not required for any auth -- extends session
      if(!session.accessToken) {
        session.accessToken = token.accessToken
      }
      if(session.user) {
        session.user.id = user?.id;
        session.user.name = token.name
      }

      return session;
    }
  },
}

export default NextAuth(authOptions)
