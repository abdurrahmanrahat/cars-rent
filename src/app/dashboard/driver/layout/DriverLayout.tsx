import { DriverSidebarWrapper } from "@/components/Dashboard/Sidebar/driverSidebar";
import { DashboardNavbarWrapper } from "@/components/Dashboard/dashboardNavbar/dashboardNavbar";
import { ReactNode } from "react";

const DriverLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <DriverSidebarWrapper />
      <DashboardNavbarWrapper>{children}</DashboardNavbarWrapper>
    </div>
  );
};

export default DriverLayout;
