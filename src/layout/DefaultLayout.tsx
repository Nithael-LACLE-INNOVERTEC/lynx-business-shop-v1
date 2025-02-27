// src/layout/DefaultLayout.tsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar/index";
import Header from "../components/Header/index";
import Footer from "../pages/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";


const DefaultLayout = () => {
  const { isLoggedIn } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 bg-black dark:text-bodydark">
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Sidebar anzeigen, wenn eingeloggt */}
        {isLoggedIn && (
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        )}

        {/* Hauptinhalt */}
        <div
          className={`relative flex flex-1 flex-col overflow-y-auto 
                      transition-all duration-300 
                      ${isLoggedIn ? (sidebarOpen ? (sidebarCollapsed ? "ml-24" : "ml-72") : "ml-0") : "ml-0"}`}
        >
          {/* Header */}
          <Header
            sidebarOpen={isLoggedIn ? sidebarOpen : false}
            setSidebarOpen={isLoggedIn ? setSidebarOpen : () => { }}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />

          {/* Inhalt */}
          <main className="bg-gray-100 w-full flex-grow">
            <Outlet />
          </main>

          {/* Scroll to Top Button */}
          <ScrollToTop />

          {/* Footer */}
          <div className="w-full bg-gray-900 text-white mt-auto">
            <Footer />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;