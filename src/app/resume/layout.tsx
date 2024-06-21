import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">{children}</div>
    </div>
  );
};

export default Layout;
