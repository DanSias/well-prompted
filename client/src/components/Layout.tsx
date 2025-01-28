import React from "react";
import { Outlet } from "react-router";
import Toolbar from "./Toolbar";

const Layout: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <div className="pt-16"> {/* Add padding to account for the toolbar height */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
