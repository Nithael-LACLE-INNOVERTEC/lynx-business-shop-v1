import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaThLarge, FaTimes } from "react-icons/fa";
import CustomizeMenu from "./custom/CustomizeMenu";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navbarColorScheme, setNavbarColorScheme] = useState("white"); // Default Navbar color

  // Farbvarianten für Navbar
  const navbarVariants = {
    white: "#ffffff",
    orange: "#ff7f00",
    primary: "#007bff", // Primärfarbe
  };

   // Dynamische Farben basierend auf der Auswahl
   const navbarColor = navbarVariants[navbarColorScheme as keyof typeof navbarVariants];
  
   // Textfarbe auf weiß setzen, wenn die Primärfarbe verwendet wird
   const textColor = navbarColorScheme === "primary" ? "text-white" : "text-gray-600";



  return (
    <nav className="navbar bg-white shadow-md sticky top-0 z-50 w-full ">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Links + Hamburger */}
        <div className="flex items-center space-x-6">
          <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
            <FaBars size={24} />
          </button>
          <Link to="/" className="text-lg font-semibold text-blue-600">
            Home
          </Link>
          <Link to="/contact" className="text-lg font-semibold text-blue-600">
            Contact
          </Link>
        </div>

        {/* Rechts: Kundenservice, Login, Customize */}
        <div className="flex items-center space-x-6">
          <Link to="/customerservice" className="text-lg font-semibold text-gray-600">
            Service client
          </Link>
          <Link to="/account/login" className="text-lg font-semibold text-gray-600">
            Login
          </Link>

          {/* Customize */}
          <nav>
            {/* Customize AdminLTE */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <FaThLarge size={15} />
            </button>
            {/* Ausgehend-Menü (Erscheint von rechts) */}
            {isSidebarOpen && <CustomizeMenu onClose={() => setIsSidebarOpen(false)} />}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
