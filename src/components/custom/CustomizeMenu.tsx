import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const CustomizeMenu = ({ onClose }: { onClose: () => void }) => {
  const [navbarColorScheme, setNavbarColorScheme] = useState("white"); // Default Navbar color
  const [sidebarColorScheme, setSidebarColorScheme] = useState("BoulangerieDarkBlue"); // Default Sidebar color

  // Farbvarianten für Navbar
  const navbarVariants = {
    white: "#ffffff",
    orange: "#ff7f00",
    primary: "#007bff", // Primärfarbe
  };

  // Farbvarianten für Sidebar
  const sidebarVariants = {
    BoulangerieDark: "#111827",
    darkBlue: "#000080",
    orange: "#ff7f00",
    skyBlue: "#87ceeb",
  };

  const handleNavbarColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNavbarColorScheme(e.target.value);
  };

  const handleSidebarColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSidebarColorScheme(e.target.value);
  };

  // Dynamische Farben basierend auf den jeweiligen Auswahlwerten
  const navbarColor = navbarVariants[navbarColorScheme as keyof typeof navbarVariants];
  const sidebarColor = sidebarVariants[sidebarColorScheme as keyof typeof sidebarVariants];

  return (
    <div className="fixed top-[60px] right-0 w-64 h-[calc(100vh-120px)] bg-gray-800 text-white shadow-lg z-50">
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <span className="text-lg font-bold">Einstellungen</span>
        <button onClick={onClose} className="text-white">
          <FaTimes size={20} />
        </button>
      </div>

      {/* Einstellungen (Menü-Inhalt) */}
      <ul className="p-4 space-y-3">
        {/* Farbwahl für Navbar */}
        <li className="p-2 text-white">
          <label>Navbar Farben:</label>
          <div className="mt-2">
            <select
              onChange={handleNavbarColorChange}
              value={navbarColorScheme}
              className="w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="white">Weiß</option>
              <option value="orange">Orange</option>
              <option value="primary">Primär (Blau)</option>
            </select>
          </div>
        </li>

        {/* Farbwahl für Sidebar */}
        <li className="p-2 text-white">
          <label>Sidebar Farben:</label>
          <div className="mt-2">
            <select
              onChange={handleSidebarColorChange}
              value={sidebarColorScheme}
              className="w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="BoulangerieDark">BoulangerieDarkBlue</option>
              <option value="darkBlue">Dunkelblau</option>
              <option value="orange">Orange</option>
              <option value="skyBlue">Himmelblau</option>
            </select>
          </div>
        </li>
      </ul>

      {/* Dynamische Anwendung der Farben */}
      <style>
        {`
          .navbar {
            background-color: ${navbarColor};
          }
          .sidebar {
            background-color: ${sidebarColor};
          }
        `}
      </style>
    </div>
  );
};

export default CustomizeMenu;
