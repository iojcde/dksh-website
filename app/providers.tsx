"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, Suspense } from "react";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: ReactNode }) => (
  <BalancerProvider>
    <SessionProvider refetchInterval={5 * 60}>
     <Suspense>
     <ProgressBar
        style=""
        color="#056cc7"
        options={{
          showSpinner: false,
          speed: 10000,
        }}
      />
     </Suspense>
      {children}
    </SessionProvider>
  </BalancerProvider>
);

export default Providers;
