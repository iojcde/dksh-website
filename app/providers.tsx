"use client";
import { ReactNode } from "react";
import { Provider as BalancerProvider } from "react-wrap-balancer";
const Provider = ({ children }: { children: ReactNode }) => (
  <BalancerProvider>{children}</BalancerProvider>
);

export default Provider;
