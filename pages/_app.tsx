import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"
import { NextRouter } from "next/router"
import { NextComponentType } from 'next';

export default function App({ Component, pageProps: {session, ...pageProps}, router }: AppProps) {
  const { asPath } = router;
  const { auth } = Component as NextComponentType & { auth: boolean };
  return (
    <SessionProvider session={session}>
      {auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

function Auth({ children }: { children: React.ReactNode }) {
  // @link: https://next-auth.js.org/getting-started/client#custom-client-session-handling
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
