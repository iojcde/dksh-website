"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: ReactNode }) => (
  <BalancerProvider>
    <SessionProvider refetchInterval={5 * 60}>
      <ProgressBar color="#056cc7" options={{ showSpinner: false }} />
      {children}
    </SessionProvider>
  </BalancerProvider>
);

export default Providers;
