import Navbar from "@/components/shared/navbar/Navbar";
import React, { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background">
      <Navbar />
      {children}
      <div>
        footer
      </div>
    </div>
  );
};

export default layout;
