import { Metadata } from "next";
import { ReactNode } from "react";
import AdminLayout from "./layout/AdminLayout";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Welcome to Famous Shop to Rent Cars",
};

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
};

export default AdminDashboardLayout;
