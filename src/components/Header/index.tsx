import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCompress, FaExpand, FaAddressBook } from "react-icons/fa";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { useAuth } from "../../context/AuthContext";

const Header = (props: {
  sidebarOpen: boolean;
  setSidebarOpen: (arg0: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (arg0: boolean) => void;
}) => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white shadow-md dark:bg-boxdark">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 ml-4 md:ml-0 transition-all duration-300">
          {/* <!-- Sidebar Toggle (Komplett öffnen/schließen) --> */}
          {isLoggedIn && (
            <button
              onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
              className="p-2 border rounded-sm bg-white dark:bg-boxdark shadow-sm"
            >
              {props.sidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>)
          }

          {/* <!-- Sidebar Collapse Button (Nur Texte ausblenden) --> */}
          {props.sidebarOpen && (
            <button
              onClick={() => props.setSidebarCollapsed(!props.sidebarCollapsed)}
              className="hidden md:inline-flex p-2 border rounded-sm bg-white dark:bg-boxdark shadow-sm"
            >
              {props.sidebarCollapsed ? <FaExpand className="text-xl" /> : <FaCompress className="text-xl" />}
            </button>
          )}

          <Link className="block flex-shrink-0" to="/contact" title="Contact">
            <FaAddressBook className="text-3xl text-primary dark:text-white" />
          </Link>
        </div>
        
          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-2">
              <DarkModeSwitcher />
              <DropdownNotification />
              <DropdownMessage />
            </ul>
            {isLoggedIn ? (
              <DropdownUser />
            ) : (
              <Link to="/auth/signin">S'identifier</Link>
            )}
          </div>
      </div>
    </header>
  );
};

export default Header;
