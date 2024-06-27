import { ReactNode } from "react";

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h4>Sidebar</h4>
      <h2>{children}</h2>
    </div>
  );
};

export default AdminDashboardLayout;
