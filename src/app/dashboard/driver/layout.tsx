import { Metadata } from "next";
import { ReactNode } from "react";
import DriverLayout from "./layout/DriverLayout";

export const metadata: Metadata = {
  title: "Driver Dashboard",
  description: "Welcome to Famous Shop to Rent Cars",
};

const DriverDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DriverLayout>{children}</DriverLayout>
    </div>
  );
};

export default DriverDashboardLayout;
