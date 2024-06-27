import { AdminSidebarWrapper } from "@/components/Dashboard/Sidebar/adminSidebar";
import { DashboardNavbarWrapper } from "@/components/Dashboard/dashboardNavbar/dashboardNavbar";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <AdminSidebarWrapper />
      <DashboardNavbarWrapper>{children}</DashboardNavbarWrapper>
    </div>
  );
};

export default AdminLayout;
