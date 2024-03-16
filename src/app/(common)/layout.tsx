import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h4>Sidebar</h4>
      <h2>{children}</h2>
    </div>
  );
};

export default DashboardLayout;
