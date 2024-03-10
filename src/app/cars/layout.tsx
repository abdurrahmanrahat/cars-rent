import { ReactNode } from "react";

const CarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>Sidebar</h2>
      <div>{children}</div>
    </div>
  );
};

export default CarLayout;
