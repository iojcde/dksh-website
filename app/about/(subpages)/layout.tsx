import { ReactNode } from "react";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex container gap-8">
    <Sidebar />
    {children}
  </div>
);
export default Layout;
