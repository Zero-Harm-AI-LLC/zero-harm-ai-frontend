import { Link, useLocation } from "react-router-dom";
import logo from "../assets/privacy-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Docs", path: "/docs" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo} 
            alt="Zero Harm AI Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold whitespace-nowrap">Zero Harm AI</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={
                pathname === path
                  ? "text-yellow-200 font-semibold"
                  : "hover:text-yellow-100"
              }
            >
              {name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
