import { UserSidebarWrapper } from "@/components/Dashboard/Sidebar/userSidebar";
import { DashboardNavbarWrapper } from "@/components/Dashboard/dashboardNavbar/dashboardNavbar";
import { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <UserSidebarWrapper />
      <DashboardNavbarWrapper>{children}</DashboardNavbarWrapper>
    </div>
  );
};

export default UserLayout;
