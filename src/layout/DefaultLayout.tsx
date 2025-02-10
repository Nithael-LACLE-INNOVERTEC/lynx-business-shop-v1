// src/layout/DefaultLayout.tsx
import { useState } from "react";
import Header from "../components/Header/index";
import Sidebar from "../components/Sidebar/index";
import Footer from "../pages/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DefaultLayout = () => {
  const { isLoggedIn } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar nur anzeigen, wenn der Benutzer eingeloggt ist */}
        {isLoggedIn && (
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        )}

        {/* Content Bereich */}
        <div
          className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden transition-all duration-300 ${isLoggedIn ? (sidebarOpen ? (sidebarCollapsed ? "ml-20" : "ml-72") : "ml-0") : "ml-0"
            }`}
        >
          {/* Header bleibt fix */}
          <Header
            sidebarOpen={isLoggedIn ? sidebarOpen : false}
            setSidebarOpen={isLoggedIn ? setSidebarOpen : () => { }}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />

          {/* Hauptinhalt */}
          <main className="bg-gray-100 w-full flex-grow">
            <Outlet />
          </main>

          {/* Footer */}
          <div className="mt-8 sm:mt-3">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
