import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCog, FaChartBar, FaChevronDown, FaChevronLeft } from "react-icons/fa";
import logo from "@/assets/react.svg";

const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) =>
    setOpenDropdown(openDropdown === menu ? null : menu);

  return (
    <div
      className={`sidebar h-screen bg-gray-900 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center p-4 border-b border-gray-700">
        {/* Logo nur bei Collapse sichtbar, und nach Links verschoben */}
        {isCollapsed ? (
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          </div>
        ) : (
          // Bei nicht-Collapse: Logo + Text
          <>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
            </div>
            <span className="text-lg font-bold">Boulangerie Express</span>
          </>
        )}
      </div>

      {/* Sidebar Menu */}
      <ul className="mt-4 space-y-2">
        <li>
          <Link to="/dashboard" className="flex items-center p-3 hover:bg-gray-700">
            <FaChartBar size={20} />
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>
        </li>

        {/* Dropdown Menü */}
        <li>
        <button
          onClick={() => toggleDropdown("settings")}
          className="flex items-center w-full p-3 hover:bg-gray-700"
        >
          <FaCog size={20} />
          {!isCollapsed && <span className="ml-3">Einstellungen</span>}

          {!isCollapsed && (
            <span className="ml-auto">
              {openDropdown === "settings" ? (
                <FaChevronDown size={16} /> // Pfeil nach unten, wenn offen
              ) : (
                <FaChevronLeft size={16} /> // Pfeil nach außern, wenn geschlossen
              )}
            </span>
          )}
        </button>

        {openDropdown === "settings" && !isCollapsed && (
          <ul className="ml-6 space-y-2">
            <li>
              <Link to="/profile" className="flex items-center p-2 hover:bg-gray-700">
                <FaUser size={16} />
                {!isCollapsed && <span className="ml-3">Profil</span>}
              </Link>
            </li>
            <li>
              <Link to="/preferences" className="flex items-center p-2 hover:bg-gray-700">
                <FaCog size={16} />
                {!isCollapsed && <span className="ml-3">Voreinstellungen</span>}
              </Link>
            </li>
          </ul>
        )}
      </li>
      </ul>
    </div>
  );
};

export default Sidebar;
