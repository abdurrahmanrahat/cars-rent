import { Metadata } from "next";
import { ReactNode } from "react";
import DashboardLayout from "./layout/dashboardLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to Famous Shop to Rent Cars",
};

const DashboardMainLayout = ({ children }: { children: ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardMainLayout;
