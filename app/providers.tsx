"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider as BalancerProvider } from "react-wrap-balancer";
const Providers = ({ children }: { children: ReactNode }) => (
  <BalancerProvider>
    <SessionProvider refetchInterval={5 * 60}>{children}</SessionProvider>
  </BalancerProvider>
);

export default Providers;
