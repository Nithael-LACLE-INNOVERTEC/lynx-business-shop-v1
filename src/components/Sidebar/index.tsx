import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@/assets/react.svg";
import {
  FaTachometerAlt, FaChevronDown, FaChevronLeft, FaCog,
  FaShoppingCart, FaUserLock, FaSignInAlt, FaUser,
  FaTags, FaPlus, FaList, FaBoxOpen, FaClipboardList,

} from "react-icons/fa";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, sidebarCollapsed, setSidebarCollapsed }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  // Dropdown-Menüs
  const [isGestionProduitsOpen, setIsGestionProduitsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  // Klick außerhalb der Sidebar schließt sie
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  // Automatische Sidebar-Anpassung für kleine Bildschirme
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarCollapsed]);

  // **Dropdowns automatisch öffnen, wenn eine Route aktiv ist**
  useEffect(() => {
    setIsDashboardOpen(pathname.includes("/auth/dashboard"));
    setIsAuthOpen(pathname.includes("/auth/signin") || pathname.includes("/auth/signup"));
  }, [pathname]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-999 h-screen flex flex-col bg-black text-white transition-all duration-300 ${sidebarOpen ? (sidebarCollapsed ? "w-24" : "w-72") : "w-0 overflow-hidden"
        }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center px-6 py-5">
        <NavLink to="/" className="flex items-center gap-2">
          {/* Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-8 h-8 rounded-full" />
          </div>
          {!sidebarCollapsed && <span className="text-lg font-bold text-white">Boulangerie Express</span>}
        </NavLink>
      </div>

      {/* Sidebar Menü */}
      <nav className="mt-5 px-4">
        <ul className="flex flex-col gap-2">
          {/* Dashboard Menü mit Dropdown */}
          <li>
            <button
              className={`group flex items-center w-full gap-3 p-3 text-white hover:bg-gray-700 rounded-md ${isDashboardOpen ? "bg-gray-700" : ""
                }`}
              onClick={() => setIsDashboardOpen(!isDashboardOpen)}
              title="Dashboard"
            >
              <FaTachometerAlt className="text-xl" />
              {!sidebarCollapsed && <span>Dashboard</span>}
              {isDashboardOpen ? <FaChevronDown className="ml-auto text-xl" /> : <FaChevronLeft className="ml-auto text-xl" />}
            </button>

            {/* eCommerce Dropdown */}
            {isDashboardOpen && (
              <ul className="pl-6">
                <li>
                  <NavLink
                    to="/auth/dashboard"
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white ${isActive ? "!text-white" : "text-bodydark2"
                      }`
                    }
                    title="eCommerce"
                  >
                    <FaShoppingCart className="text-xl" />
                    {!sidebarCollapsed && <span>eCommerce</span>}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Titel: GESTION DE STOCKS */}
          <li className="text-gray-400 uppercase px-4 py-2 font-bold text-sm" title="Gestion de stocks">
            {sidebarCollapsed ? "STOCKS" : "GESTION DE STOCKS"}
          </li>
          {/* Gestion Categories */}
          <li>
            <button
              className={`group flex items-center w-full gap-3 p-3 text-white hover:bg-gray-700 rounded-md ${isCategoriesOpen ? "bg-gray-700" : ""
                }`}
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              title="Gestion de catégories"
            >
              <FaTags className="text-xl" />
              {!sidebarCollapsed && <span>Gestion catégories</span>}
              {isCategoriesOpen ? <FaChevronDown className="ml-auto text-xl" /> : <FaChevronLeft className="ml-auto text-xl" />}
            </button>
            {isCategoriesOpen && (
              <ul className="pl-6">
                <li className="mb-1">
                  <NavLink to="/auth/category/list"
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white ${isActive ? "!text-white bg-gray-700" : "text-bodydark2"
                      }`
                    }
                      title="Categories"
                    >
                    <FaList className="text-xl" />
                    {!sidebarCollapsed && <span>Catégories</span>}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categories/add" className={({ isActive }) =>
                    `group flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white ${isActive ? "!text-white bg-gray-700" : "text-bodydark2"
                    }`
                  }
                     title="Ajouter une categorie"
                  >
                    <FaPlus className="text-xl" />
                    {!sidebarCollapsed && <span>Ajouter catégories</span>}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Gestion de produits (Dropdown) */}
          <li>
            <button
              className={`group flex items-center w-full gap-3 p-3 text-white hover:bg-gray-700 rounded-md ${isGestionProduitsOpen ? "bg-gray-700" : ""
                }`}
              onClick={() => setIsGestionProduitsOpen(!isGestionProduitsOpen)}
              title="Gestion de produits"
            >
              <FaBoxOpen className="text-xl" />
              {!sidebarCollapsed && <span>Gestion de produits</span>}
              {isGestionProduitsOpen ? <FaChevronDown className="ml-auto text-xl" /> : <FaChevronLeft className="ml-auto text-xl" />}
            </button>

            {/* Untermenü: Liste de stocks */}
            {isGestionProduitsOpen && (
              <ul className="pl-6">
                <li>
                  <NavLink
                    to="/stocks/produits/list"
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white ${isActive ? "!text-white bg-gray-700" : "text-bodydark2"
                      }`
                    }
                    title="Liste de stocks"
                  >
                    <FaClipboardList className="text-xl" />
                    {!sidebarCollapsed && <span>Liste de stocks</span>}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Einstellungen */}
          <li>
            <NavLink to="/settings" className="group flex items-center gap-3 p-3 text-white hover:bg-gray-700 rounded-md" title="Configurations">
              <FaCog className="text-xl" />
              {!sidebarCollapsed && <span>Configurations</span>}
            </NavLink>
          </li>

          {/* Authentication Menü mit Dropdown */}
          <li>
            <button
              className={`group flex items-center w-full gap-3 p-3 text-white hover:bg-gray-700 rounded-md ${isAuthOpen ? "bg-gray-700" : ""
                }`}
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              title="Authentication"
            >
              <FaUserLock className="text-2xl" />
              {!sidebarCollapsed && <span>Authentication</span>}
              {isAuthOpen ? <FaChevronDown className="ml-auto text-xl" /> : <FaChevronLeft className="ml-auto text-xl" />}
            </button>

            {/* Authentication Dropdown */}
            {isAuthOpen && (
              <ul className="pl-6">
                <li className="mb-1">
                  <NavLink
                    to="/auth/signin"
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white ${isActive ? "!text-white bg-gray-700" : "text-bodydark2"
                      }`
                    }
                    title="My Profile"
                  >
                    <FaUser className="text-xl" />
                    {!sidebarCollapsed && <span>Mon profil</span>}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/auth/signup"
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white ${isActive ? "!text-white" : "text-bodydark2"
                      }`
                    }
                    title="Sign Up"
                  >
                    <FaSignInAlt className="text-xl" />
                    {!sidebarCollapsed && <span>Sign Up</span>}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
