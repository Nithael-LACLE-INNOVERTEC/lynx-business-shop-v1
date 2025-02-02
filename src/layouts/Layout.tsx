import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../pages/Footer";

const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} />

      <div className="flex flex-col flex-grow min-h-screen transition-all duration-300">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="flex-grow p-4 bg-gray-100">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

