import React, { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background">
      <div>
        Navbar
      </div>
      {children}
      <div>
        footer
      </div>
    </div>
  );
};

export default layout;
