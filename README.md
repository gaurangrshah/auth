```shell
npx create-next-app --template typescript auth
```

```shell
yarn add next-auth @prisma/client @next-auth/prisma-adapter nodemailer
```

```shell
yarn add -D prisma ts-node
```

```shell
npx prisma init --datasource-provider sqlite
```

```json
// tsconfig.json

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "*"
      ]
    },
  }
}
```

```
# .env.local

NEXTAUTH_URL=http://localhost:3000
SECRET=
DATABASE_URL=file:./dev.db

```

```tsx
// pages/_app.tsx

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
```



## Styles

```css
/*
	== styles/global.css ==
  This is a stylesheet merged from next / next-auth
*/

:root {
  --border-width: 1px;
  --border-radius: 0.5rem;
  --color-error: #c94b4b;
  --color-info: #157efb;
  --color-info-text:#fff
}

.__next-auth-theme-auto, .__next-auth-theme-light {
  --color-background: #fff;
  --color-text: #000;
  --color-primary: #444;
  --color-control-border: #bbb;
  --color-button-active-background: #f9f9f9;
  --color-button-active-border: #aaa;
  --color-seperator:#ccc
}

.__next-auth-theme-dark {
  --color-background: #000;
  --color-text: #fff;
  --color-primary: #ccc;
  --color-control-border: #555;
  --color-button-active-background: #060606;
  --color-button-active-border: #666;
  --color-seperator:#444
}

@media (prefers-color-scheme: dark) {
  .__next-auth-theme-auto {
      --color-background: #000;
      --color-text: #fff;
      --color-primary: #ccc;
      --color-control-border: #555;
      --color-button-active-background: #060606;
      --color-button-active-border: #666;
      --color-seperator:#444
  }
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background-color: var(--color-background);
    margin: 0;
    padding:0;
  }
}

h1 {
  font-weight: 400;
  margin-bottom: 1.5rem;
  padding:0 1rem
}

h1, p {
  color:var(--color-text)
}

form {
  margin: 0;
  padding:0
}

label {
  font-weight: 500;
  margin-bottom: .25rem;
  text-align:left
}

input[type], label {
  color: var(--color-text);
  display:block
}

input[type] {
  background: var(--color-background);
  border: var(--border-width) solid var(--color-control-border);
  border-radius: var(--border-radius);
  box-shadow: inset 0 .1rem .2rem rgba(0, 0, 0, .2);
  box-sizing: border-box;
  font-size: 1rem;
  padding: .5rem 1rem;
  width:100%
}

input[type]:focus {
  box-shadow:none
}

p {
  font-size: 1.1rem;
  line-height: 2rem;
  margin: 0 0 1.5rem;
  padding:0 1rem
}

a.button {
  line-height: 1rem;
  text-decoration:none
}

a.button:link, a.button:visited {
  background-color: var(--color-background);
  color:var(--color-primary)
}

a.button, button {
  align-items: center;
  background-color: var(--provider-bg, var(--color-background));
  border-color: rgba(0, 0, 0, .1);
  border-radius: var(--border-radius);
  box-shadow: 0 0 0 0 #000, 0 0 0 0 #000, 0 10px 15px -3px rgba(0, 0, 0, .2), 0 4px 6px -4px rgba(0, 0, 0, .1);
  color: var(--provider-color, var(--color-primary));
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  justify-content: center;
  margin: 0 0 .75rem;
  min-height: 62px;
  padding: .75rem 1rem;
  position: relative;
  transition:all .1s ease-in-out
}

a.button:has(img), button:has(img) {
  justify-content:unset
}

a.button:has(img) span, button:has(img) span {
  flex-grow:1
}

a.button:hover, button:hover {
  cursor:pointer
}

a.button:active, button:active {
  box-shadow: 0 .15rem .3rem rgba(0, 0, 0, .15), inset 0 .1rem .2rem var(--color-background), inset 0 -.1rem .1rem rgba(0, 0, 0, .1);
  cursor:pointer
}

a.button #provider-logo, button #provider-logo {
  display:block
}

a.button #provider-logo-dark, button #provider-logo-dark {
  display:none
}
@media (prefers-color-scheme: dark) {
  a.button, button {
      background-color: var(--provider-dark-bg, var(--color-background));
      border: 1px solid #0d0d0d;
      box-shadow: 0 0 0 0 #000, 0 0 0 0 #ccc, 0 5px 5px -3px hsla(0, 0%, 100%, .01), 0 4px 6px -4px hsla(0, 0%, 100%, .05);
      color:var(--provider-dark-color, var(--color-primary))
  }

  #provider-logo {
      display:none !important
  }

  #provider-logo-dark {
      display:block !important
  }
}

.page {
  display: grid;
  height: 100%;
  margin: 0;
  padding: 0;
  place-items: center;
  position: absolute;
  width:100%
}

.page > div {
  padding: .5rem;
  text-align:center
}

.error a.button {
  display: inline-block;
  margin-top: .5rem;
  padding-left: 2rem;
  padding-right:2rem
}

.error .message {
  margin-bottom:1.5rem
}

.signin input[type=text] {
  display: block;
  margin-left: auto;
  margin-right:auto
}

.signin hr {
  border: 0;
  border-top: 1px solid var(--color-seperator);
  display: block;
  margin: 1.5em auto 0;
  overflow:visible
}

.signin hr:before {
  background: var(--color-background);
  color: #888;
  content: "or";
  padding: 0 .4rem;
  position: relative;
  top:-.6rem
}

.signin .error {
  background: #f5f5f5;
  background: var(--color-info);
  border-radius: .3rem;
  font-weight:500
}

.signin .error p {
  color: var(--color-info-text);
  font-size: .9rem;
  line-height: 1.2rem;
  padding: .5rem 1rem;
  text-align:left
}

.signin form, .signin > div {
  display:block
}

.signin form input[type], .signin > div input[type] {
  margin-bottom:.5rem
}

.signin form button, .signin > div button {
  width:100%
}

.signin form, .signin > div {
  max-width:300px
}

.signout .message {
  margin-bottom:1.5rem
}


.card {
  border: 1px solid var(--color-control-border);
  border-radius: 5px;
  margin: 50px auto;
  max-width: -webkit-max-content;
  max-width: -moz-max-content;
  max-width: max-content;
  padding:20px 50px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

}

.card .header {
  color:var(--color-primary)
}

.section-header {
  color: var(--brand-color, var(--color-text))
}
```





## Prisma

```tsx
// lib/prisma.ts

import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
```

```js
// prisma/schema.prisma

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? // @db.Text
  access_token      String? // @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? // @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  password      String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```

```shell
npx prisma migrate dev --name init
```

```shell
npx prisma generate
```



## Credentials 

There are several key pieces that need to be in place for credentials auth to work properly. 

### Register

First and foremost we need a user in the database to actually signin with. In order to create the user path for this we'lll add a simple register route:

```ts
// pages/api/auth/register.ts

import { registerUser } from "@/lib/prisma/handlers"
import type { NextApiRequest, NextApiResponse } from 'next'

async function register(req:NextApiRequest, res:NextApiResponse) {
  if(req.method !== 'POST') return res.status(404).json({error: {message: "invalid request"}})
  const {name, email, password} =  req.body
  if(!name || !email || !password) {
    return res.status(400).json({error: {message: 'invalid credentials'}})
  }

  const user = await registerUser(req.body)
  if(!user) return res.status(500).json({error: {message: "prisma server error"}});

  return res.status(201).json(user)
}

export default register;
```

```tsx
// lib/prisma/handlers.ts

import { Prisma, User } from "@prisma/client";
import prisma from "./index"

export async function registerUser ({name, email, password}: User):Promise<User | void> {
  try {
    const user = await prisma.user.create({data: {name, email, password}})
    return user;
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
      // https://tinyurl.com/2mmxxmco
      if (error.code === 'P2002') {
        // https://tinyurl.com/2fkot932
        throw new Error(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      } else {
        throw new Error('register-user', error)
      }
    }
    if(error instanceof Prisma.PrismaClientValidationError) {
      throw new Error(error.message)
    }
  }
}
```

```tsx
// pages/auth/signup.tsx

import React from 'react'

const Signup = () => {
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    const formInputs = [...document.querySelectorAll('input')]
    formInputs.pop()
    const formData = formInputs.reduce((obj, item) => Object.assign(obj, {[item.name]: item.value}), {})

   const response = await fetch('/api/auth/register', {method: 'POST', headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  const newUser = await response.json()
  console.log(newUser)
  }

  return (
    <div className="page">
      <div className="signin">
        <div className="card">
          <div className="provider">
            <form onSubmit={handleSubmit}>
              <div style={{display: "flex", flexDirection: "column", gap: 6}}>
              <input name="name" type="text" placeholder="username" />
              <input name="email" type="text" placeholder="you@youremail.com" />
              <input name="password" type="password" placeholder="**********" />

              <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
```



### Auth

```tsx
// pages/api/auth/[...nextauth].js

import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import prisma from "@/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Username", type: "text", placeholder: "you@youremail.com" },
        password: { label: "Password", type: "password", placeholder: 'password' }
      },
      async authorize(credentials, req) {
        if(!credentials || !credentials?.email ||credentials.password ) {
          const user = await prisma.user.findUnique({
            where: {email: credentials?.email}
          })

          if(!user || !user.password) {
            const newUser = await prisma.user.create({
              data: {...credentials}
            })

            if(!user) return null;
            return newUser
          };

          return user
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt'
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

export default NextAuth(authOptions);
```



## Email

```
# .env.local

EMAIL_SERVER=smtp://username:password@smtp.ethereal.email:587
EMAIL_FROM=Boiler <you@your.email>
SMTP_SERVER_EMAIL=you@your.email
SMTP_SERVER_HOST=smtp.ethereal.email
SMTP_SERVER_PORT=587
SMTP_SERVER_PASSWORD=
```

```tsx
// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";

export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
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
}
```



## Google

[**Developer Console**](https://console.developers.google.com/apis/credentials) - OAuth Consent Screen

[**NextAuth Docs**](https://next-auth.js.org/providers/google) - see for refresh token issue + available `email_verified` property from google `profile` 

```
# .env.local

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```



```tsx
// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google"

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: String(process.env.GOOGLE_CLIENT_ID),
        clientSecret: String(process.env.GOOGLE_CLIENT_SECRET)
      }),
    ],
  }
}

export default NextAuth(authOptions)
```



![image-20221207130236530](https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/uPic/2022/image-20221207130236530.png)

![image-20221207130342506](https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/uPic/2022/image-20221207130342506.png)

![image-20221207130357040](https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/uPic/2022/image-20221207130357040.png)

![image-20221207130417511](https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/uPic/2022/image-20221207130417511.png)

Once you're returned back to the to dashboard click on `Credentials` in the sidebar and then `Create Credentials` in the header. The select `OAuth client ID` from the dropdown:

![image-20221207130615316](https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/uPic/2022/image-20221207130615316.png)

![image-20221207130728921](https://cdn.jsdelivr.net/gh/gaurangrshah/_shots@master/uPic/2022/image-20221207130728921.png)

> The "Authorized redirect URIs" used when creating the credentials must include your full domain and end in the callback path. For example;
>
> - For production: `https://{YOUR_DOMAIN}/api/auth/callback/google`
> - For development: `http://localhost:3000/api/auth/callback/google`
