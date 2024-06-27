import { ReactNode } from "react";
import UserLayout from "./layout/UserLayout";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <UserLayout>{children}</UserLayout>
    </div>
  );
};

export default DashboardLayout;
