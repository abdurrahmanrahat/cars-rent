import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/Navbar/Navbar";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cars Rent",
  description: "Welcome to Famous Shop to Rent Cars",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
